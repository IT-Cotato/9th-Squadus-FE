import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as New } from "../../../assets/icons/new.svg";
import ApplyStatus from "../ApplyStatus";
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 20px;
  background-color: white;
  font-size: 16px;
  border-bottom: 1px solid #dcdcdc;
  position: relative;
  gap: 20px;
`;

const TabBar = styled.div`
  display: flex;
`;

const TabItem = styled.div`
  padding: 12px 4px;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.neutral[900] : theme.colors.neutral[400]};
  font-size: 24px;
  font-weight: 500;
  border-bottom: ${({ $isActive, theme }) =>
    $isActive ? `2px solid ${theme.colors.neutral[900]}` : "none"};
  cursor: pointer;
`;

const ApplicationHistoryButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral[700]};
  display: flex;
  gap: 4px;
`;

const PromotionHeader = ({ setSelectedTab }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("oncampus");

  const handleTabClick = (path) => {
    setActiveTab(path);
    setSelectedTab(path);

    if (path === "oncampus") {
      navigate(`/promotion/oncampus`);
    } else if (path === "offcampus") {
      navigate(`/promotion/offcampus`);
    }
  };

  const [isapplyStatusModal, setIsapplyStatusModal] = useState(false);
  const closeApplyStatusModal = () => {
    setIsapplyStatusModal(false);
  };
  const openApplyStatusModal = () => {
    setIsapplyStatusModal(true);
    console.log(isapplyStatusModal);
  };

  return (
    <Container>
      <TabBar>
        <TabItem
          onClick={() => handleTabClick("oncampus")}
          $isActive={activeTab === "oncampus"}
        >
          교내
        </TabItem>
        <TabItem
          onClick={() => handleTabClick("offcampus")}
          $isActive={activeTab === "offcampus"}
        >
          교외
        </TabItem>
      </TabBar>
      <ApplicationHistoryButton onClick={openApplyStatusModal}>
        동아리 지원현황
        <New />
      </ApplicationHistoryButton>
      <ApplyStatus
        isapplyStatusModal={isapplyStatusModal}
        closeApplyStatusModal={closeApplyStatusModal}
      />
    </Container>
  );
};

export default PromotionHeader;
