import React from 'react';

import Text from '../../components/Text';
import colors from '../../utils/colors';

import * as Styles from './styles';

interface IPuppiesCardsProps {
  picOne: string;
  nameOne: string;
  ageOne: string;
  breedOne: string;
  tutorOne: string;
  addressOne: string;
  functionOne: string;

  picTwo: string;
  nameTwo: string;
  ageTwo: string;
  breedTwo: string;
  tutorTwo: string;
  addressTwo: string;
  functionTwo: string;
}

const TwoPuppiesCards: React.FC<IPuppiesCardsProps> = ({
  picOne,
  nameOne,
  ageOne,
  breedOne,
  tutorOne,
  addressOne,
  functionOne,
  picTwo,
  nameTwo,
  ageTwo,
  breedTwo,
  tutorTwo,
  addressTwo,
  functionTwo,
}) => {
  return (
    <>
      <Styles.Container>
        <Styles.PuppiesLeftCard>
          <Styles.ImgDiv>
            <Styles.PuppiesLeftImg src={picOne} />
          </Styles.ImgDiv>

          <Styles.InfoLeftDiv>
            <Styles.TextDiv>
              <Text
                text="NOME: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={nameOne}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="IDADE: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={ageOne}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="RAÇA: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={breedOne}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="TUTOR: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={tutorOne}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="ENDEREÇO: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={addressOne}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="FUNÇÃO: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={functionOne}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>
          </Styles.InfoLeftDiv>
        </Styles.PuppiesLeftCard>

        <Styles.PuppiesRightCard>
          <Styles.ImgDiv>
            <Styles.PuppiesRightImg src={picTwo} />
          </Styles.ImgDiv>

          <Styles.InfoRightDiv>
            <Styles.TextDiv>
              <Text
                text="NOME: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={nameTwo}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="IDADE: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={ageTwo}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="RAÇA: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={breedTwo}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="TUTOR: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={tutorTwo}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="ENDEREÇO: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={addressTwo}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>

            <Styles.TextDiv>
              <Text
                text="FUNÇÃO: "
                align="left"
                color={colors.gray.dark03}
                size={8}
                weight="400"
                fontFamily="Roboto Slab"
                letterSpacing={2}
              />

              <Text
                text={functionTwo}
                align="left"
                color={colors.gray.dark04}
                size={10}
                weight="400"
                fontFamily="Dosis"
                marginLeft={5}
              />
            </Styles.TextDiv>
          </Styles.InfoRightDiv>
        </Styles.PuppiesRightCard>
      </Styles.Container>
    </>
  );
};

export default TwoPuppiesCards;