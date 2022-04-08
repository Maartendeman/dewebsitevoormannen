import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome bij mijn website! !" />
        <p className="description">
          Welkom op mijn website! Wil je meer weten? Laat gerust weten! 
        </p>
      </main>

      <Footer />
    </div>
  )
}
