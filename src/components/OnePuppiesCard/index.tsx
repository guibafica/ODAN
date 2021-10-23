import React from 'react';
import { FaSyringe } from 'react-icons/fa';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';

import Text from '../../components/Text';
import colors from '../../utils/colors';

import * as Styles from './styles';

interface IPuppiesCardsProps {
  pic: string;
  name: string;
  age: string;
  breed: string;
  tutor: string;
  address: string;
  functionProps: string;
  vaccineOne: boolean;
  vaccineTwo: boolean;
  vaccineThree: boolean;
  gender: 'M' | 'F';
}

const OnePuppiesCard: React.FC<IPuppiesCardsProps> = ({
  pic,
  name,
  age,
  breed,
  tutor,
  address,
  functionProps,
  vaccineOne,
  vaccineTwo,
  vaccineThree,
  gender,
}) => {
  return (
    <>
      <Styles.Container>
        <Styles.PuppiesLeftCard>
          <Styles.ImgDiv>
            <Styles.PuppiesLeftImgDiv>
              <Styles.GenderLeftDiv>
                {gender === 'M' ? (
                  <BiMaleSign color={colors.gray.black} />
                ) : (
                  <BiFemaleSign color={colors.gray.black} />
                )}
              </Styles.GenderLeftDiv>

              <Styles.PuppiesLeftImg src={pic} />

              <Styles.VaccineLeftDiv>
                <FaSyringe color={vaccineOne ? colors.gray.white : colors.gray.grayLight02} />

                <FaSyringe color={vaccineTwo ? colors.gray.white : colors.gray.grayLight02} />

                <FaSyringe color={vaccineThree ? colors.gray.white : colors.gray.grayLight02} />
              </Styles.VaccineLeftDiv>
            </Styles.PuppiesLeftImgDiv>
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
                text={name}
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
                text={age}
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
                text={breed}
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
                text={tutor}
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
                text={address}
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
                text={functionProps}
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
      </Styles.Container>
    </>
  );
};

export default OnePuppiesCard;
