import React, { useCallback } from 'react';

import * as Styles from './styles';

const FooterSection: React.FC = () => {
  const handlePortfolio = useCallback(() => {
    const URL = 'https://guilhermebafica.vercel.app/';

    window.open(URL, '_blank')!.focus();
  }, []);

  return (
    <>
      <Styles.Container id='footer'>
        <Styles.Content>
          <Styles.Text onClick={handlePortfolio}>
            Feito por Guilherme Bafica
          </Styles.Text>
        </Styles.Content>
      </Styles.Container>
    </>
  )
}

export default FooterSection;
