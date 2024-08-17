import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

const PersonInfoContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 4px;
`;

const PersonName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[900]};
`;

const SubInfo = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const RejectButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const ApproveButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.main[600]};
  color: ${({ theme }) => theme.colors.main[600]};
`;

const MercenaryPersonItem = ({ personName, university }) => {

  return (
    <Container>
      <PersonInfoContainer>
        <PersonName>{personName}</PersonName>
        <SubInfo>{university}</SubInfo>
      </PersonInfoContainer>
      <ButtonContainer>
        <RejectButton>거절</RejectButton>
        <ApproveButton>승낙</ApproveButton>
      </ButtonContainer>
    </Container>
    
  );
}

export default MercenaryPersonItem;
