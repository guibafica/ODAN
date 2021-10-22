import styled from 'styled-components';

import dealBg from '../../assets/deal-bg.png';

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
  background: url(${dealBg}) no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  z-index: 2;
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
  padding-bottom: 100px;
`;
