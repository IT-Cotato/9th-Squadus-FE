import React from 'react';
import { GlobalStyle } from './styles/global-style';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}



export default App;
