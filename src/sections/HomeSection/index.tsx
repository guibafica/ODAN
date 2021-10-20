import React from 'react';

import Text from '../../components/Text';
import colors from '../../utils/colors';

import * as Styles from './styles';

const HomeSection: React.FC = () => {
  return (
    <>
      <Styles.Container id='home'>
        <Styles.Content>
          <Text
            text="Bem-vindo ao ODAN,"
            align="center"
            color={colors.gray.dark04}
            size={8}
            weight="400"
            fontFamily="Roboto Slab"
            letterSpacing={2}
          />

          <Text
            text="Observatório do Desenvolvimento e"
            align="center"
            color={colors.gray.grayDark01}
            size={22}
            weight="500"
            fontFamily="Dosis"
          />

          <Text
            text="Acompanhamento da Ninhada."
            align="center"
            color={colors.gray.grayDark01}
            size={22}
            weight="500"
            fontFamily="Dosis"
          />
        </Styles.Content>
      </Styles.Container>
    </>
  )
}

export default HomeSection;
