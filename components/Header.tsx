import styled from "styled-components"
import { useState } from "react"
import Hamburger from "./Hamburger"
import Navigation from "./Navigation"

const Container = styled.header`
  .logo {
    width: 4rem;
    height: 4rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    display: block;

    @media (min-width: 768px) {
      width: 6rem;
      height: 6rem;
    }
  }

  .title {
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
    margin: 0;
    font-weight: 600;
    line-height: 1.15;
    text-align: center;
    font-size: 2rem;

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  .description {
    text-align: center;
    line-height: 1.5;
    font-weight: 300;
    margin: 0 auto;
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`

const Header: React.FC = () => {
  const [ navOpen, toggleNav ] = useState(false)

  const handleClick = () => toggleNav(!navOpen)

  return (
    <Container>
      <img className="logo" src="images/logo.png" />
      <h1 className="title">Merikukkanen</h1>
      <p className="description">Valokuvaaja Salla Merikukka</p>
      <Hamburger open={navOpen} handleClick={handleClick} />
      <Navigation open={navOpen} />
    </Container>
  )
}

export default Header