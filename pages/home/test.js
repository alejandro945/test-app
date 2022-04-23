import React from 'react'
import AStepper from '../../components/AStepper'
import Container from '../../components/Container'
import Title from '../../components/Title'
import withAuth from '../../services/withAuth'

const test = () => {
  return (
    <div>
      <Container>
        <Title title="Tests ❄️" description="End your exam in the most comfortable way by adding the number of questions you want. Fascinating right? 🐳" />
      </Container>
      <AStepper step={2} />
      <Container>

      </Container>
    </div>
  )
}

export default withAuth(test)