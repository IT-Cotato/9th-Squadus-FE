import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import notification_icon from "../../../assets/icons/notification.svg";
import useAuthStore from "../../../stores/useAuthStore";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #dcdcdc;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const Notification = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${notification_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function HomeHeader() {
  const { userData } = useAuthStore();
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate("/notification");
  };

  return (
    <Container>
      <Title>반가워요 {userData ? userData.memberName : ""}님!</Title>
      {/* <Notification onClick={handleNotificationClick}></Notification> */}
      <Notification
        onClick={() => {
          alert("📍추후 구현 예정입니다!");
        }}
      ></Notification>
    </Container>
  );
}

export default HomeHeader;
