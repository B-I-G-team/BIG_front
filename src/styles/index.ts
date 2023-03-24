import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

  * { font-family: 'Noto Sans KR', sans-serif; }

  html{
    width:100%;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  a, a:link, a:visited, a:focus {
    text-decoration: none;
    color: black;
  }
  a:hover{
    opacity: 0.8;
  }

  button{
    border: 0;
    background-color: transparent;
  }

  input{
    outline: none;
    border:none;
  }


`;

export default GlobalStyle;
