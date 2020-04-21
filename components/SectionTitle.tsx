import React from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`


const SectionTitle: React.FC = ({children}) => (
  <H2>{children}</H2>
)

export default SectionTitle