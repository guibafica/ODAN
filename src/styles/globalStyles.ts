import { createGlobalStyle } from 'styled-components'

import colors from '../utils/colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  a {
    text-decoration: none; 
    text-decoration-line: none !important;
  }

  button {
    text-decoration: none;  
  }

  body { 
    font-family: 'Open Sans', sans-serif;
    background: #F9FAFB;
    font-size: 1.125rem;
    text-decoration: none; 
  }

  *::selection {
    background: ${colors.primary.green01};
    color: ${colors.gray.white};
  }

  html::-webkit-scrollbar {
    width: 0.5rem;
  }

  html::-webkit-scrollbar-track {
    background: ${colors.gray.black};
  }

  html::-webkit-scrollbar-thumb {
    background: ${colors.primary.green01};
  }
`;

export default GlobalStyle;