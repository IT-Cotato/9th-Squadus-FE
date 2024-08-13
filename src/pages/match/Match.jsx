import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import MatchHeader from './MatchHeader';
import create_icon from '../../assets/icons/write.svg'

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FloatingButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 32px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
`;

const CreateIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${create_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Match = () => {
  return (
    <>
      <FixedContainer>
        <MatchHeader />
      </FixedContainer>
      <ContentContainer>
        <Outlet />
        <FloatingButton> 
          <CreateIcon />
        </FloatingButton>
      </ContentContainer>
    </>
  );
}

export default Match;
