import React from 'react';
import styled from 'styled-components';
import previous_icon from "../../assets/icons/arrow-left.svg";
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  font-size: 16px;
  border-bottom: 1px solid #dcdcdc;
`;

const BackButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${previous_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;


function NotificationHeader() {
  const navigate = useNavigate();

  return (
    <Container>
        <BackButton onClick={() => navigate(-1)}/>
        <Title>알림</Title>
    </Container>
  );
}

export default NotificationHeader;
