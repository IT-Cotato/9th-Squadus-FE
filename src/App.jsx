import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global-style';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import useAuthStore from './store/authStore';

function App() {
  console.log("App 실행");

  // 로컬 스토리지에 저장된 access token을 가져와 상태를 초기화
  const initialize = useAuthStore((state) => state.initialize);
  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}



export default App;
