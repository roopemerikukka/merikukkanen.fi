import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'

const Container = styled.div`

  p {
    text-align: center;
  }

  a {
    color: inherit;
  }
`

const About: React.FC = () => (
  <Container>
    <SectionTitle>Ota yhteyttä</SectionTitle>
    <p>Minut tavoittaa parhaiten maililla: <a target="_blank" rel="nofollow noreferrer" href="mailto:salla@merikukkanen.fi">salla@merikukkanen.fi</a></p>
    <p>Kurkkaa myös profiilini <a target="_blank" rel="nofollow noreferrer" href="https://www.instagram.com/merikukkanen/">Instagramissa</a> ja <a target="_blank" rel="nofollow noreferrer" href="https://www.facebook.com/merikukkanenphotography">Facebookissa</a>!</p>
  </Container>
)

export default About