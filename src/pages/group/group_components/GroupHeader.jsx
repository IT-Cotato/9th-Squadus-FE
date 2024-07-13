import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  font-size: 16px;
  border-bottom: 1px solid #dcdcdc;  // 임시
`;

const Logo = styled.img`
  height: 24px;
  width: 24px;
  background-color: pink;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;


function GroupHeader() {
  return (
    <Container>
        <Logo />
        <Title>중앙가르드</Title>
    </Container>
  );
}

export default GroupHeader;
