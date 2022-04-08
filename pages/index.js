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
        <Header title="Welcome to my app!" />
        <p className="description">
          Welkom op mijn website! Wil je meer weten? Laat gerust weten! <h2>Een eigen website maken is helamaal niet moeilijk. Wij hebben het hier gratis gedaan via Wix. Via deze makkelijke tool kun je gemakkelijk een website in elkaar flansen.</h2>
<h2><br></h2>
<h2>Wij hebben dit onder andere gedaan voor de volgende websites;</h2>
<h2><br></h2>
<h2><a href="https://mannnen.nl/" rel="noreferrer noopener" target="_blank">Mannen Website</a></h2>
<h2><br></h2>
<h2><a href="https://echtsharon.nl/" rel="noreferrer noopener" target="_blank">Vrouwen Website</a></h2>
<h2><br></h2>
<h2><a href="https://support.google.com/profile/151664540" rel="noreferrer noopener" target="_blank">Google Profiel</a></h2>
<h2><br></h2>
<h2><a href="https://www.beste-barbecue.nl/" rel="noreferrer noopener" target="_blank">Barbecue Website</a></h2>
<h2><br></h2>
<h2>Jij kunt dit ook eenvoudig! Probeer het zelf en kom achter alle mogelijkheden!</h2>
        </p>
      </main>

      <Footer />
    </div>
  )
}
