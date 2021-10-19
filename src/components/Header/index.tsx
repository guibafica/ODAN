import React from 'react';

import Text from '../../components/Text';
import colors from '../../utils/colors';

import * as Styles from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Styles.Container>
        <Text
          text="- ODAN -"
          align="center"
          color={colors.gray.grayDark04}
          size={14}
          weight="700"
          fontFamily="Roboto Slab"
          letterSpacing={2}
        />
      </Styles.Container>
    </>
  );
};

export default Header;
