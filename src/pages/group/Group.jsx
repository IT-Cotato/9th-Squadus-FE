import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import GroupHeader from './group_components/GroupHeader';
import GroupTabBar from './group_components/GroupTabBar';
import useAuthStore from '../../stores/useAuthStore';
import api from '../../api/api';

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Group = () => {
  const [userData, setUserData] = useState(null);
  const accessToken = useAuthStore(state => state.accessToken);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get(`/v1/api/member/info`, {
          headers: {
            'Content-Type': 'application/json',
            access: `${accessToken}` 
          }
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    if (accessToken) {
      fetchUserData();
    }
  }, [accessToken]);

  return (
    <>
      <FixedContainer>
        <div>안녕 {userData ? userData.memberName : '누구'}</div>
        <div>사용자 이메일 {userData ? userData.email : '이메일'}</div>
        <GroupHeader />
        <GroupTabBar />
      </FixedContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
}

export default Group;
