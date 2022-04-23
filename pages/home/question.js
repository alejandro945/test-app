import React from 'react'
import AStepper from '../../components/AStepper'
import Container from '../../components/Container'
import Title from '../../components/Title'
import withAuth from '../../services/withAuth'

const question = () => {
  return (
    <div>
      <Container>
        <Title title="Questions ☄️" description="Choose the answers that are adopted to your question in the simplest way (just a click)! 🦑" />
      </Container>
      <AStepper step={1} />
      <Container>

      </Container>
    </div>
  )
}

export default withAuth(question)