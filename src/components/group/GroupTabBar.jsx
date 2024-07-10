import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TabNav = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
`;

const TabLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  color: black;
  &.active {
    color: blue;
    font-weight: bold;
  }
`;

function GroupTabBar() {
  return (
    <TabNav>
      <TabLink to="/group/basic-info">기본 정보</TabLink>
      <TabLink to="/group/schedule">일정</TabLink>
      <TabLink to="/group/notice">공지</TabLink>
      <TabLink to="/group/fee">회비</TabLink>
    </TabNav>
  );
}

export default GroupTabBar;
