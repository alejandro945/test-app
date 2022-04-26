import React from 'react'
import Container from './Container'
import ARadioGroup from './ARadioGroup'
import Title from './Title'

const Question = ({ index, question, handleChange }) => {
    const handleOption = (e) => {
        handleChange(index,question.percentage, e.target.value)
    }
    return (
        <div>
            <Container>
                <Title title={question.description} description={"Percentage in porcentual points: " + question.percentage} />
                <ARadioGroup data={question.answers} handle={handleOption} />
            </Container>
        </div>
    )
}

export default Question