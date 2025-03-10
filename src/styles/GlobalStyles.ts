import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  body {
    background-color: #f5f5f5;
  }

  .home-wrapper {
    display: flex;
    justify-content: center;
    min-height: 100vh;
    padding: 40px 0;
  }
`;

export default GlobalStyles;
