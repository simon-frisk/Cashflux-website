import React from 'react'
import Page from '../components/Page'
import PresentationArticle from '../components/PresentationArticle'
import Link from 'next/link'

export default () => (
    <Page>
      <div style={{height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{maxWidth: '75%'}}>
          <h1 style={{ fontSize: '3em', marginBottom: 0 }}>Cashflux</h1>
          <h3 style={{color: '#666'}}>Bringing the future of personal economy</h3>
        </div>
      </div>
    </Page>
)
