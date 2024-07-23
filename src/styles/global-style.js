import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}

html, body {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  // flex-direction: row;
  background-color: #F2F4F7;
  justify-content: center;
  font-family: 'Pretendard';
}

body {
  height: 100vh;
}
  

#root {
  width: 100%;
  max-width: 649px;
  margin: 0 auto;
  background-color: white;
  flex-grow: 1;
  display: flex;
}

a {
  text-decoration: none;
  color: inherit;
}

*{  
  box-sizing: border-box;
}
`;
