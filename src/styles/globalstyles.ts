import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        font-style: 'thin';
        font-weight: 100;
        src: url('public/fonts/Roboto-Thin-webfont.woff') format('woff');
    }
    @font-face {
        font-family: 'Roboto';
        font-style: 'light';
        font-weight: 300;
        src: url('public/fonts/Roboto-Light-webfont.woff') format('woff');
    }
    @font-face {
        font-family: 'Roboto';
        font-style: 'regular';
        font-weight: 400;
        src: url('public/fonts/Roboto-Regular-webfont.woff') format('woff');
    }
    @font-face {
        font-family: 'Roboto';
        font-style: 'bold';
        font-weight: 700;
        src: url('public/fonts/Roboto-Bold-webfont.woff') format('woff');
    }
  html,
  body {
    font-size: 62.5%;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
