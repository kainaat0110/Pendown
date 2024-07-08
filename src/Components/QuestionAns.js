import { Container } from '@mui/material'
import React from 'react'

export default function QuestionAns(props) {
  return (
    <>
    <Container style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '2vh 2vw'}}>
    <h3>{props.ques}</h3>
    <p>{props.ans}</p>
    </Container>
    </>
  )
}
