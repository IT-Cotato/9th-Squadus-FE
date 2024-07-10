import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  color: #000; // 텍스트 색상
  font-size: 16px; // 폰트 크기
  border-bottom: 1px solid #dcdcdc;  // 임시
`;

const Logo = styled.img`
  height: 24px;
  width: 24px;
  background-color: pink;
`;

const Title = styled.h1`
  font-size: 20px; // 타이틀 폰트 크기
  font-weight: bold; // 글자 두께
  color: ${({ theme }) => theme.colors.neutral[600]};
`;


function GroupHeader() {
  return (
    <HeaderContainer>
        <Logo />
        <Title>중앙가르드</Title>
    </HeaderContainer>
  );
}

export default GroupHeader;
