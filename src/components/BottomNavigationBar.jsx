import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #4876a3;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
`;

function BottomNavigationBar() {
  return (
    <NavBar>
      <a href="/">Home</a>
      <a href="/report">Report</a>
      <a href="/group">Group</a>
      <a href="/match">Match</a>
      <a href="/mypage">MyPage</a>
    </NavBar>
  );
}

export default BottomNavigationBar;
