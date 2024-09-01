import React, { useContext, useEffect, useState } from "react";
import { PromotionContext } from "../Promotion";
import styled from "styled-components";
import ManagePromotionItem from "./ManagePromotionItem";
import { getAdminClubs } from "../../../apis/api/user";
const ShowRecruitmentClub = () => {
  const data = useContext(PromotionContext);
  const [clubIdList, setClubIdList] = useState([]);
  const [recruit, setRecruit] = useState([]);

  //내가 속한 동아리 + 내가 어드민인 동아리
  useEffect(() => {
    const fetchAdminClubs = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const clubs = await getAdminClubs(accessToken);
        setClubIdList(clubs);
      } catch (error) {
        console.error(
          "관리자로 속한 동아리를 가져오는 중 오류가 발생했습니다:",
          error
        );
      }
    };
    fetchAdminClubs();
  }, []);

  //홍보글 중 내가 어드민인 동아리 filter 후 recruit에 저장
  useEffect(() => {
    if (clubIdList.length === 0 || data.length === 0) return;
    console.log("내가 속한 동아리 중 admin인 동아리:", clubIdList);
    console.log("모집내역에서 받는 context", data);
    const clubIdSet = new Set(clubIdList.map((club) => club.clubId));
    const filterData = data.filter((item) => clubIdSet.has(item.clubId));
    setRecruit(filterData);
  }, [clubIdList, data]);

  useEffect(() => {
    console.log("내가 관리하는 모집내역", recruit);
  }, [recruit]);
  return (
    <Container>
      <HowMany>
        총&nbsp; <HowManyHighlight>{recruit.length}건</HowManyHighlight>의 보낸
        신청
      </HowMany>

      {recruit.map((item) => (
        <ManagePromotionItem
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
      ))}
    </Container>
  );
};

export default ShowRecruitmentClub;

const Container = styled.div`
  width: 100%;
  padding: 0px 8px;
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
