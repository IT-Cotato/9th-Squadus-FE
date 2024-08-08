import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}

html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: #F2F4F7;
  font-family: 'Pretendard';
  justify-content: center;
}


#root {
  width: 100%;
  max-width: 649px;
  background-color: white;
  flex-grow: 1;
  display: flex;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
}
`;
