import React from 'react';
import BottomNavigationBar from './BottomNavigationBar';
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
  // background-color: ${({ theme }) => theme.colors.secondary[100]};
`;

const Layout = ({ children, showBottomNav }) => {
  return (
    <LayoutContainer>
      <Content>
        {children}
      </Content>
      {showBottomNav && <BottomNavigationBar />}
    </LayoutContainer>
  );
};

export default Layout;
