import React, { useState } from 'react';
import styled from 'styled-components';
import FeeMemberEditItem from './fee_components/FeeMemberEditItem';
import close_icon from '../../../assets/icons/close.svg'

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
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; 
  border-bottom: 1px solid #dcdcdc;  
  position: relative;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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



const FeeStatusMemberEdit = ({ closeFeeStatusMemberEdit }) => {
  const MemberData = [
    { name: '이름(본인)', isPaid: true },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: true },
    { name: '이름', isPaid: true },
    { name: '이름', isPaid: true },
    { name: '이름', isPaid: true },
    { name: '이름', isPaid: true },
    { name: '다인', isPaid: true },
  ];


  return (
    <WrapperContainer>
        <Container>
        <HeaderContainer>
          <CloseButton onClick={() => closeFeeStatusMemberEdit(true)} />
          <HeaderTitle>납부 현황 편집</HeaderTitle>
          <SubmitButton>완료</SubmitButton>
        </HeaderContainer>
        <ContentContainer>
          {MemberData.map((member, index) => (
            <FeeMemberEditItem
              key={index}
              name={member.name}
              isPaid={member.isPaid}
            />
          ))}
        </ContentContainer>
        </Container>
    </WrapperContainer>
  );
};

export default FeeStatusMemberEdit;
