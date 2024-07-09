import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as ReportIcon } from '../assets/icons/report.svg';
import { ReactComponent as GroupIcon } from '../assets/icons/group.svg';
import { ReactComponent as MatchIcon } from '../assets/icons/match.svg';
import { ReactComponent as MyPageIcon } from '../assets/icons/mypage.svg';

const NavBar = styled.nav`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #dcdcdc;  // 임시
  box-sizing: border-box;
`;
const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-decoration: none;
  font-size: 10px;
  color: ${({ theme, isActive }) => (isActive ? theme.colors.secondary[600] : theme.colors.neutral[400])};
  
  svg {
    margin-bottom: 8px;
    width: 24px;
    height: 24px;
    fill: ${({ theme, isActive }) => (isActive ? theme.colors.secondary[600] : theme.colors.neutral[400])};
  }
`;

function BottomNavigationBar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <NavBar>
      <NavItem to="/" isActive={activeTab === '/'}>
        <HomeIcon />
        홈
      </NavItem>
      <NavItem to="/report" isActive={activeTab === '/report'}>
        <ReportIcon />
        분석
      </NavItem>
      <NavItem to="/group" isActive={activeTab === '/group'}>
        <GroupIcon />
        그룹
      </NavItem>
      <NavItem to="/match" isActive={activeTab === '/match'}>
        <MatchIcon />
        매치
      </NavItem>
      <NavItem to="/mypage" isActive={activeTab === '/mypage'}>
        <MyPageIcon />
        마이페이지
      </NavItem>
    </NavBar>
  );
}

export default BottomNavigationBar;
