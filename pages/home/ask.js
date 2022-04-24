import React from 'react'
import ARadioGroup from '../../components/ARadioGroup'
import Container from '../../components/Container'
import Title from '../../components/Title'

const Ask = ({ question }) => {
    return (
        <div>
            <Container>
                <Title title={question.description + " 🤔"} description={"Percentage in porcentual points: " + question.percentage + " 👺"} />             
                <ARadioGroup data={question.answers}/>
            </Container>
        </div>
    )
}

export default Ask