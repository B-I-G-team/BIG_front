import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * { font-family: 'Spoqa Han Sans Neo', sans-serif; }

  body {
    margin: 0;
    padding: 0;
    overflow-y: scroll;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a, a:link, a:visited, a:focus {
    text-decoration: none;
  }
`;

export default GlobalStyle;
