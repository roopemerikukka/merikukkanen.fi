import Head from 'next/head'
import PhotoGrid from '../components/PhotoGrid'
import styled from 'styled-components'
import Header from '../components/Header'

const Container = styled.div`
  min-height: 100vh;
`

const Main = styled.main`
  padding: 5rem 1rem;
`

const Section = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 3rem auto;

  h2 {
    text-align: center;
  }
`

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Merikukkanen</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Main>
      <Header />
      <Section>
        <PhotoGrid />
      </Section>
      <Section>
        <h2>About</h2>
      </Section>
      <Section>
        <h2>Prices</h2>
      </Section>
      <Section>
        <h2>Contact</h2>
      </Section>
    </Main>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </Container>
)

export default Home
