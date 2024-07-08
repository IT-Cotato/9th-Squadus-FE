import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css");

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    src: url(assets/fonts/Pretendard-Bold.woff) format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    src: url(assets/fonts/Pretendard-SemiBold.woff) format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    src: url(assets/fonts/Pretendard-Medium.woff) format('woff');
  }
  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    src: url(assets/fonts/Pretendard-Regular.woff) format('woff');
  }

  * {
    font-family: 'Pretendard';
  }

  html {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: #F2F4F7;
  }

  #root {
    width: 100%;
    max-width: 649px;
    margin: 0 auto;
    background-color: white;
    flex-grow: 1;
    display: flex;
    flex-direction: pink;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
