import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }
  a, 
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }
  button {
    cursor: pointer;
    outline: none;
  }
  ul li {
    list-style: none;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.family};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export default GlobalStyles;
