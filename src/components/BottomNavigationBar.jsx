import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.nav`
  //position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background-color: white;
  color: ${({ theme }) => theme.colors.neutral[400]};
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;

`;

function BottomNavigationBar() {
  return (
    <NavBar>
      <Link to="/">홈</Link>
      <Link to="/report">분석</Link>
      <Link to="/group">그룹</Link>
      <Link to="/match">매치</Link>
      <Link to="/mypage">마이페이지</Link>
    </NavBar>
  );
}

export default BottomNavigationBar;
