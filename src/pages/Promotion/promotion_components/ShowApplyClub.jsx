import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PromotionItem from "./PromotionItem";
import api from "../../../apis/utils/api";

const ShowApplyClub = () => {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const getUserJoined = async () => {
    try {
      const res = await api.get(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/members/applications`,
        {
          headers: {
            "Content-Type": "application/json",
            access: localStorage.getItem("accessToken"),
          },
        }
      );
      console.log("가입한 동아리", res.data);
      setData(res.data.memberClubApplicationInfoResponseList);
      setDataLength(res.data.totalApplicationCount);
    } catch (err) {
      console.error("가입한 동아리 확인 api 에러:", err);
    }
  };

  useEffect(() => {
    getUserJoined();
  }, []);

  const textTranslation = (status) => {
    console.log(status);
    if (status === "PENDING") return "대기";
    else if (status === "APPROVED") return "승인";
    else return "반려";
  };

  return (
    <Container>
      <HowMany>
        총&nbsp; <HowManyHighlight>{dataLength}건</HowManyHighlight>의 보낸 신청
      </HowMany>
      {data.map((item) => (
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
          />
          <ResultBox $reslut={item.applicationStatus}>
            {textTranslation(item.applicationStatus)}
          </ResultBox>
        </ItemWrapper>
      ))}
    </Container>
  );
};

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
  height: 160px;
  display: flex;
  gap: 8px;
`;
const ResultBox = styled.div`
  flex-shrink: 0;
  width: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: ${({ $reslut }) => ($reslut === "PENDING" ? "#D0D5DD" : "#FF6330")};
`;
