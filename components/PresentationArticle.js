import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function PresentationArticle({image, header, text, reverse}) {
  return (
    <Container>
      {!reverse && <img src={image} /> }
      <div>
        <h2>{header}</h2>
        <p>{text}</p>
      </div>
      {reverse && <img src={image} /> }
    </Container>
  )
}

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  animation: ${animation} 3s ease-in;
  color: #222;
  h2 {
    font-size: 3.5em;
  }
  div {
    padding: 5%;
  }
  img {
    object-fit: cover;
    width: 30%;
  }
`
