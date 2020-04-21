import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'

const ContentWrapper = styled.div`
  max-width: 65ch;
  margin: 0 auto;

  p {
    text-align: center;
  }

  a {
    color: inherit;
  }
`

const About: React.FC = () => (
  <React.Fragment>
    <ContentWrapper>
      <SectionTitle>Ota yhteyttä</SectionTitle>
      <p>Minut tavoittaa parhaiten maililla: <a target="_blank" rel="nofollow" href="mailto:salla@merikukkanen.fi">salla@merikukkanen.fi</a></p>
      <p>Kurkkaa myös profiilini <a target="_blank" rel="nofollow" href="https://www.instagram.com/merikukkanen/">Instagramissa</a> ja <a target="_blank" rel="nofollow" href="https://www.facebook.com/merikukkanenphotography">Facebookissa</a>!</p>
    </ContentWrapper>
  </React.Fragment>
)

export default About