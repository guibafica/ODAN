import styled from 'styled-components';

import colors from '../../utils/colors';

export const Container = styled.div`
  background: ${colors.primary.yellow01};
  height: 4px;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 10;
`;
