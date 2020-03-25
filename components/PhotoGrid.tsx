import styled from 'styled-components'

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: dense;
  gap: 20px;
  align-items: stretch;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const GridItem = styled.div`
  position: relative;
  width: 100%;
  height: 0;
`

const Horizontal = styled(GridItem)`
  padding-bottom: 66.666%;
`

const HorizontalBig = styled(Horizontal)`
  @media (min-width: 768px) {
    padding-bottom: 68%;
    grid-row: span 2;
    grid-column: span 2;
    align-self: stretch;
    justify-self: stretch;
  }
`

const Vertical = styled(GridItem)`
  padding-bottom: calc( 133.333% + 20px);
  grid-row: span 2;
`

const Img = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  object-fit: cover;
`

const PhotoGrid: React.FC = () => (
  <Grid>
    {/** 1st Group */}
    <HorizontalBig><Img src="vaaka.png" /></HorizontalBig>
    <Horizontal><Img src="vaaka.png" /></Horizontal>
    <Vertical><Img src="pysty.png" /></Vertical>
    <Horizontal><Img src="vaaka.png" /></Horizontal>
    <Horizontal><Img src="vaaka.png" /></Horizontal>
    {/** 2nd Group */}
    <Vertical><Img src="pysty.png" /></Vertical>
    <Horizontal><Img src="vaaka.png" /></Horizontal>
    <Horizontal><Img src="vaaka.png" /></Horizontal>
    <HorizontalBig><Img src="vaaka.png" /></HorizontalBig>
    <Horizontal><Img src="vaaka.png" /></Horizontal>
  </Grid>
)

export default PhotoGrid