import React, { useCallback } from 'react';
import { ImWhatsapp } from 'react-icons/im';

import Text from '../../components/Text';
import Tittle from '../../components/Tittle';

import colors from '../../utils/colors';

import * as Styles from './styles';

const ContactSection: React.FC = () => {
  const handleOpenWhatsapp = useCallback(() => {
    const message = 'Olá Rodrigues, tenho um interesse em um dos filhotes!';
    const wppURL = `https://api.whatsapp.com/send?l=pt-BR&phone='557399966969'&text=${message}`;

    window.open(wppURL, '_blank')!.focus();
  }, []);

  return (
    <>
      <Styles.Container id='contact'>
        <Styles.Banner>
          <Tittle
            text="Entre em contato"
            iconColor={colors.gray.white}
            textColor={colors.gray.white}
          />

          <Styles.ContactOptionsDiv>
            <Styles.ContactOptionButton onClick={handleOpenWhatsapp}>
              <Styles.WhatsappDiv>
                <ImWhatsapp color="#25d366" size={50} />

                <Text
                  text="+55 73 9996-6969"
                  align="center"
                  color={colors.gray.dark04}
                  size={20}
                  weight="400"
                  fontFamily="Dosis"
                  marginLeft={20}
                />
              </Styles.WhatsappDiv>

              <Text
                text="Rodrigues"
                align="center"
                color={colors.gray.dark03}
                size={14}
                weight="400"
                fontFamily="Dosis"
              />
            </Styles.ContactOptionButton>
          </Styles.ContactOptionsDiv>
        </Styles.Banner>
      </Styles.Container>
    </>
  )
}

export default ContactSection;
