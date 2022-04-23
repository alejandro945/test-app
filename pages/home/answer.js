import React from 'react'
import AStepper from '../../components/AStepper'
import Container from '../../components/Container'
import Title from '../../components/Title'
import NavBar from '../../components/NavBar'
import withAuth from '../../services/withAuth'
import { TextField } from '@mui/material'

const answer = () => {
  const handleSubmit = () => {

  }
  return (
    <NavBar>
      <Container>
        <Title title="Answers 🌝" description="Here begins your path to the creation of your exam, add all answers indicating the correct ones! 🐝" />
      </Container>
      <AStepper step={0} />
      <form onSubmit={handleSubmit}>
        <Container>
          <div className="row mt-2">
            <div className="col-md-6 p-2">
              <TextField fullWidth name="description" label="Description" variant="outlined" required={true} size="large" />
            </div>
            <div className="col-md-6 p-2">
              <TextField fullWidth name="userName" label="Username" variant="outlined" required={true} size="large" />
            </div>
          </div>
        </Container>
      </form>
    </NavBar>
  )
}

export default withAuth(answer)