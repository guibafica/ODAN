import React from 'react';
import { IoMdPaw } from 'react-icons/io';

import Text from '../../components/Text';
import colors from '../../utils/colors';

import * as Styles from './styles';

interface ITittleProps {
  text: string;
}

const Tittle: React.FC<ITittleProps> = ({ text }) => {
  return (
    <>
      <Styles.Container>
        <IoMdPaw color={colors.primary.yellow01} size={35} />

        <Text
          text={text}
          align="center"
          color={colors.gray.dark04}
          size={18}
          weight="700"
          fontFamily="Roboto Slab"
          letterSpacing={2}
          marginLeft={5}
          marginRight={2}
        />

        <IoMdPaw color={colors.primary.yellow01} size={35} />
      </Styles.Container>
    </>
  );
};

export default Tittle;
