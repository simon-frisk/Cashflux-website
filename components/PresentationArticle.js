import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function PresentationArticle({image, header, text, reverse}) {
  return (
    <Container>
      {!reverse && <img src={image} style={{height: '80vh'}} /> }
      <div style={{padding: '5%'}}>
        <h2 style={{fontSize: '2em'}}>{header}</h2>
        <p>{text}</p>
      </div>
      {reverse && <img src={image} style={{height: '80vh'}} /> }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  color: #222;
  flex-wrap: wrap;
`
