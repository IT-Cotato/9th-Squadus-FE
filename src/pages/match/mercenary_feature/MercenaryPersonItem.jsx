import React, { useState } from 'react';
import styled from 'styled-components';
import arrow_right_icon from '../../../assets/icons/arrow-right-grey.svg';
import { postMercenaryDecision } from '../../../apis/api/mercenary';

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

const DecisionCompleteButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  color: ${({ theme }) => theme.colors.main[600]};
  padding: 8px 32px;
`;

const MercenaryPersonItem = ({ clubMemberId, personName, university, requestId, memberId, matchingStatus }) => {
  const [decision, setDecision] = useState(matchingStatus);

  const handleDecision = (newDecision) => {
    const accessToken = localStorage.getItem("accessToken");

    postMercenaryDecision(accessToken, requestId, newDecision, clubMemberId)
      .then((response) => {
        console.log("결정 성공:", response);
        setDecision(newDecision);
      })
      .catch((error) => {
        console.error("결정 실패:", error);
      });
  };

  const handleReject = () => handleDecision('REJECTED');
  const handleApprove = () => handleDecision('APPROVED');

  return (
    <Container>
      <PersonInfoContainer>
        <PersonName>{personName}
          <ArrowRightIcon />
        </PersonName>
        <SubInfo>{university}</SubInfo>
      </PersonInfoContainer>
      <ButtonContainer>
        {decision === 'PENDING' ? (
          <>
            <RejectButton onClick={handleReject}>거절</RejectButton>
            <ApproveButton onClick={handleApprove}>승낙</ApproveButton>
          </>
        ) : (
          <DecisionCompleteButton>
            {decision === 'APPROVED' ? '승낙 완료' : '거절 완료'}
          </DecisionCompleteButton>
        )}
      </ButtonContainer>
    </Container>
    
  );
}

export default MercenaryPersonItem;
