import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'

const PricePackGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin: 2rem 0;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`

const PricePack = styled.div`
  padding: 2rem;
  background-color: rgba(215, 190, 191, 0.3);

  @media (min-width: 1024px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  &:nth-child(2) {
    background-color: rgba(215, 190, 191, 1);

    @media (min-width: 1024px) {
      margin-bottom: 0;
      margin-top: 0;
    }
  }
`

const Name = styled.h3`
  text-align: center;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 1rem;
`

const Price = styled.div`
  font-size: 4rem;
  text-align: center;
  font-weight: 600;

  small {
    display: block;
    font-size: 0.75rem;
  }
`

const Euro = styled.span`
  font-size: 0.5em;
`

const Description = styled.p`
`

const Details = styled.ul`
  list-style: initial;
  margin-left: 1rem;
`

const Item = styled.li`
  margin-bottom: 0.5rem;
`

const Pricing: React.FC = () => (
  <React.Fragment>
    <SectionTitle>Hinnat</SectionTitle>

    <p>Tarvitsetko uusia kuvia LinkedIn-profiiliin, onko vaalikampanja kuvia vailla vai haluatko ikuistaa hetken rakkaimpasi kanssa? Tyylikkäät potretit kuvataan toiveesi mukaan sisä- tai ulkomiljöössä, luonnonvaloa tai kevyttä lisävalaistusta käyttäen. Valitse paketti tarpeesi mukaan:</p>

    <PricePackGrid>

      {/* Potrettipaketti S */}
      <PricePack>
        <Name>Potretti mini</Name>
        <Price>200 <Euro>€</Euro></Price>
        <Description>Tämä potrettipaketti on passeli esimerkiksi CV-kuvauksiin miljöössä, sisällä tai ulkona. Kuvausaika riittää yhteen kuvauslokaatioon.</Description>
        <Details>
          <Item>20-30 minuutin pituinen kuvaus ulko- tai sisämiljöössä (yhdessä lokaatiossa)</Item>
          <Item>koevedokset, joista käsiteltävät kuvat valitaan</Item>
          <Item>hintaan sisältyy kaksi loppukäsiteltyä kuvaa</Item>
          <Item>lisäkuvat 20 € / kpl</Item>
        </Details>
      </PricePack>

      {/* Potrettipaketti M */}
      <PricePack>
        <Name>Potrettipaketti</Name>
        <Price>450 <Euro>€</Euro></Price>
        <Description>Laajempi potrettipaketti sopii mainiosti, jos kyseessä on esimerkiksi kampanjakuvat. Pidempi kuvausaika mahdollistaa muutaman eri lokaation käyttämisen ja asujen vaihdot samoissa kuvauksissa.</Description>
        <Details>
          <Item>60 minuutin pituinen kuvaus ulko- tai sisämiljöössä (sisältää mahdolliset siirtymät)</Item>
          <Item>halutessasi koevedokset, joista käsiteltävät kuvat valitaan</Item>
          <Item>hintaan sisältyy vähintään 15 loppukäsiteltyä kuvaa</Item>
        </Details>
      </PricePack>

      {/* Dokumentaarinen kuvaus */}
      <PricePack>
        <Name>Dokumentaarinen kuvaus</Name>
        <Price><small>alkaen</small>300 <Euro>€</Euro></Price>
        <Description>Kuvaan mielelläni myös tapahtumia ja juhlia, kuten seminaareja ja vuosijuhlia. Lähtöhinta sisältää kevyen kaluston liikkuvaan dokumentointiin.</Description>
        <Description>Kysy tarkempaa tarjousta.</Description>
      </PricePack>

    </PricePackGrid>

    <p>Kysy suuremmista tai suoraan tarpeisiisi sopivista kuvauspaketeista sekä henkilöstö- ja kuvituskuvauksista tarjous erikseen.</p>
    <p>HUOM! Hintoihin ei lisätä arvonlisäveroa.</p>
    <p>Matkakorvaukset Helsingin ulkopuolelle alkaen 20 €. Siirtymät kuvauslokaatioiden välillä lasketaan mukaan kuvausaikaan. Käsiteltävät kuvat on valittava viikon kuluessa koevedosten toimittamisesta. Valmiit kuvat toimitetaan viikon sisällä koevedosten valitsemisesta.</p>
  </React.Fragment>
)

export default Pricing