import React from 'react';

import Text from '../../components/Text';
import TwoPuppiesCards from '../../components/TwoPuppiesCards';
import OnePuppiesCard from '../../components/OnePuppiesCard';

import AnaCristina from '../../assets/puppiesPics/AnaCristina.jpeg';
import sheik from '../../assets/puppiesPics/sheik.jpeg';
import JPaulo from '../../assets/puppiesPics/JPaulo.jpeg';
import Mel from '../../assets/puppiesPics/Mel.jpeg';
import Paula from '../../assets/puppiesPics/Paula.jpeg';
import PauloVentura from '../../assets/puppiesPics/PauloVentura.jpeg';

import cameraPlaceholder from '../../assets/cameraPlaceholder02.png';

import colors from '../../utils/colors';

import * as Styles from './styles';

const PuppiesSection: React.FC = () => {
  return (
    <>
      <Styles.Container id='puppies'>
        <Styles.Banner>
          <Text
            text="Conheça nossos"
            align="center"
            color={colors.gray.light03}
            size={30}
            weight="400"
            fontFamily="Roboto Slab"
            letterSpacing={3}
            marginTop={20}
          />

          <Text
            text="Filhotes"
            align="center"
            color={colors.gray.light03}
            size={30}
            weight="400"
            fontFamily="Roboto Slab"
            letterSpacing={3}
          />
        </Styles.Banner>

        <Styles.Content>
          <TwoPuppiesCards
            picOne={sheik}
            nameOne="Sheik"
            birthOne="13/08/2021"
            breedOne="Pastor Belga Malinois"
            tutorOne="Barbara Bafica"
            addressOne="Canavieiras - BA"
            functionOne="Guarda e proteção"
            vaccineOneOne={true}
            vaccineTwoOne={true}
            vaccineThreeOne={false}
            genderOne='M'

            picTwo={AnaCristina}
            birthTwo="13/08/2021"
            nameTwo="Xangô"
            breedTwo="Pastor Belga Malinois"
            tutorTwo="Ana Cristina"
            addressTwo="S.C. Cabrália - BA"
            functionTwo="Guarda e proteção"
            vaccineOneTwo={true}
            vaccineTwoTwo={false}
            vaccineThreeTwo={false}
            genderTwo='M'
          />

          <TwoPuppiesCards
            picOne={Paula}
            nameOne="Victoria"
            birthOne="13/08/2021"
            breedOne="Pastor Belga Malinois"
            tutorOne="Paula"
            addressOne="S.C. Cabrália - BA"
            functionOne="Guarda e proteção"
            vaccineOneOne={true}
            vaccineTwoOne={false}
            vaccineThreeOne={false}
            genderOne='F'

            picTwo={JPaulo}
            birthTwo="13/08/2021"
            nameTwo="Sem Registro"
            breedTwo="Pastor Belga Malinois"
            tutorTwo="J. Paulo"
            addressTwo="Salvador - BA"
            functionTwo="Faro de entorpecentes"
            vaccineOneTwo={true}
            vaccineTwoTwo={false}
            vaccineThreeTwo={false}
            genderTwo='M'
          />

          <TwoPuppiesCards
            picOne={PauloVentura}
            nameOne="Lions"
            birthOne="13/08/2021"
            breedOne="Pastor Belga Malinois"
            tutorOne="Paulo Ventura"
            addressOne="Porto Seguro - BA"
            functionOne="Guarda e proteção"
            vaccineOneOne={true}
            vaccineTwoOne={false}
            vaccineThreeOne={false}
            genderOne='M'

            picTwo={Mel}
            birthTwo="13/08/2021"
            nameTwo="Mel"
            breedTwo="Pastor Belga Malinois"
            tutorTwo="ST PM Rodrigues"
            addressTwo="S.C. Cabrália - BA"
            functionTwo="Faro de entorpecentes"
            vaccineOneTwo={true}
            vaccineTwoTwo={false}
            vaccineThreeTwo={false}
            genderTwo='F'
          />

          <TwoPuppiesCards
            picOne={cameraPlaceholder}
            nameOne="Aquires"
            birthOne="13/08/2021"
            breedOne="Pastor Belga Malinois"
            tutorOne="CAEMA"
            addressOne="S.C. Cabrália - BA"
            functionOne="Guarda e proteção"
            vaccineOneOne={true}
            vaccineTwoOne={false}
            vaccineThreeOne={false}
            genderOne='M'

            picTwo={cameraPlaceholder}
            birthTwo="13/08/2021"
            nameTwo="Akira"
            breedTwo="Pastor Belga Malinois"
            tutorTwo="CAEMA"
            addressTwo="S.C. Cabrália - BA"
            functionTwo="Faro de entorpecentes"
            vaccineOneTwo={true}
            vaccineTwoTwo={false}
            vaccineThreeTwo={false}
            genderTwo='F'
          />

          <OnePuppiesCard
            pic={cameraPlaceholder}
            name="Agatha"
            birth="13/08/2021"
            breed="Pastor Belga Malinois"
            tutor="Magda"
            address="S.C. Cabrália - BA"
            functionProps="Guarda e proteção"
            vaccineOne={true}
            vaccineTwo={false}
            vaccineThree={false}
            gender='F'
          />
        </Styles.Content>
      </Styles.Container>
    </>
  )
}

export default PuppiesSection;
