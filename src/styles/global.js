import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

body {
  background:  linear-gradient(to right, #0d096b, #092c80, #1b4890, #37639d, #577ea8);
}
`