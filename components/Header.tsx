import styled from "styled-components"

const Container = styled.header`
  .title {
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;
  }
  .description {
    text-align: center;
    line-height: 1.5;
    font-size: 1.5rem;
  }
`

const Header: React.FC = () => (
  <Container>
    <h1 className="title">Merikukkanen</h1>
    <p className="description">Potrettikuvaaja Salla Merikukka</p>
  </Container>
)

export default Header