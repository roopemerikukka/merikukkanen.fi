import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'

const Figure = styled.figure`
  width: 100%;
  max-width: 37rem;
  margin: 1rem auto;
  display: block;

  img {
    display: block;
    width: 100%;
    margin-bottom: 0.5rem;
  }

  figcaption {
    font-size: 0.8rem;
  }
`

const About: React.FC = () => (
  <React.Fragment>
    <SectionTitle>Valokuvaaja Salla Merikukka</SectionTitle>
    <p>Olen poliittisiin potretteihin erikoistunut valokuvaaja Helsingin Kalasatamasta. Kuvaan muotokuvia ihmisistä sisä- ja ulkomiljöissä Helsingissä ja joskus muuallakin. </p>

    <p>Kiinnostuin ihmisten kuvaamisesta jo teini-iässä. Rippilahjarahoilla ostin itselleni ensimmäisen filmijärjestelmäkameran, ja ylioppilaaksi päästyäni vuonna 2007 hankin digijärjestelmäkameran. Kuvasin kavereille ylioppilas- ja rippikuvia miljöössä. Se tuntui heti omalta jutulta. Vaikka kuvaaminen sitten jäi moneksi vuodeksi, sisälle jäi palamaan kipinä potretteja kohtaan.</p>

    <p>Kymmenisen vuotta myöhemmin vuonna 2016 aloitin valokuvaajan ammattitutkintoon johtavat opinnot viestinnän päivätöiden ohella Stadin Aikuisopistossa. Puolentoista vuoden ajan perehdyin teoriaan, kuvasin, käsittelin, asettelin valoja ja etsin malleja kuviini – neljänä iltana viikossa. Jouluna 2017 valmistuin valokuvaajaksi (VAT).</p>

    <p>Oman yritykseni, Merikukkanen Photographyn, perustin jo opintojen aikana. Siitä asti olen saanut kuvata potretteja, muotokuvia ja erilaisia tuotettuja henkilökuvia, kuten vaalikuvia ja promokuvia. Intohimoni kuvaamisessa on luonnonvalo ja valtaosan töistäni kuvaan ilman lisävalaistusta.</p>

    <p>Erityinen mielenkiinnonkohteeni on poliittiset valokuvat. Työstinkin ensimmäisen valokuvanäyttelyni Vihreitä miehiä keväällä 2022 yhteistyössä Vihreän Sivistysliiton kanssa.</p>

    <p>Kaipaatko laadukkaita potretteja tai kokonaisen kuvituskuvapankin? Haluatko työskennellä kuvaajan kanssa, joka osaa tehdä kuvauksista rennot myös pahimmalle jännittäjälle? Saatan olla etsimäsi henkilö! Kurkkaa hinnat tai pyydä tarjousta.</p>
    <Figure>
      <img src="images/salla2.jpg" alt="Salla Merikukka" />
      <figcaption>Kuva: Roope Merikukka, editointi: Salla Merikukka</figcaption>
    </Figure>
  </React.Fragment>
)

export default About