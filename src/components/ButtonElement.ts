import styled from 'styled-components';
import { Link } from 'react-scroll';

import colors from '../utils/colors';

interface IButtonProps {
  primary: boolean;
  big?: boolean;
  dark: boolean;
  fontBig?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  exact: string;
}

export const Button = styled(Link) <IButtonProps>`
  border-radius: 95% 4% 97% 5%/4% 94% 3% 95%;
  background: ${({ primary }) => (
    primary ? colors.primary.green01 : colors.gray.grayDark07
  )};
  color: ${({ dark }) => (
    dark ? colors.gray.grayDark07 : colors.gray.white
  )};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: ${({ fontBig }) => (fontBig ? 700 : 500)};
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  white-space: nowrap;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
  font-family: 'Dosis';

  &:hover {
    background: ${({ primary }) => (
    primary ? colors.gray.white : colors.gray.grayDark07
  )};
    transform: scale(1.2);
    color: ${colors.gray.black};
    border-radius: 4% 95% 6% 95%/95% 4% 92% 5%;
  }
`;
