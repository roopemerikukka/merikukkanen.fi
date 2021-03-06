import React from 'react'
import SectionTitle from './SectionTitle'
import styled from 'styled-components'

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
    <SectionTitle>Merikukkanen</SectionTitle>
    <p>Olen potrettikuvaaja Salla Merikukka. Kuvaan muotokuvia ihmisistä sisä- ja ulkomiljöissä Helsingissä.</p>
    <p>Kiinnostuin ihmisten kuvaamisesta jo teini-iässä. Rippilahjarahoilla hankin itselleni ensimmäisen filmijärjestelmäkameran ja ylioppilaaksi päästyäni päivitin kalustoni digijärjestelmäkameraan. Kuvasin kavereille valmistujaiskuvia into pinkeänä. Vaikka kuvaaminen sitten jäi moneksi vuodeksi, sisälle jäi palamaan kipinä potretteja kohtaan.</p>
    <p>Kymmenisen vuotta myöhemmin vuonna 2016 aloitin Valokuvaajan ammattitutkintoon johtavat opinnot viestinnän päivätöiden ohella Stadin Aikuisopistossa. Puolentoista vuoden ajan perehdyin teoriaan, kuvasin, käsittelin, asettelin valoja ja etsin malleja kuviini – neljänä iltana viikossa. Jouluna 2017 valmistuin valokuvaajaksi (VAT).</p>
    <p>Oman firman perustin jo opintojen aikana. Nyt keväällä 2020 tmi Merikukkanen Photography saavuttaa kolmen vuoden ikänsä. Olen saanut kuvata satoja upeita tyyppejä näiden vuosien aikana. Kuvalajini on potretit, muotokuvat ja tuotetut henkilökuvat. Kuvaan siis esimerkiksi CV- ja vaalikuvia, kihlajais- ja valmistujaiskuvia sekä pressi- ja promokuvia ihmisistä. Intohimoni kuvaamisessa on luonnonvalo ja valtaosan töistäni kuvaan ilman lisävalaistusta.</p>
    <p>Tehtäiskö yhteistyötä? Kurkkaa hinnat tai pyydä tarjousta!</p>
    <p>
      <Figure>
        <img src="images/salla.jpg" alt="Salla Merikukka" />
        <figcaption>Kuva: Paiju Pajunen, editointi: Salla Merikukka</figcaption>
      </Figure>
    </p>
  </React.Fragment>
)

export default About