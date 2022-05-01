import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import AStepper from '../../components/AStepper'
import Container from '../../components/Container'
import MultipleSelect from '../../components/MultipleSelect'
import Select from '../../components/Select'
import Title from '../../components/Title'
import { testService } from '../../services/testService'
import withAuth from '../../services/withAuth'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import Mixim from '../../components/Mixim'
import { useRouter } from "next/router";
import { userService } from '../../services/userService'

const test = ({ ques }) => {
  const router = useRouter()
  const user = userService.get();

  const imgs = [
    '/img/test-1.jpeg',
    '/img/test-2.jpeg',
    '/img/test-3.jpeg',
    '/img/test-4.jpeg',
    '/img/test-5.jpeg',
    '/img/test-6.jpeg'
  ]

  const initialState = {
    title: '',
    description: '',
    accesscode: 0,
    img: '',
    questions: []
  }

  const [test, setTest] = useState(initialState)

  const handleChange = (event) => {
    const { name, value } = event.target
    setTest({
      ...test,
      [name.toLowerCase()]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (percentageValidation()) {
      testService.addTest({ test, user }, ({ m, type }) => {
        Mixim(m, type)
        router.replace('/home')
      })

    } else {
      Mixim('Missing or exceed percentage', 'warning')
    }
  }

  function percentageValidation() {
    var total = 0
    test.questions.map(q => {
      total += parseInt(q.percentage)
    })
    return (total == 100)
  }

  return (
    <div>
      <Container>
        <Title title="Tests ❄️" description="End your exam in the most comfortable way by adding the number of questions you want. Fascinating right? 🐳" />
      </Container>
      <AStepper step={2} />
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="row mt-2">
            <div className="col-md-4 p-2">
              <TextField fullWidth name="title" value={test.title} label="Title" variant="outlined" required={true} size="large" onChange={handleChange} />
            </div>
            <div className="col-md-4 p-2">
              <TextField fullWidth name="description" value={test.description} label="Description" variant="outlined" required={true} size="large" onChange={handleChange} />
            </div>
            <div className="col-md-4 p-2">
              <TextField fullWidth type='number' name="accesscode" value={test.accesscode} label="Access Code" variant="outlined" required={true} size="large" onChange={handleChange} />
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="col-md-6 p-2">
              <Select info={imgs} title="Image" name="img" handle={handleChange} img={test.img} />
            </div>
            <div className="col-md-6 p-2">
              <MultipleSelect data={ques} handleChange={handleChange} name='Questions' val={test.questions} />
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="col-md-12 p-2">
              <Button type='submit' fullWidth size='large' color='basic' variant='outlined' endIcon={<AirplaneTicketOutlinedIcon />}>Save</Button>
            </div>
          </div>
        </form>
        <Alert severity="warning">Remember that a test must have <strong>100%</strong> of questions percentage 🚨</Alert>
      </Container>
      <br />
    </div>
  )
}

export async function getServerSideProps() {
  const res = await testService.getQuestions()
  const ques = await res.json()
  return {
    props: {
      ques,
    },
  }
}

export default withAuth(test)