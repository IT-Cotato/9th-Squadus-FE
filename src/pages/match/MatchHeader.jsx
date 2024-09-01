import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MatchHistory from './match_feature/MatchHistory';
import MercenaryHistory from './mercenary_feature/MercenaryHistory';
import arrow_right_icon from '../../assets/icons/arrow-right.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  position: relative;
`;

const TabBar = styled.div`
  display: flex;
  padding: 12px 20px;
  gap: 8px;
`;

const TabItem = styled.div`
  padding: 8px 0px;
  color: ${({ $isActive, theme }) => $isActive ? theme.colors.neutral[900] : theme.colors.neutral[400]};
  font-size: 24px;
  font-weight: 500;
  border-bottom: ${({ $isActive, theme }) => $isActive ? `2px solid ${theme.colors.neutral[900]}` : "none"};
  cursor: pointer;
`;

const ApplicationHistoryContainer = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[700]};
  gap: 4px;
`;

const ArrowRightIcon = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(${arrow_right_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const MatchHeader = ({ setSelectedTab }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('match');

  const [showMatchHistory, setShowMatchHistory] = useState(false);
  const [showMercenaryHistory, setShowMercenaryHistory] = useState(false);

  const handleTabClick = (path) => {
    setActiveTab(path);
    setSelectedTab(path)

    if (path === 'match') {
      navigate(`/match`);
    } else if (path === 'mercenary') {
      navigate(`/match/mercenary`);
    }
  };

  const handleApplicationClick = () => {
    if (activeTab === 'match') {
      setShowMatchHistory(true);
    } else if (activeTab === 'mercenary') {
      setShowMercenaryHistory(true);
    }
  }

  const getApplicationHistoryText = () => {
    return activeTab === 'match' ? '매치 신청내역' : '용병 신청내역';
  };


  return (
    <Container>
      <TabBar>
        <TabItem onClick={() => handleTabClick('match')} $isActive={activeTab === 'match'}>매치</TabItem>
        <TabItem onClick={() => handleTabClick('mercenary')} $isActive={activeTab === 'mercenary'}>용병</TabItem>
      </TabBar>
      <ApplicationHistoryContainer onClick={handleApplicationClick}>
        {getApplicationHistoryText()}
        <ArrowRightIcon />
      </ApplicationHistoryContainer>
      

      {
        showMatchHistory && 
        <MatchHistory
          closeMatchHistory={() => setShowMatchHistory(false)}
        />
      }

      {
        showMercenaryHistory && 
        <MercenaryHistory
          closeMercenaryHistory={() => setShowMercenaryHistory(false)}
        />
      }

    </Container>
  );
}

export default MatchHeader;
