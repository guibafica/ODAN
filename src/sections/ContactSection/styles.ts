import styled from 'styled-components';

import contactBG from '../../assets/contact-bg.png';

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.gray.light03};
  min-height: 75vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Banner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 75vh;
  background: url(${contactBG}) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 2;
  margin-top: -50px;
`;

export const Content = styled.div`
  background: ${colors.gray.light02};
  margin-top: -65px;
  width: 100%;
  padding: 3rem;
  padding-top: 8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContactOptionsDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContactOptionButton = styled.div`
  width: 48%;
  height: 150px;
  background-color: ${colors.gray.white};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.40);
  }

  @media screen and (max-width: 890px) {
    width: 80%;
  }

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const WhatsappDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${colors.gray.dark02};
  padding-bottom: 15px;
  margin-bottom: 10px;

  @media screen and (max-width: 424px) {
    svg {
      height: 30px;
      width: 30px;
    }

    p {
      font-size: 20px;
      margin-left: 5px;
    }
  }
`;
