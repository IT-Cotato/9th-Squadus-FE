import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ClubInfoContainer = styled.div`
  width: 100%; 
  height: auto; 
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.neutral[600]};
  border-radius: 12px; 
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center; 
`;

const ClubName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[100]};
`;

const SubInfo = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[300]};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
`;

const Button = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

const RejectButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

const ApproveButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.main[600]};
  color: ${({ theme }) => theme.colors.main[600]};
`;

const MatchClubItem = ({ clubName, university, tier}) => {

  return (
    <Container>
      <ClubInfoContainer>
        <ClubName>{clubName}</ClubName>
        <SubInfo>{university}  {tier}</SubInfo>
      </ClubInfoContainer>
      <ButtonContainer>
        <RejectButton>거절</RejectButton>
        <ApproveButton>승낙</ApproveButton>
      </ButtonContainer>
    </Container>
    
  );
}

export default MatchClubItem;
