import React from 'react';
import styled from 'styled-components';
import notification_icon from '../../../assets/icons/notification.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #dcdcdc;
  justify-content: space-between;

`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const Notification = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${notification_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function HomeHeader() {
  return (
    <Container>
        <Title>안녕하세요!</Title>
        <Notification></Notification>
    </Container>
  );
}

export default HomeHeader;
