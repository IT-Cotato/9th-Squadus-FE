import PromotionItem from "./PromotionItem";
// import { BaseContainer } from "./Components_styled";
import WriteButton from "./WriteButton";
import { useContext, useEffect, useState } from "react";
import PromotionWrite from "../PromotionWrite";
import { PromotionContext } from "../Promotion";
import styled from "styled-components";

const OnCampus = () => {
  const data = useContext(PromotionContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };
  const filterData = data.filter((item) => item.clubCategory === "SCHOOL");
  console.log("교내에서 받아오는 context임", filterData);
  return (
    <>
      <WrapperContainer>
        <ContentContainer>
          {filterData.map((item) => (
            <ItemWrapper>
              <PromotionItem
                key={item.recruitingPostId}
                startDate={item.startDate}
                endDate={item.endDate}
                title={item.title}
                region={item.region}
                sportsCategory={item.sportsCategory}
                clubTier={item.clubTier}
                tags={item.tags}
                clubId={item.clubId}
                clubName={item.clubName}
                recruitingPostId={item.recruitingPostId}
              />
            </ItemWrapper>
          ))}
        </ContentContainer>
        <WriteButton onClick={openModal} />
      </WrapperContainer>
      <PromotionWrite isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default OnCampus;

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
  padding: 16px;
  gap: 8px;
`;
const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
`;
