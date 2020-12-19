import React from 'react'
import Page from '../components/Page'
import PresentationArticle from '../components/PresentationArticle'

export default () => (
    <Page>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <h1 style={{ fontSize: '4em', marginBottom: 0 }}>Cashflux</h1>
          <h2 style={{color: '#666'}}>Keep track of your expenses</h2>
        </div>
        <div>
        <a
          href='https://apps.apple.com/us/app/cashflux/id1543618784'
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            background:
              'url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2020-07-14&kind=iossoftware&bubble=ios_apps) no-repeat',
            width: 135,
            height: 40,
          }}
        />
        <a href='https://play.google.com/store/apps/details?id=com.expenses.expensesapp&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' style={{width: 135}}/></a>
        </div>
      </div>
      <PresentationArticle
        image='/image1.png'
        header='Visualize'
        text='... your spending in our clear and purposefully planned graphs.'
      />
      <PresentationArticle
        image='/image3.png'
        header='Keep track'
        text="... of your expenses to be on top of your own economy."
        reverse={true}
      />
    </Page>
)
