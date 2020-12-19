import Head from 'next/head'
import Footer from '../components/Footer'
import '../public/main.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cashflux</title>
        <meta name="apple-itunes-app" content="app-id=1543618784" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App