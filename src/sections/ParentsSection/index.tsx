import React from 'react';

import Text from '../../components/Text';
import Tittle from '../../components/Tittle';

import colors from '../../utils/colors';

import * as Styles from './styles';

const ParentsSection: React.FC = () => {
  return (
    <>
      <Styles.Container id='parents'>
        <Styles.WavyShape>
          <Styles.WaveOne />
          <Styles.WaveTwo />
          <Styles.WaveThree />

          <Styles.Content>
            <Tittle text="PAIS DA NINHADA" />

            <Styles.PatentsDiv>
              <Styles.ParentsCardDiv>
                <Styles.DogPìcDivLeft>
                  <Styles.DogPic src="https://static.wixstatic.com/media/db516d_b77b4e1a108040068506b49f4a402516~mv2_d_2592_1728_s_2.jpg/v1/fill/w_640,h_430,al_c,q_80,usm_1.20_1.00_0.01/db516d_b77b4e1a108040068506b49f4a402516~mv2_d_2592_1728_s_2.webp" />
                </Styles.DogPìcDivLeft>

                <Styles.DogInfoLeftVerticalDiv>
                  <Styles.LineInfoLeftDiv>
                    <Text
                      text="Nome: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Luna"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoLeftDiv>

                  <Styles.LineInfoLeftDiv>
                    <Text
                      text="Tutor: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Rodrigues"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoLeftDiv>

                  <Styles.LineInfoLeftDiv>
                    <Text
                      text="Endereço: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Cabrália - BA"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoLeftDiv>
                </Styles.DogInfoLeftVerticalDiv>
              </Styles.ParentsCardDiv>

              <Styles.DogInfoDiv>
                <Styles.DogInfoLeftDiv>
                  <Styles.LineInfoLeftDiv>
                    <Text
                      text="Nome: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Luna"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoLeftDiv>

                  <Styles.LineInfoLeftDiv>
                    <Text
                      text="Tutor: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Rodrigues"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoLeftDiv>

                  <Styles.LineInfoLeftDiv>
                    <Text
                      text="Endereço: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Cabrália - BA"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoLeftDiv>
                </Styles.DogInfoLeftDiv>

                <Styles.DogInfoRightDiv>
                  <Styles.LineInfoRightDiv>
                    <Text
                      text="Nome: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Lion"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoRightDiv>

                  <Styles.LineInfoRightDiv>
                    <Text
                      text="Tutor: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Rodrigues"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoRightDiv>

                  <Styles.LineInfoRightDiv>
                    <Text
                      text="Endereço: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Cabrália - BA"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoRightDiv>
                </Styles.DogInfoRightDiv>
              </Styles.DogInfoDiv>

              <Styles.ParentsCardDiv>
                <Styles.DogPìcDivRight>
                  <Styles.DogPic src="https://vetsmart-parsefiles.s3.amazonaws.com/eb389ae754e8d4cfb17ec409e6df2221_breed.jpg" />
                </Styles.DogPìcDivRight>

                <Styles.DogInfoRightVerticalDiv>
                  <Styles.LineInfoRightDiv>
                    <Text
                      text="Nome: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Lion"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoRightDiv>

                  <Styles.LineInfoRightDiv>
                    <Text
                      text="Tutor: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Rodrigues"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoRightDiv>

                  <Styles.LineInfoRightDiv>
                    <Text
                      text="Endereço: "
                      align="left"
                      color={colors.gray.dark03}
                      size={10}
                      weight="400"
                      fontFamily="Roboto Slab"
                      letterSpacing={2}
                    />

                    <Text
                      text="Cabrália - BA"
                      align="left"
                      color={colors.gray.dark04}
                      size={12}
                      weight="400"
                      fontFamily="Dosis"
                      marginLeft={5}
                    />
                  </Styles.LineInfoRightDiv>
                </Styles.DogInfoRightVerticalDiv>
              </Styles.ParentsCardDiv>
            </Styles.PatentsDiv>
          </Styles.Content>
        </Styles.WavyShape>
      </Styles.Container>
    </>
  )
}

export default ParentsSection;
