import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Button from '../components/Button'

export default () => (
  <Layout>
    <h1 style={{ fontSize: '4em', marginBottom: 0 }}>Cashflux</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Link href='/support'>
        <Button>Support</Button>
      </Link>

      <Link href='/privacypolicy'>
        <Button>Privacy policy</Button>
      </Link>
    </div>
  </Layout>
)
