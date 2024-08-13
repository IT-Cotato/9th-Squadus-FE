import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import theme from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  console.log("App 실행");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
