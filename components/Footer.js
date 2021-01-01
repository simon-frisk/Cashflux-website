import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>

      <Link href='/privacypolicy'>
        <a>Privacy policy</a>
      </Link>

      <Link href='/eula'>
        <a>End user license agreement</a>
      </Link>
    </Container>
  )
}

const Container = styled.footer`
  background: #333;
  color: white;
  padding: 5%;
  a {
    color: white;
    text-decoration: none;
    display: block;
    margin-bottom: 15px;
  }

  a:active {
    color: white;
  }
`