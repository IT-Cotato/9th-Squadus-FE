import React from 'react';
import MainNavigationBar from './MainNavigationBar';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
  overflow: auto;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
  background-color: white;
`;

const MainLayout = ({ children, showMainNav }) => {
  return (
    <LayoutContainer>
      <Content>
        {children}
      </Content>
      {showMainNav && <MainNavigationBar />}
    </LayoutContainer>
  );
};

export default MainLayout;
