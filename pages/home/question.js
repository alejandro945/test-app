import React from 'react'
import AStepper from '../../components/AStepper'
import Container from '../../components/Container'
import Title from '../../components/Title'
import NavBar from '../../components/NavBar'
import withAuth from '../../services/withAuth'

const question = () => {
  return (
    <NavBar>
      <Container>
        <Title title="Questions ☄️" description="Here begins your path to the creation of your exam, add all answers indicating the correct ones! 🦑" />
      </Container>
      <AStepper step={1} />
      <Container>

      </Container>
    </NavBar>
  )
}

export default withAuth(question)