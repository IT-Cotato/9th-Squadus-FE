import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 16px;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
`;

const TabItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;
  text-decoration: none; // 밑줄 제거

  &.active {
    &:after {
      content: '';
      display: block;
      position: absolute; // 절대 위치를 사용하여 위치 조정
      bottom: 0; // 하단에 위치
      left: 0; // 왼쪽 정렬
      height: 2px;
      background-color: ${({ theme }) => theme.colors.main[500]};
      width: 100%;
    }
  }
`;


function GroupTabBar() {
  return (
    <Container>
      <TabItem to="/group/basic-info">기본 정보</TabItem>
      <TabItem to="/group/schedule">일정</TabItem>
      <TabItem to="/group/notice">공지</TabItem>
      <TabItem to="/group/fee">회비</TabItem>
    </Container>
  );
}

export default GroupTabBar;
