import styled from 'styled-components'

const BG_HEIGHT = 3
const BG_SPACING = 4
const BG_TRANS = '0.2s'

const Container = styled.div`
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  z-index: 200;
`

const Button = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0;
  position: relative;
  cursor: pointer;
  display: block;
  width: 32px;
  height: 32px;
  border: none;
  outline: none;
`

const Line = styled.div`
  background-color: #404040;
  height: ${BG_HEIGHT}px;
  position: relative;
  border-radius: 6px;
  transition: background-color ${BG_TRANS};
  &.open {
    background-color: transparent;
  }

  &:before,
  &:after {
    border-radius: 6px;
    content: "";
    display: block;
    position: absolute;
    background-color: #404040;
    transform-origin: center;
    width: 100%;
    height: ${BG_HEIGHT}px;
    transition:
      transform ${BG_TRANS},
      bottom ${BG_TRANS} ${BG_TRANS},
      background-color ${BG_TRANS} ${BG_TRANS},
      top ${BG_TRANS} ${BG_TRANS};
  }

  &:before {
    bottom: calc( ${BG_HEIGHT}px + ${BG_SPACING}px );
  }

  &.open:before {
    bottom: 0;
    background-color: white;
    transform: rotate(-45deg);
    transition:
      bottom ${BG_TRANS},
      background-color ${BG_TRANS},
      transform ${BG_TRANS} ${BG_TRANS};
  }

  &:after {
    top: calc( ${BG_HEIGHT}px + ${BG_SPACING}px );
  }

  &.open:after {
    top: 0;
    background-color: white;
    transform: rotate(45deg);
    transition:
      top ${BG_TRANS},
      background-color ${BG_TRANS},
      transform ${BG_TRANS} ${BG_TRANS};
  }
`

type Props = {
  open: boolean;
  handleClick: () => void;
}

/**
 * Hamburger component.
 */
const Hamburger = ({ handleClick, open }: Props) => {

  return (
    <Container>
      <Button onClick={handleClick}>
        <Line className={open ? 'open' : null} />
      </Button>
    </Container>
  )
}

export default Hamburger