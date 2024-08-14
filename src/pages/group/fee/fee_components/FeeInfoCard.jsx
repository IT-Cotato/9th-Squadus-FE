import React from 'react';
import styled from 'styled-components';
import arrow_right_button from '../../../../assets/icons/arrow-right.svg';

const Container = styled.div`
  margin: 4px 0;
  padding: 12px 16px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const FeeInfoTextContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  position: relative;
`;

const FeeInfoText = styled.div`
  font-weight: 600;
  white-space: nowrap;
`;

const FeeInfoAmount = styled.div`
  font-weight: 500;
  white-space: nowrap;
  position: absolute;
  right: 76px;
`;

const FeeInfoDate = styled.div`
  font-weight: 500;
  white-space: nowrap;
  position: absolute;
  right: 12px;
`;

const FeeInfoButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${arrow_right_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FeeInfoCard = ({ label, amount, dueDate, onClick }) => (
  <Container onClick={onClick}>
    <FeeInfoTextContainer>
      <FeeInfoText>{label}</FeeInfoText>
      <FeeInfoAmount>{amount}</FeeInfoAmount>
      <FeeInfoDate>{dueDate}</FeeInfoDate>
    </FeeInfoTextContainer>
    <FeeInfoButton></FeeInfoButton>
  </Container>
);

export default FeeInfoCard;
