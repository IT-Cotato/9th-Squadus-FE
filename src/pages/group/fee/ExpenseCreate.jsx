import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  background-color: white;
  align-items: center;
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

const SaveButton = styled.div`
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
  padding: 20px;
`;

const InputContainer = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 18px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[400]};
  }
`;



const ExpenseCreate = ({ closeExpenseCreate }) => {
  return (
    <Container>
      <HeaderContainer>
        <CloseButton onClick={closeExpenseCreate}/>
        <HeaderTitle>회비 사용 내역 등록</HeaderTitle>
        <SaveButton>등록</SaveButton>
      </HeaderContainer>
      <ContentContainer>
        <InputContainer
          type="text"
          placeholder="사용 내역"
        />
        <InputContainer
          type="date"
          placeholder="회비 사용 일자"
        />
        <InputContainer
          type="text"
          placeholder="금액"
        />
      </ContentContainer>

    </Container>
  );
};

export default ExpenseCreate;
