import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import PromotionItem from "./PromotionItem";
import { PromotionContext } from "../Promotion";
import axios from "axios";

const ShowApplyClub = () => {
  return (
    <Container>
      <HowMany>
        총&nbsp; <HowManyHighlight>{" 건"}</HowManyHighlight>의 보낸 신청
      </HowMany>
      <ItemWrapper>
        <ResultBox>{""}</ResultBox>
      </ItemWrapper>
    </Container>
  );
};
{
  /* <PromotionItem
startDate={""}
endDate={""}
title={""}
region={""}
sportsCategory={""}
clubTier={""}
tags={""}
clubId={""}
clubName={""}
/> */
}
export default ShowApplyClub;

const Container = styled.div`
  width: 100%;
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HowMany = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
  color: #101828;
  display: flex;
`;
const HowManyHighlight = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 27px;
  text-align: left;
  color: #ff6330;
`;

const ItemWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  gap: 8px;
`;
const ResultBox = styled.div`
  width: 50px;
  height: 100%;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: ${({ $reslut }) => ($reslut === "대기" ? "#D0D5DD" : "#FF6330")};
`;
