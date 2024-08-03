import React, { useState } from 'react';
import styled from 'styled-components';
import SelectFeeMember from './SelectFeeMember';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 10px 0 32px;
  font-size: 20px;
  text-align: center;
`;

const InputGroupContainer = styled.div`
  box-sizing: border-box;
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

const MemberSelectContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 18px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main[600]};
  color: white;
  font-size: 20px;
`

const FeeCreate = ({ closeFeeCreate }) => {
  const [showSelectFeeMemeber, setShowSelectFeeMemeber] = useState(false);

  return (
    <Container>
      <TitleContainer>회비 등록</TitleContainer>
      <InputGroupContainer>
        <InputContainer
          type="text"
          placeholder="회비명"
        />
        <InputContainer
          type="text"
          placeholder="금액"
        />
        <InputContainer
          type="text"
          placeholder="회비 구분"
        />
        <InputContainer
          type="date"
        />
        <MemberSelectContainer onClick={() => {setShowSelectFeeMemeber(true);}}>회비 납부 인원 선택</MemberSelectContainer>
        <InputContainer
          type="text"
          placeholder="메모"
        />
      </InputGroupContainer>
      <SubmitButton>등록</SubmitButton>

      {
        showSelectFeeMemeber &&
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: '649px',
              height: '100%',
              backgroundColor: 'white',
            }}>
            <SelectFeeMember closeSelectFeeMember={() => setShowSelectFeeMemeber(false)} />
          </div>
        </div>
      }
    </Container>
  );
};

export default FeeCreate;
