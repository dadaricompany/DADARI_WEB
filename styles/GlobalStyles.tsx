import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body,
  #__next {
    background:#fff;
    padding: 0;
    margin: 0;
    font-family: NotoSansKR;
    height:100vh;
    width:100%;
  }
  #__next {
    width:100vw;
    max-width: 768px;
    margin:0 auto;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

export default GlobalStyles;
