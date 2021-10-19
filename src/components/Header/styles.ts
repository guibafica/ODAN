import styled from 'styled-components';

import headerBg from '../../assets/header-bg.png';

export const Container = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0; 
  left: 0; 
  right: 0;

  background: url(${headerBg}) no-repeat;
  background-size: cover;
  background-position: bottom;

  padding-top: 1rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
