import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'

const PricePackGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin: 2rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

const PricePack = styled.div`
  padding: 1rem;
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
  height: 4rem;
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
  list-style: none;
  margin: 0;
  padding: 0;
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
        <Name>Potrettipaketti S</Name>
        <Price>250 <Euro>€</Euro></Price>
        <Description>Tämä potrettipaketti on passeli esimerkiksi CV-kuvauksiin miljöössä, sisällä tai ulkona. Kuvausaika riittää yhteen kuvauslokaatioon.</Description>
        <Details>
          <Item>🕑 20 min kuvausaika</Item>
          <Item>✏️ Halutessasi koevedokset, joista käsiteltävät kuvat valitaan</Item>
          <Item>⭐️ 5 valmista loppukäsiteltyä kuvaa (väri ja mustavalkoinen)</Item>
          <Item>💖 Kuvat toimitetaan sähköisesti</Item>
        </Details>
      </PricePack>

      {/* Potrettipaketti M */}
      <PricePack>
        <Name>Potrettipaketti M</Name>
        <Price>340 <Euro>€</Euro></Price>
        <Description>Tämä paketti sopii mainiosti esimerkiksi kihlajais- tai valmistumiskuvauksiin yhdessä lokaatiossa. Kuvausaika taipuu myös asun vaihtoon. Suosituin potrettipakettini! </Description>
        <Details>
          <Item>🕑 45 min kuvausaika</Item>
          <Item>✏️ Halutessasi koevedokset, joista käsiteltävät kuvat valitaan</Item>
          <Item>⭐️ 12 valmista loppukäsiteltyä kuvaa (väri ja mustavalkoinen)</Item>
          <Item>💖 Kuvat toimitetaan sähköisesti</Item>
          <Item>👯 Voit jakaa yhden tai kahden kaverin kanssa</Item>
        </Details>
      </PricePack>

      {/* Potrettipaketti L */}
      <PricePack>
        <Name>Potrettipaketti L</Name>
        <Price>430 <Euro>€</Euro></Price>
        <Description>Laajin potrettipaketti sopii mainiosti, jos kyseessä on esimerkiksi kampanjakuvat. Pidempi kuvausaika mahdollistaa muutaman eri lokaation käyttämisen ja asujen vaihdot samoissa kuvauksissa.</Description>
        <Details>
          <Item>🕑 90 min kuvausaika</Item>
          <Item>✏️ Halutessasi koevedokset, joista käsiteltävät kuvat valitaan</Item>
          <Item>⭐️ 20 valmista loppukäsiteltyä kuvaa (väri ja mustavalkoinen)</Item>
          <Item>💖 Kuvat toimitetaan sähköisesti</Item>
          <Item>👯 Voit jakaa yhden tai kahden kaverin kanssa</Item>
        </Details>
      </PricePack>

      {/* Dokumentaarinen kuvaus */}
      <PricePack>
        <Name>Dokumentaarinen kuvaus</Name>
        <Price>248 <Euro>€</Euro><small>/ ensimmäinen tunti</small></Price>
        <Description>Kuvaan mielelläni myös tapahtumia ja juhlia, kuten seminaareja ja vuosijuhlia. Lähtöhinta sisältää kevyen kaluston liikkuvaan dokumentointiin. Kysy portfoliota dokkarikuvauksista erikseen!</Description>
        <Details>
          <Item>💸 Lisätunnit 100 € / h</Item>
          <Item>❓ Kysy tarjous!</Item>
        </Details>
      </PricePack>

    </PricePackGrid>

    <p>Hinnat sisältävät ALV:n 24 %.</p>
    <p>Lisäkuvat pakettien päälle samoista kuvauksista 20 € / kpl. Matkakorvaukset Helsingin ulkopuolelle alkaen 20 €. Siirtymät kuvauslokaatioiden välillä lasketaan mukaan kuvausaikaan. Käsiteltävät kuvat on valittava viikon kuluessa koevedosten toimittamisesta. Valmiit kuvat toimitetaan viikon sisällä koevedosten valitsemisesta.</p>
  </React.Fragment>
)

export default Pricing