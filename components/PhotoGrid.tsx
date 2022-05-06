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
  padding-bottom: calc( 133.333% + 24px);
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

/**
 * There needs to be even amount of groups for these
 * to work in all mq sizes.
 */
const PhotoGrid: React.FC = () => (
  <Grid>
    {/** Group (A) */}
    <HorizontalBig><Img src="images/web63.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web64.jpg" /></Horizontal>
    <Vertical><Img src="images/web67.jpg" /></Vertical>
    <Horizontal><Img src="images/web65.jpg" /></Horizontal>
    <Horizontal><Img src="images/web66.jpg" /></Horizontal>
    {/** Group (B) */}
    <Vertical><Img src="images/web38.jpg" /></Vertical>
    <Horizontal><Img src="images/web39.jpg" /></Horizontal>
    <Horizontal><Img src="images/web40.jpg" /></Horizontal>
    <HorizontalBig><Img src="images/web41.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web42.jpg" /></Horizontal>
    {/** Group (A) */}
    <HorizontalBig><Img src="images/web45.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web44.jpg" /></Horizontal>
    <Vertical><Img src="images/web47.jpg" /></Vertical>
    <Horizontal><Img src="images/web43.jpg" /></Horizontal>
    <Horizontal><Img src="images/web46.jpg" /></Horizontal>
    {/** Group (B) */}
    <Vertical><Img src="images/web48.jpg" /></Vertical>
    <Horizontal><Img src="images/web49.jpg" /></Horizontal>
    <Horizontal><Img src="images/web50.jpg" /></Horizontal>
    <HorizontalBig><Img src="images/web52.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web51.jpg" /></Horizontal>
    {/** Group (A) */}
    <HorizontalBig><Img src="images/web53.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web54.jpg" /></Horizontal>
    <Vertical><Img src="images/web57.jpg" /></Vertical>
    <Horizontal><Img src="images/web55.jpg" /></Horizontal>
    <Horizontal><Img src="images/web56.jpg" /></Horizontal>
    {/** Group (B) */}
    <Vertical><Img src="images/web58.jpg" /></Vertical>
    <Horizontal><Img src="images/web59.jpg" /></Horizontal>
    <Horizontal><Img src="images/web60.jpg" /></Horizontal>
    <HorizontalBig><Img src="images/web62.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web61.jpg" /></Horizontal>
    {/** Group (A) */}
    <HorizontalBig><Img src="images/web33.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web34.jpg" /></Horizontal>
    <Vertical><Img src="images/web37.jpg" /></Vertical>
    <Horizontal><Img src="images/web35.jpg" /></Horizontal>
    <Horizontal><Img src="images/web36.jpg" /></Horizontal>
    {/** Group (B) */}
    <Vertical><Img src="images/web10.jpg" /></Vertical>
    <Horizontal><Img src="images/web2.jpg" /></Horizontal>
    <Horizontal><Img src="images/web9.jpg" /></Horizontal>
    <HorizontalBig><Img src="images/web5.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web7.jpg" /></Horizontal>
    {/** Group (A) */}
    <HorizontalBig><Img src="images/web16.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web12.jpg" /></Horizontal>
    <Vertical><Img src="images/web29.jpg" /></Vertical>
    <Horizontal><Img src="images/web30.jpg" /></Horizontal>
    <Horizontal><Img src="images/web21.jpg" /></Horizontal>
    {/** Group (B) */}
    <Vertical><Img src="images/web19.jpg" /></Vertical>
    <Horizontal><Img src="images/web17.jpg" /></Horizontal>
    <Horizontal><Img src="images/web31.jpg" /></Horizontal>
    <HorizontalBig><Img src="images/web11.jpg" /></HorizontalBig>
    <Horizontal><Img src="images/web8.jpg" /></Horizontal>
  </Grid>
)

export default PhotoGrid