import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
  height: 22px;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
`;

const HeaderMore = styled.div`
  color: #98a2b3;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: right;
`;

const SectionHeader = ({ title, onClick }) => {
  const navigate = useNavigate();

  const handleMoreClick = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      // 로그인되어 있지 않으면 알림 표시 및 로그인 페이지로 리다이렉트
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else {
      // 로그인되어 있으면 기존의 onClick 함수 호출
      if (onClick) onClick();
    }
  };

  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderMore onClick={handleMoreClick}>더보기</HeaderMore>
    </Container>
  );
};

export default SectionHeader;
