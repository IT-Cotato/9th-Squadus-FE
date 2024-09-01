import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import previous_icon from '../../../assets/icons/arrow-left.svg';
import arrow_down_icon from '../../../assets/icons/arrow-down-grey.svg';
import MercenaryReceivedList from './MercenaryReceivedList';
import MercenarySentList from './MercenarySentList'
import GroupSelectList from '../GroupSelectList';
import useAuthStore from '../../../stores/useAuthStore';

const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10000;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  position: relative;
  gap: 4px;
`;

const PreviousButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${previous_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
  margin-right: 12px;
`;

const SelectMyGroupContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const SelectedGroup = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`;

const ArrowDownButton = styled.div`
  height: 18px;
  width: 18px;
  background-image: url(${arrow_down_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TabBar = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: pink; */
  padding: 0px 20px;
  margin: 8px 0px;
  gap: 12px;
`;

const TabItem = styled.div`
  padding: 8px 0px;
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 18px;
  font-weight: 500;
  border-bottom: ${({ $isActive, theme }) => $isActive ? `2px solid ${theme.colors.neutral[700]}` : "none"};
  cursor: pointer;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;


const MercenaryHistory = ({ closeMercenaryHistory }) => {
  const { userData } = useAuthStore();
  const [activeTab, setActiveTab] = useState('sentRequest');
  const [showMercenarySent, setShowMercenarySent] = useState(true);
  const [showMercenaryReceived, setShowMercenaryReceived] = useState(false);
  const [showGroupSelectList, setShowGroupSelectList] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    if (userData && userData.memberClubs && userData.memberClubs.length > 0) {
      setSelectedGroup(userData.memberClubs[0]);
    }
  }, [userData]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    if (tab === 'sentRequest') {
      setShowMercenarySent(true);
      setShowMercenaryReceived(false);
    } else if (tab === 'receivedRequest') {
      setShowMercenarySent(false);
      setShowMercenaryReceived(true);
    }
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setShowGroupSelectList(false);
  };

  return (
    <WrapperContainer>
      <Container>
        <FixedContainer>
          <HeaderContainer>
            <PreviousButton onClick={closeMercenaryHistory} />
            <HeaderTitle>용병 신청내역</HeaderTitle>
            {activeTab !== 'sentRequest' && (
              <SelectMyGroupContainer onClick={() => setShowGroupSelectList(!showGroupSelectList)}>
                <SelectedGroup>
                  {selectedGroup ? selectedGroup.clubName : '동아리 선택'}
                </SelectedGroup>
                <ArrowDownButton />
              </SelectMyGroupContainer>
            )}
            {showGroupSelectList && <GroupSelectList onSelect={handleGroupSelect} />}
          </HeaderContainer>
          <TabBar>
            <TabItem onClick={() => handleTabClick('sentRequest')} $isActive={activeTab === 'sentRequest'}>신청한 내역</TabItem>
            <TabItem onClick={() => handleTabClick('receivedRequest')} $isActive={activeTab === 'receivedRequest'}>신청받은 내역</TabItem>
          </TabBar>
        </FixedContainer>
        <ContentContainer>
          {
            showMercenarySent && 
            <MercenarySentList />
          }

          {
            showMercenaryReceived && 
            <MercenaryReceivedList selectedGroup={selectedGroup} clubMemberId={selectedGroup?.clubMemberIdx}/>
          }
        </ContentContainer>
      </Container>
    </WrapperContainer>
  );
};

export default MercenaryHistory;
