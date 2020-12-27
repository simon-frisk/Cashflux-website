import React from 'react'
import Page from '../components/Page'
import PresentationArticle from '../components/PresentationArticle'
import Link from 'next/link'

export default () => (
    <Page>
      <div style={{maxWidth: '75%'}}>
        <h1 style={{ fontSize: '3em', marginBottom: 0 }}>Cashflux</h1>
        <h3 style={{color: '#666'}}>Keep track of your expenses</h3>
      </div>
      {/*<p>
        Cashflux is an expense tracking app that aims to bring the future of personal economy.
        We believe personal economy should be easy, clear, modern and integrate great into our digital lives.
      </p>*/}
      <h2>Features</h2>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src='/image1.png' style={{width: '30%'}} />
        <div style={{flex: 1, padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h3>Visualize your economy.</h3>
        </div>
      </div>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <div style={{flex: 1, padding: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <h3>Keep track of your expenses.</h3>
        </div>
        <img src='/image3.png' style={{width: '30%'}} />
      </div>
      {/*<h2>About</h2>
      <div style={{overflow: 'auto'}}>
        <img src='/profile.jpg' style={{width: '30%', float: 'right', marginLeft: 10, marginBottom: 10}} />
        <p>
          My name is Simon, and I'm the developer of Cashflux. I'm a 19 year old student studying Physics in Stockholm.
          My goal with Cashflux is to build an outstanding product that helps with personal economy. Too often,
          I've seen it turn into a byrocratic, boring burden, which I think it doesn't have too be. I don't plan for
          Cashflux to be just another app, but an outstanding service that's 10x better than alternatives, by providing
          a great experience with great features and simplicity of use. If you decide to use Cashflux, you can be confident I will do everything in my powers to
          give you as good of a product as possible. There will be no upgrades, in app purchases or ads - when your in,
          you will get the best I can give.
        </p>
      </div>*/}
    </Page>
)
