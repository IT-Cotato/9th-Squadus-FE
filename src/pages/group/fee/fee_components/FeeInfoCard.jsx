import React from 'react';
import styled from 'styled-components';
import arrow_right_button from '../../../../assets/icons/arrow-right.svg';

const Container = styled.div`
  margin: 4px 0;
  padding: 12px 6px 12px 16px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: 4px;
  cursor: pointer;
`;

const FeeInfoTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  position: relative;
  gap: 12px;
  justify-content: space-between;
`;

const FeeInfoText = styled.div`
  font-weight: 600;
`;

const SubInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const FeeInfoAmount = styled.div`
  font-weight: 400;
`;

const FeeInfoDate = styled.div`
  font-weight: 400;
`;

const FeeInfoButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${arrow_right_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FeeInfoCard = ({ label, amount, dueDate, onClick }) => {
  const formattedDate = `~${dueDate.slice(5, 7)}.${dueDate.slice(8)}`;

  return (
    <Container onClick={onClick}>
    <FeeInfoTextContainer>
      <FeeInfoText>{label}</FeeInfoText>
      <SubInfoContainer>
        <FeeInfoAmount>{`${parseInt(amount, 10).toLocaleString('ko-KR')}원`}</FeeInfoAmount>
        <FeeInfoDate>{formattedDate}</FeeInfoDate>
      </SubInfoContainer>
    </FeeInfoTextContainer>
    <FeeInfoButton></FeeInfoButton>
  </Container>
  );
};

export default FeeInfoCard;
