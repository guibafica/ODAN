import React from 'react';

import Text from '../../components/Text';
import TwoPuppiesCards from '../../components/TwoPuppiesCards';
import OnePuppiesCard from '../../components/OnePuppiesCard';

import AnaCristina from '../../assets/puppiesPics/AnaCristina.jpeg';
import JPaulo from '../../assets/puppiesPics/JPaulo.jpeg';
import Mel from '../../assets/puppiesPics/Mel.jpeg';
import Paula from '../../assets/puppiesPics/Paula.jpeg';
import PauloVentura from '../../assets/puppiesPics/PauloVentura.jpeg';

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
            picOne={PauloVentura}
            nameOne="Sem Registro"
            ageOne="Sem Registro"
            breedOne="Pastor Belga"
            tutorOne="Paulo Ventura"
            addressOne="Sem Registro"
            functionOne="Sem Registro"
            vaccineOneOne={false}
            vaccineTwoOne={false}
            vaccineThreeOne={false}
            genderOne='M'

            picTwo={AnaCristina}
            ageTwo="Sem Registro"
            nameTwo="Xangô"
            breedTwo="Pastor Belga"
            tutorTwo="Ana Cristina"
            addressTwo="Sem Registro"
            functionTwo="Sem Registro"
            vaccineOneTwo={false}
            vaccineTwoTwo={false}
            vaccineThreeTwo={false}
            genderTwo='M'
          />

          <TwoPuppiesCards
            picOne={Paula}
            nameOne="Victoria"
            ageOne="Sem Registro"
            breedOne="Pastor Belga"
            tutorOne="Paula"
            addressOne="Sem Registro"
            functionOne="Cão Guarda"
            vaccineOneOne={false}
            vaccineTwoOne={false}
            vaccineThreeOne={false}
            genderOne='F'

            picTwo={JPaulo}
            ageTwo="Sem Registro"
            nameTwo="Sem Registro"
            breedTwo="Pastor Belga"
            tutorTwo="J. Paulo"
            addressTwo="Salvador - BA"
            functionTwo="Sem Registro"
            vaccineOneTwo={false}
            vaccineTwoTwo={false}
            vaccineThreeTwo={false}
            genderTwo='M'
          />

          <OnePuppiesCard
            pic={Mel}
            name="Mel"
            age="Sem Registro"
            breed="Pastor Belga"
            tutor="ST PM Rodrigues"
            address="S.C. Cabrália"
            functionProps="Sem Registro"
            vaccineOne={false}
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
