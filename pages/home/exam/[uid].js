import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Container from '../../../components/Container'
import Title from '../../../components/Title'
import { testService } from '../../../services/testService'
import withAuth from '../../../services/withAuth'
import Ask from '../ask'

const Exam = ({ test }) => {
  return (
    <div>
      <Container>
        <Title title={test.title + " Test 🦥"} description={test.description + " 🐡"} />
      </Container>
      {test.questions.map(q => (
        <Ask key={q.UID} question={q} />
      ))}
      <Container>
        <div className='row mt-2'>
          <div className='col-md-6 p-2'>
            <Link href={'/home'}>
            <Button fullWidth color='secondary' variant='outlined'>Back</Button>
            </Link>
          </div>
          <div className='col-md-6 p-2'>
            <Button fullWidth color='success' variant='contained'>Finish</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await testService.getTests()
  const tests = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = tests.map((test) => ({
    params: { uid: test.UID.toString() },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /exam/1, then params.id is 1
  const res = await testService.getTest(params.uid)
  const test = await res.json()

  // Pass post data to the page via props
  return { props: { test } }
}


export default withAuth(Exam)