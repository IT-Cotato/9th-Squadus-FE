import styled from "styled-components";
import RankItem from "./basicInfo_components/RankItem";
import RankTab from "./basicInfo_components/RankTab";
import { useState } from "react";
import { ReactComponent as RankBackIcon1 } from "../../../assets/group/RankBackIcon1.svg";
import { ReactComponent as RankBackIcon2 } from "../../../assets/group/RankBackIcon2.svg";
import Awarding from "./basicInfo_components/Awarding";
const BaseContainer = styled.div`
  max-width: 649px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  z-index: 10001;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -2px 87px 0px #475467;
  box-sizing: border-box;
  background: ${({ $clubTier }) => {
    if ($clubTier === "BRONZE")
      return "linear-gradient(90deg, #FF6330 0%, #FF3F00 100%)";
    if ($clubTier === "SILVER")
      return "linear-gradient(270deg, #1E58EC 0%, #52559D 100%)";
    if ($clubTier === "GOLD")
      return "linear-gradient(270deg, #FFD362 0%, #FFA51E 100%)";
  }};
`;
const Header = styled.div`
  width: 100%;
  height: 64px;
  padding: 0px 20px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: #ffffff;
  display: flex;
  align-items: center;
  position: relative;
`;

const BackButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  line-height: 22px;
  color: #ffffff;
  font-size: 24px;
  left: 20px;
`;

const TopText = styled.div`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
`;

const ListContainer = styled.div`
  width: 100%;
  height: Hug (502.9px) px;
  padding: 16px 0px;
  border-radius: 16px 16px 0px 0px;
  background-color: #ffffff;
  overflow-y: auto;
`;

const RankBackIcon1Styled = styled(RankBackIcon1)`
  position: absolute;
  width: 108.92px;
  height: 149.1px;
  top: 380.73px;
  left: 0px;
`;

const RankBackIcon2Styled = styled(RankBackIcon2)`
  position: absolute;
  width: 169.39px;
  height: 231.89px;
  top: 81.24px;
  right: 0px;
  pointer-events: none;
`;
const mockDataMonthly = [
  {
    rank: 1,
    isUp: true,
    upDown: 2,
    name: "중앙가르드",
    score: 238,
  },
  {
    rank: 2,
    isUp: false,
    upDown: 1,
    name: "중앙가르드",
    score: 238,
  },
  {
    rank: 3,
    isUp: false,
    upDown: 2,
    name: "중앙가르드",
    score: 238,
  },
  {
    rank: 4,
    isUp: true,
    upDown: 1,
    name: "중앙가르드",
    score: 238,
  },
  {
    rank: 5,
    isUp: false,
    upDown: 1,
    name: "중앙가르드",
    score: 238,
  },
];
const mockDataAllTime = [
  {
    rank: 1,
    isUp: true,
    upDown: 2,
    name: "메롱",
    score: 238,
  },
  {
    rank: 2,
    isUp: false,
    upDown: 1,
    name: "메롱",
    score: 238,
  },
  {
    rank: 3,
    isUp: false,
    upDown: 2,
    name: "메롱",
    score: 238,
  },
  {
    rank: 4,
    isUp: true,
    upDown: 1,
    name: "메롱",
    score: 238,
  },
  {
    rank: 5,
    isUp: false,
    upDown: 1,
    name: "메롱",
    score: 238,
  },
];
const Rank = ({ isOpen, onClose, clubTier }) => {
  const [activeTab, setActiveTab] = useState("monthly");
  const listdata = activeTab === "monthly" ? mockDataMonthly : mockDataAllTime;
  return (
    <>
      {isOpen && (
        <BaseContainer $clubTier={clubTier}>
          <Header>
            <BackButton onClick={onClose}> &lt; </BackButton>
            <TopText>티어</TopText>
          </Header>
          <RankTab
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            clubTier={clubTier}
          />
          <Awarding />
          <ListContainer>
            {listdata.map((item) => (
              <RankItem key={item.rank} {...item} />
            ))}
          </ListContainer>
          <RankBackIcon1Styled />
          <RankBackIcon2Styled />
        </BaseContainer>
      )}
    </>
  );
};

export default Rank;
