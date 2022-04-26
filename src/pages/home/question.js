import { Alert, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import AStepper from '../../components/AStepper'
import Container from '../../components/Container'
import Mixim from '../../components/Mixim'
import MultipleSelect from '../../components/MultipleSelect'
import Title from '../../components/Title'
import { testService } from '../../services/testService'
import withAuth from '../../services/withAuth'
import TerminalTwoToneIcon from '@mui/icons-material/TerminalTwoTone';
import { useRouter } from "next/router";

const question = ({ ans }) => {
  const router = useRouter()

  const initialQuestion = {
    description: '',
    percentage: 0,
    answers: []
  }
  const [question, setQuestion] = useState(initialQuestion);



  const handleChange = (event) => {
    const { name, value } = event.target
    setQuestion({
      ...question,
      [name.toLowerCase()]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answersValidation()) {
      testService.addQuestion(question, ({ m, type }) => {
        Mixim(m, type)
      })
      router.replace('/home/test')
    } else {
      Mixim('Missing corrects answers or Exceed Corrects', 'warning')
    }
  }

  function answersValidation() {
    let size = false
    let correct = 0
    if (question.answers.length == 4) {
      size = true
    }
    question.answers.map((a) => {
      if (a.isCorrect) correct++
    })
    return (size && (correct == 1))
  }


  return (
    <div>
      <Container>
        <Title title="Questions ☄️" description="Choose the answers that are adopted to your question in the simplest way (just a click)! 🦑" />
      </Container>
      <AStepper step={1} />
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="row mt-2">
            <div className="col-md-6 p-2">
              <TextField fullWidth name="description" value={question.description} label="Description" variant="outlined" required={true} size="large" onChange={handleChange} />
            </div>
            <div className="col-md-6 p-2">
              <TextField fullWidth type='number' name="percentage" value={question.percentage} label="Percentage" variant="outlined" required={true} size="large" onChange={handleChange} />
            </div>
          </div>
          <div className="row mt-2 ">
            <div className="col-md-12 p-2">
              <MultipleSelect data={ans} handleChange={handleChange} name='Answers' />
            </div>
          </div>
          <div className="row mt-2 mb-2 ">
            <div className="col-md-12 p-2">
              <Button type='submit' fullWidth size='large' color='warning' variant='outlined' endIcon={<TerminalTwoToneIcon />}>Save</Button>
            </div>
          </div>
        </form>
        <Alert severity="info">Remember that a question must have just <strong>4 answers of which 1, is correct</strong> 🐚</Alert>
      </Container>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await testService.getAnswers()
  const ans = await res.json()
  return {
    props: {
      ans,
    },
  }
}


export default withAuth(question)