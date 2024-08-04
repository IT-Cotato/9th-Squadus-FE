import React, { useState } from 'react';
import styled from 'styled-components';
import FeeMemberSelect from './FeeMemberSelect';

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

const FeeCreate = ({ closeFeeCreate }) => {
  const [showSelectFeeMemeber, setShowSelectFeeMemeber] = useState(false);
  const [selectedMemberIds, setSelectedMemberIds] = useState([]);

  const updateSelection = (selectedIds) => {
    setSelectedMemberIds(selectedIds);
  };

  return (
    <Container>
      <HeaderContainer>
        <CloseButton onClick={closeFeeCreate}/>
        <HeaderTitle>회비 등록</HeaderTitle>
        <SaveButton>완료</SaveButton>
      </HeaderContainer>
      <ContentContainer>
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
        <MemberSelectContainer onClick={() => {setShowSelectFeeMemeber(true);}}>
          회비 납부 인원 선택 ({selectedMemberIds.length}명)
        </MemberSelectContainer>
        <InputContainer
          type="text"
          placeholder="메모"
        />
      </ContentContainer>

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
            <FeeMemberSelect 
              closeFeeMemberSelect={() => setShowSelectFeeMemeber(false)} 
              updateSelection={updateSelection}
              selectedMemberIds={selectedMemberIds}
            />
          </div>
        </div>
      }
    </Container>
  );
};

export default FeeCreate;
