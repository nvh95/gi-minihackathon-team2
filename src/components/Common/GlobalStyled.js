import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --radius: 6px;
    --primaryColor: #FD5B2F;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
  }
  body {
    color: #000;
    margin: 0;
    font-size: 16px;
    font-family: Axiforma,'Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 16px;
    margin-top: 0;
  }
  button,
  input,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.25;
    margin: 0; 
  }
`;

export default GlobalStyle;
