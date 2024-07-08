import React from 'react';
import BottomNavigationBar from './BottomNavigationBar';
import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
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
