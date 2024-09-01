import React, { useState, useEffect } from "react";
import styled from "styled-components";
import previous_icon from "../../assets/icons/arrow-left.svg";
import arrow_down_icon from "../../assets/icons/arrow-down-grey.svg";
import useAuthStore from "../../stores/useAuthStore";
import GroupSelectList from "../match/GroupSelectList";
import ShowApplyClub from "./promotion_components/ShowApplyClub";
import ShowRecruitmentClub from "./promotion_components/ShowRecruitmentClub";

import api from "../../apis/utils/api";
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
  border-bottom: ${({ $isActive, theme }) =>
    $isActive ? `2px solid ${theme.colors.neutral[700]}` : "none"};
  cursor: pointer;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

const ApplyStatus = ({ isapplyStatusModal, closeApplyStatusModal }) => {
  const { userData } = useAuthStore();
  const [activeTab, setActiveTab] = useState("sentRequest");
  const [showApplyClub, setShowApplyClub] = useState(true);
  const [showRecruitmentClub, setShowRecruitmentClub] = useState(false);
  const [showGroupSelectList, setShowGroupSelectList] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    if (userData && userData.memberClubs && userData.memberClubs.length > 0) {
      setSelectedGroup(userData.memberClubs[0]);
    }
  }, [userData]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    if (tab === "sentRequest") {
      setShowApplyClub(true);
      setShowRecruitmentClub(false);
    } else if (tab === "receivedRequest") {
      setShowApplyClub(false);
      setShowRecruitmentClub(true);
    }
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
    setShowGroupSelectList(false);
  };

  return (
    <>
      {isapplyStatusModal && (
        <WrapperContainer>
          <Container>
            <FixedContainer>
              <HeaderContainer>
                <PreviousButton onClick={closeApplyStatusModal} />
                <HeaderTitle>동아리 지원현황</HeaderTitle>
                {/* {showRecruitmentClub && (
                  <SelectMyGroupContainer
                    onClick={() => setShowGroupSelectList(!showGroupSelectList)}
                  >
                    <SelectedGroup>
                      {selectedGroup ? selectedGroup.clubName : "동아리 선택"}
                    </SelectedGroup>
                    {showGroupSelectList && (
                      <SelectListContiner onSelect={handleGroupSelect} />
                    )}
                    <ArrowDownButton></ArrowDownButton>
                  </SelectMyGroupContainer>
                )} */}
              </HeaderContainer>
              <TabBar>
                <TabItem
                  onClick={() => handleTabClick("sentRequest")}
                  $isActive={activeTab === "sentRequest"}
                >
                  신청한 내역
                </TabItem>
                <TabItem
                  onClick={() => handleTabClick("receivedRequest")}
                  $isActive={activeTab === "receivedRequest"}
                >
                  모집 내역
                </TabItem>
              </TabBar>
            </FixedContainer>
            <ContentContainer>
              {showApplyClub && <ShowApplyClub />}
              {showRecruitmentClub && <ShowRecruitmentClub />}
            </ContentContainer>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default ApplyStatus;
