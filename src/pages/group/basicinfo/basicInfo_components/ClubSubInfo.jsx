import ClubComment from "./ClubComment";
import styled from "styled-components";
import { ReactComponent as BronzeIcon } from "../../../../assets/icons/group/bronze.svg";
import { ReactComponent as SilverIcon } from "../../../../assets/icons/group/silver.svg";
import { ReactComponent as GoldIcon } from "../../../../assets/icons/group/gold.svg";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
`;

const RankContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;

  box-shadow: 0px 0px 8px rgba(110, 110, 110, 0.23);
  border-radius: 12px;
`;

const RankImg = styled.div`
  width: 83.19px;
  height: 83.19px;
  box-shadow: 0px 0px 11px 0px #00fff033;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RankTextContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const TextSmall = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.011em;
  color: #667085;
`;

const TextBIg = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  letter-spacing: -0.011em;
  color: #344054;
`;
const TextMid = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  letter-spacing: -0.011em;
  color: #667085;
`;
const ClubSubInfo = ({ onClick, information }) => {
  const tierTranslations = {
    BRONZE: "브론즈",
    SILVER: "실버",
    GOLD: "골드",
  };
  const tierText = tierTranslations[information.clubTier];

  const randNum = Math.floor(Math.random() * 101);
  return (
    <Container>
      <RankContainer onClick={onClick}>
        <RankImg>
          {tierText === "브론즈" && <BronzeIcon />}
          {tierText === "실버" && <SilverIcon />}
          {tierText === "골드" && <GoldIcon />}
        </RankImg>

        <RankTextContainer>
          <TextBIg>{tierText}</TextBIg>
          <TextMid>138팀 중 {randNum}위</TextMid>
          <TextSmall>다음 레벨까지 남은 순위 : {randNum}위</TextSmall>
        </RankTextContainer>
      </RankContainer>
      <ClubComment title={"동아리 한마디"} content={information.clubMessage} />
    </Container>
  );
};

export default ClubSubInfo;
