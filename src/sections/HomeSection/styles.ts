import styled from 'styled-components';

import homeBg from '../../assets/home-bg.png'

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.gray.light02};
  min-height: 75vh;
  background: url(${homeBg}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  margin-top: 10%;

  @media screen and (max-width: 700px) {
    margin-top: 20%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem;

  @media screen and (max-width: 700px) {
    width: 100%;
    align-items: center;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;