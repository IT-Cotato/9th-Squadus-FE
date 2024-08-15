import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import PromotionHeader from "./promotion_components/PromotionHeader";
import { useState } from "react";
import FilterBar from "../../components/FilterBar";
const Group = () => {
  const [selectedTab, setSelectedTab] = useState("oncampus");

  return (
    <>
      <FixedContainer>
        <PromotionHeader setSelectedTab={setSelectedTab} />
        <FilterBar />
      </FixedContainer>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
};

export default Group;

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
