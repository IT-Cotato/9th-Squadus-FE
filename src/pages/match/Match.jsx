import React, { useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MatchHeader from "./MatchHeader";
import create_icon from "../../assets/icons/write.svg";
import MatchCreate from "./MatchCreate";
import MercenaryCreate from "./MercenaryCreate";

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const WrapperContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const FloatingButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 32px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
`;

const CreateIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${create_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Match = () => {
  const [selectedTab, setSelectedTab] = useState("match");

  const [showMatchCreate, setShowMatchCreate] = useState(false);
  const [showMercenaryCreate, setShowMercenaryCreate] = useState(false);

  const handleFloatingButtonClick = () => {
    if (selectedTab === "match") {
      setShowMatchCreate(true);
    } else if (selectedTab === "mercenary") {
      setShowMercenaryCreate(true);
    }
  };

  return (
    <>
      <FixedContainer>
        <MatchHeader setSelectedTab={setSelectedTab} />
      </FixedContainer>
      <WrapperContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
        <FloatingButton onClick={handleFloatingButtonClick}>
          <CreateIcon />
        </FloatingButton>
      </WrapperContainer>

      {showMatchCreate && (
        <MatchCreate closeMatchCreate={() => setShowMatchCreate(false)} />
      )}

      {showMercenaryCreate && (
        <MercenaryCreate
          closeMercenaryCreate={() => setShowMercenaryCreate(false)}
        />
      )}
    </>
  );
};

export default Match;
