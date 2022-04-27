import { Button } from '@mui/material'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Container from '../../../components/Container'
import Mixim from '../../../components/Mixim'
import Question from '../../../components/Question'
import Title from '../../../components/Title'
import { testService } from '../../../services/testService'
import withAuth from '../../../services/withAuth'
import { getNote } from '../../../utils'
import { useRouter } from "next/router";

const Exam = ({ test }) => {
  const router = useRouter()
  const [state, setanswers] = useState({
    amount: 0,
    answers: []
  })

  useEffect(() => {
    setanswers({ ...state, amount: test.questions.length })
  }, [])

  const handleChange = (key, percentage, value) => {
    setanswers((prev) => ({
      ...prev,
      'answers': [
        ...prev.answers.slice(0, key),
        {
          ...prev.answers[key],
          'value': value.split('-')[0],
          'percentage': percentage
        },
        ...prev.answers.slice(key + 1, prev.answers.length)
      ]
    }))
  }

  const onSubmit = () => {
    if (state.amount == state.answers.length) {
      Mixim('Your score in this test is: ' + getNote(state.answers), 'info')
      router.replace('/home')
    } else {
      Mixim('All question are required', 'warning')
    }
  }

  return (
    <div>
      <Container>
        <Title title={test.title + " Test 🦥"} description={test.description + " 🚀"} />
      </Container>
      {test.questions.map((q, i) => (
        <Question key={i} index={i} question={q} handleChange={handleChange} />
      ))}
      <Container>
        <div className='row mt-2'>
          <div className='col-md-6 p-2'>
            <Link href={'/home'}>
              <Button fullWidth color='secondary' variant='outlined'>Back</Button>
            </Link>
          </div>
          <div className='col-md-6 p-2'>
            <Button onClick={onSubmit} fullWidth color='success' variant='contained'>Finish</Button>
          </div>
        </div>
      </Container><br /><br />
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await testService.getTests()
  const tests = await res.json()
  // Get the paths we want to pre-render based on posts
  const paths = tests.map((test) => ({
    params: { uid: test.UID.toString() },
  }))
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the exam `id`.
  // If the route is like /exam/1, then params.id is 1
  const res = await testService.getTest(params.uid)
  const test = await res.json()
  return { props: { test } }
}


export default withAuth(Exam)