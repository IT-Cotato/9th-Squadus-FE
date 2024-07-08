import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.nav`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 96px;
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
      <Link to="/">Home</Link>
      <Link to="/report">Report</Link>
      <Link to="/group">Group</Link>
      <Link to="/match">Match</Link>
      <Link to="/mypage">MyPage</Link>
    </NavBar>
  );
}

export default BottomNavigationBar;
