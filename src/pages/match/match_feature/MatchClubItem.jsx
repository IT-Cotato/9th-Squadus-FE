import React from 'react';
import styled from 'styled-components';
import arrow_right_icon from '../../../assets/icons/arrow-right-grey.svg';
import { postMatchDecision } from '../../../apis/api/match';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

const ClubInfoContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 4px;
`;

const ClubName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[900]};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const ArrowRightIcon = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${arrow_right_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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

const MatchClubItem = ({ clubName, university, tier, requestId, onDecision, clubMemberId}) => {

  const handleDecision = async (decision) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      await postMatchDecision(accessToken, requestId, decision, clubMemberId);
      alert(`매칭 요청이 ${decision === 'ACCEPTED' ? '승낙' : '거절'}되었습니다.`);
      if (onDecision) {
        onDecision(requestId, decision);
      }
    } catch (error) {
      console.error('매칭 요청 처리 중 오류 발생:', error);
      alert('매칭 요청 처리 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <ClubInfoContainer>
        <ClubName>{clubName}
          <ArrowRightIcon />
        </ClubName>
        <SubInfo>{university}  {tier}</SubInfo>
      </ClubInfoContainer>
      <ButtonContainer>
        <RejectButton onClick={() => handleDecision('REJECTED')}>거절</RejectButton>
        <ApproveButton onClick={() => handleDecision('ACCEPTED')}>승낙</ApproveButton>
      </ButtonContainer>
    </Container>
    
  );
}

export default MatchClubItem;
