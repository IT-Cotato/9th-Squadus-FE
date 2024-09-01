import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as PromotionIcon } from "../assets/icons/promotion.svg";
import { ReactComponent as GroupIcon } from "../assets/icons/group.svg";
import { ReactComponent as MatchIcon } from "../assets/icons/match.svg";
import { ReactComponent as MyPageIcon } from "../assets/icons/mypage.svg";

const NavBar = styled.nav`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #dcdcdc;
  box-sizing: border-box;
`;

const NavItem = styled(({ isActive, ...props }) => <Link {...props} />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  text-decoration: none;
  font-size: 10px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.neutral[900] : theme.colors.neutral[400]};

  svg {
    margin-bottom: 8px;
    width: 24px;
    height: 24px;
    fill: ${({ theme, isActive }) =>
      isActive ? theme.colors.neutral[900] : theme.colors.neutral[400]};
  }
`;

function MainNavigationBar() {
  const location = useLocation();
  const checkActive = (path) => location.pathname.includes(path);

  return (
    <NavBar>
      <NavItem to="/" isActive={checkActive("/") && location.pathname === "/"}>
        <HomeIcon />홈
      </NavItem>
      <NavItem to="/promotion" isActive={checkActive("/promotion")}>
        <PromotionIcon />
        홍보
      </NavItem>
      <NavItem to="/group" isActive={checkActive("/group")}>
        <GroupIcon />
        그룹
      </NavItem>
      <NavItem to="/match" isActive={checkActive("/match")}>
        <MatchIcon />
        매치
      </NavItem>
      <NavItem to="/mypage" isActive={checkActive("/mypage")}>
        <MyPageIcon />
        마이페이지
      </NavItem>
    </NavBar>
  );
}

export default MainNavigationBar;
