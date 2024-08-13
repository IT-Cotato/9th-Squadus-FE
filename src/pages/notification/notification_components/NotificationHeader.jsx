import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  font-size: 16px;
  border-bottom: 1px solid #dcdcdc;
`;

const BackButton = styled.img`
  height: 24px;
  width: 24px;
  background-color: pink;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;


function NotificationHeader() {
  return (
    <Container>
        <BackButton />
        <Title>알림</Title>
    </Container>
  );
}

export default NotificationHeader;
