import React from 'react'
import Container from './Container'
import ARadioGroup from './ARadioGroup'
import Title from './Title'

const Question = ({ question }) => {
    return (
        <div>
            <Container>
                <Title title={question.description + " 🤔"} description={"Percentage in porcentual points: " + question.percentage + " 👺"} />             
                <ARadioGroup data={question.answers}/>
            </Container>
        </div>
    )
}

export default Question