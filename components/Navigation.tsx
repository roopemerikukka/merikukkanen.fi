import AnchorLink from 'react-anchor-link-smooth-scroll'
import styled from 'styled-components'

const Container = styled.nav`
  position: fixed;
  z-index: 100;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  padding-right: 5rem;
  background-color: rgba(215, 190, 191, 1);
  border-radius: 6px;
  transform: scale(0);
  transform-origin: top right;
  transition: all 0.3s ease-in-out;
  opacity: 0;

  &.open {
    opacity: 1;
    transform: scale(1);
  }
`

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const NavItem = styled.li`
  margin-bottom: 0.7rem;
`

const Link = styled(AnchorLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-weight: 600;
`
type Props = {
  open: boolean;
}
const Navigation = ({ open }: Props) => (
  <Container className={open ? 'open' : null}>
    <NavList>
      <NavItem><Link offset={50} href="#kuvat">Kuvat</Link></NavItem>
      <NavItem><Link offset={50} href="#merikukkanen">Salla Merikukka</Link></NavItem>
      <NavItem><Link offset={50} href="#hinnat">Hinnat</Link></NavItem>
      <NavItem><Link offset={50} href="#ota-yhteytta">Ota yhteyttä</Link></NavItem>
    </NavList>
  </Container>
)

export default Navigation