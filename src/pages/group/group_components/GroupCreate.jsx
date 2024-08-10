import React, { useState } from 'react';
import styled from 'styled-components';

const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10000;
  justify-content: center;
`;


const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-color: white;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; 
  border-bottom: 1px solid #dcdcdc;  
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: blue;
  border: none;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SubmitButton = styled.div`
    color: ${({ theme }) => theme.colors.main[500]};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`;

const ContentContainer = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;


const GroupCreate = ({ closeGroupCreate }) => {


  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeGroupCreate} />
          <HeaderTitle>동아리 생성</HeaderTitle>
          <SubmitButton>등록</SubmitButton>
        </HeaderContainer>
        <ContentContainer>
          
        </ContentContainer>
      </Container>
    </WrapperContainer>
  );
};

export default GroupCreate;
