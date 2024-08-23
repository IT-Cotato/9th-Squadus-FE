import React, { useContext, useEffect } from "react";
import { PromotionContext } from "../Promotion";
import axios from "axios";
import styled from "styled-components";
const ShowRecruitmentClub = () => {
  const data = useContext(PromotionContext);
  const accessToken = localStorage.getItem("accessToken");
  const getPromotion = (clubId, postId) => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubId}/admin/applications/${postId}`,
        {
          headers: {
            "Content-Type": "application/json",
            access: `${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log("동아리 가입 신청 내역 response.data", response.data);
      })
      .catch((error) => {
        console.error("동아리 가입 신청 내역 오류", error);
        throw error;
      });
  };
  useEffect(() => {
    console.log(data);
    data.map((promotion) =>
      getPromotion(promotion.clubId, promotion.recruitingPostId)
    );
  }, []);
  return (
    <Container>
      <HowMany>
        총&nbsp; <HowManyHighlight>{" 건"}</HowManyHighlight>의 보낸 신청
      </HowMany>
    </Container>
  );
};

export default ShowRecruitmentClub;

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
