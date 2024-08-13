import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import MatchHeader from './MatchHeader';

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Match = () => {
  return (
    <>
      <FixedContainer>
        <MatchHeader />
      </FixedContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
}

export default Match;
