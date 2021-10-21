import React from 'react';

import Text from '../../components/Text';
import TwoPuppiesCards from '../../components/TwoPuppiesCards';

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
            picOne="https://s2.glbimg.com/K6CLJhAUpWNBJzQWW71DoynHyhk=/0x0:1280x853/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/U/y/ptufKMRGehwvUEG7VBQw/whatsapp-image-2020-12-02-at-10.30.54.jpeg"
            nameOne="Sheik"
            ageOne="5 meses"
            breedOne="Pastor Belga"
            tutorOne="Barbara"
            addressOne="Canavieiras - BA"
            functionOne="Cão Guarda"
            vaccineOneOne={true}
            vaccineTwoOne={true}
            vaccineThreeOne={true}

            picTwo="https://img.clasf.com.br/2020/06/17/Venda-filhote-Pastor-Belga-Malinois-20200617232258.4984330015.jpg"
            ageTwo="5 meses"
            nameTwo="Vitória"
            breedTwo="Pastor Belga"
            tutorTwo="Jhon Doe"
            addressTwo="S.C. Cabrália - BA"
            functionTwo="Cão Guarda"
            vaccineOneTwo={true}
            vaccineTwoTwo={false}
            vaccineThreeTwo={false}
          />
        </Styles.Content>
      </Styles.Container>
    </>
  )
}

export default PuppiesSection;
