import React from 'react';
import { BiBone } from 'react-icons/bi';

import Text from '../../components/Text';
import colors from '../../utils/colors';

import * as Styles from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Styles.Container>
        <BiBone color={colors.gray.grayDark04} />

        <Text
          text="ODAN"
          align="center"
          color={colors.gray.grayDark04}
          size={14}
          weight="700"
          fontFamily="Roboto Slab"
          letterSpacing={2}
          marginLeft={5}
          marginRight={2}
        />

        <BiBone color={colors.gray.grayDark04} />
      </Styles.Container>
    </>
  );
};

export default Header;
