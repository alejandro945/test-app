import { Button, TextField } from '@mui/material'
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

const test = ({questions}) => {
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
    accesCode: '',
    img: false,
    questions: []
  }

  const [test, setTest] = useState(initialState)

  const clearState = () => {
    setTest({ ...initialState });
  };

  const handleChange = (event) => {
    const { name, value } = event.target
    setTest({
      ...test,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    testService.addTest(test, ({ m, type }) => {
      Mixim(m, type)
    })
    clearState()
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
              <TextField fullWidth name="description" value={test.decription} label="Description" variant="outlined" required={true} size="large" onChange={handleChange} />
            </div>
            <div className="col-md-4 p-2">
              <TextField fullWidth type='number' name="accesCode" value={test.accesCode} label="Access Code" variant="outlined" required={true} size="large" onChange={handleChange} />
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="col-md-6 p-2">
              <Select info={imgs} title="Image" name="img" handle={handleChange} />
            </div>
            <div className="col-md-6 p-2">
            <MultipleSelect data={questions} handleChange={handleChange} name='Questions' />
            </div>
          </div>
          <div className="row mt-2 mb-4 ">
            <div className="col-md-12 p-2">
              <Button type='submit' fullWidth size='large' color='basic' variant='outlined' endIcon={<AirplaneTicketOutlinedIcon />}>Save</Button>
            </div>
          </div>
        </form>
      </Container>
      <br/>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await testService.getQuestions()
  const questions = await res.json()
  return {
    props: {
      questions,
    },
  }
}

export default withAuth(test)