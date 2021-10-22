import styled from 'styled-components';

import contactBG from '../../assets/contact-bg.png';

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.gray.grayDark01};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  border-top: 1px solid ${colors.gray.white};
  margin-top: 40px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: ${colors.gray.dark04};
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Dosis';
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${colors.gray.white};
    transform: scale(1.1);
  }
`;
