import { Container } from '@mui/material'
import React from 'react'

export default function Stories(props) {
  return (
    <div>
        <Container style={{boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '2vh 2vw'}}>
        <p>{props.para}</p>
        </Container>
    </div>
  )
}
