import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import notification_icon from '../../../assets/icons/notification.svg';
import useAuthStore from '../../../stores/useAuthStore';
import api from '../../../api/api';

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
  const [userData, setUserData] = useState(null);
  const accessToken = useAuthStore(state => state.accessToken);
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate('/notification');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      await api.get(`/v1/api/members/info`, {
        headers: {
          'Content-Type': 'application/json',
          access: `${accessToken}` 
        }
      })
      .then((response) => {
        setUserData(response.data);
        console.log('User data fetched:', response.data);
      })
      .catch((error) => {
        console.error('Failed to fetch user data:', error);
      })
    };

    if (accessToken) {
      fetchUserData();
    }
  }, [accessToken]);

  return (
    <Container>
        <Title>반가워요 {userData ? userData.memberName : ''}님!</Title>
        <Notification onClick={handleNotificationClick}></Notification>
    </Container>
  );
}

export default HomeHeader;
