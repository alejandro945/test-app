import React, { useState } from 'react'
import AStepper from '../../components/AStepper'
import Container from '../../components/Container'
import Title from '../../components/Title'
import withAuth from '../../services/withAuth'
import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { testService } from '../../services/testService'
import Mixim from '../../components/Mixim'

const answer = () => {

  const initialState ={
    description: '',
    iscorrect: false
  }

  const [answer, setAnswer] = useState(initialState)

  const clearState = () => {
    setAnswer({ ...initialState });
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target
    const val = (name === 'iscorrect') ? checked : value
    setAnswer({
      ...answer,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    testService.addAnswer(answer, ({ m, type }) => {
      Mixim(m, type)
    })
    clearState()
  }

  return (
    <div>
      <Container>
        <Title title="Answers 🌝" description="Here begins your path to the creation of your exam, add all answers indicating the correct ones! 🐝" />
      </Container>
      <AStepper step={0} />
      <Container>
      <form onSubmit={handleSubmit}>
          <div className="row mt-2">
            <div className="col-md-4 p-2">
              <TextField fullWidth name="description" value={answer.description}  label="Description" variant="outlined" required={true} size="medium" onChange={handleChange} />
            </div>
            <div className="col-md-4 p-2">
              <FormControlLabel
                control={<Switch checked={answer.iscorrect} onChange={handleChange} color="warning" name="iscorrect" />}
                label="Is Correct?"
                labelPlacement="start"
              />
            </div>
            <div className="col-md-4 p-2">
              <Button type='submit' sx={{ width: '100%' }} size='large' color='blender' variant='outlined' endIcon={<SendIcon />}>Save</Button>
            </div>
          </div>    
      </form>
      </Container>
    </div>
  )
}

export default withAuth(answer)