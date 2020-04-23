import Head from 'next/head'
import PhotoGrid from '../components/PhotoGrid'
import styled from 'styled-components'
import Header from '../components/Header'
import About from '../components/About'
import Contact from '../components/Contact'
import SectionTitle from '../components/SectionTitle'
import Pricing from '../components/Pricing'

const Container = styled.div`
  min-height: 100vh;
`

const Main = styled.main`
  margin: 0;
  padding: 5rem 1rem 2rem 1rem;
`

const Section = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 3rem auto;

  @media (min-width: 768px) {
    margin: 6rem auto;
  }
`

const Footer = styled.footer`
  padding: 5rem 1rem;
  background-color: rgba(215, 190, 191, 1);
`

const GA_CODE = 'UA-100471655-1'

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Merikukkanen</title>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap" rel="stylesheet"></link>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#d7bebf" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#d7bebf" />
      <meta property="og:title" content="Merikukkanen" />
      <meta property="og:description" content="Potrettikuvaaja Salla Merikukka, miljöökuvia Helsingissä." />
      <meta property="og:image" content="/images/merikukkanen.jpg" />
      <meta property="og:url" content="https://merikukkanen.fi" />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_CODE}`}></script>
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_CODE}');
      `}} />
    </Head>

    <Main>
      <Header />
      <Section id="kuvat">
        <PhotoGrid />
      </Section>
      <Section id="merikukkanen">
        <About />
      </Section>
      <Section id="hinnat">
        <Pricing />
      </Section>
    </Main>
    <Footer id="ota-yhteytta">
      <Contact />
    </Footer>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        color: #404040;
      }

      * {
        box-sizing: border-box;
      }

      p {
        width: 100%;
        max-width: 37rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
      }
    `}</style>
  </Container>
)

export default Home
