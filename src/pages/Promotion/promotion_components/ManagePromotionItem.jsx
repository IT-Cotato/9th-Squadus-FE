import styled from "styled-components";

import React, { useEffect, useState } from "react";
import { ReactComponent as BronzeIcon } from "../../../assets/icons/group/bronze.svg";
import { ReactComponent as SilverIcon } from "../../../assets/icons/group/silver.svg";
import { ReactComponent as GoldIcon } from "../../../assets/icons/group/gold.svg";
import { ReactComponent as BackGroundIcon } from "../../../assets/icons/promotion-bg-image.svg";
import { ReactComponent as NextIcon } from "../../../assets/icons/promotion/next.svg";
import axios from "axios";
import ApplicationFormModal from "./ApplicationFormModal";

const ManagePromotionItem = ({
  startDate,
  endDate,
  title,
  region,
  sportsCategory,
  clubTier,
  tags,
  clubId,
  clubName,
  deactivate,
  recruitingPostId,
}) => {
  const [applicationForm, setApplicationForm] = useState([]);
  //홍보글에 지원한 지원자 조회
  const getPromotion = (clubId, recruitingPostId) => {
    console.log(
      "getPromotion 진입후 clubid와 postId",
      clubId,
      recruitingPostId
    );
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubId}/admin/applications/${recruitingPostId}`,
        {
          headers: {
            "Content-Type": "application/json",
            access: `${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(
          "동아리 가입 신청 내역 response.data.clubApplicationInfoResponseList",
          response.data.clubApplicationInfoResponseList
        );
        setApplicationForm(response.data.clubApplicationInfoResponseList);
      })
      .catch((error) => {
        console.error("동아리 가입 신청 내역 오류", error);
        throw error;
      });
  };
  useEffect(() => {
    getPromotion(clubId, recruitingPostId);
  }, [clubId, recruitingPostId]);

  useEffect(() => {
    console.error("왜 컴포넌트 안생김?", applicationForm);
  }, [applicationForm]);

  const tierTranslations = {
    BRONZE: "브론즈",
    SILVER: "실버",
    GOLD: "골드",
  };

  const tierText = tierTranslations[clubTier];

  const tmpData = {
    applicationId: 0,
    recruitingPostId: 0,
    memberClubApplicationInfo: {
      memberIdx: 0,
      username: "김도현",
      university: "충북대학교",
    },
  };
  return (
    <Container>
      <BackGroundIconStyled />
      <ContentWrapper>
        <RecruitmentWrapper>
          <RecruitmentTag>모집중</RecruitmentTag>
          <RecruitmentDate>
            {startDate}~{endDate}
          </RecruitmentDate>
        </RecruitmentWrapper>
        <NoticeTitleWrapper>
          <NoticeTitle>{title}</NoticeTitle>
          <NoticeTagWrapper>
            <NoticeTag>{region.city}</NoticeTag>
            <NoticeTag>{region.district}</NoticeTag>
            <NoticeTag>·</NoticeTag>
            <NoticeTag>{sportsCategory}</NoticeTag>
          </NoticeTagWrapper>
        </NoticeTitleWrapper>
        <CommentWrapper>
          <TierWrapper>
            {tierText === "브론즈" && <BRONZEIcon />}
            {tierText === "실버" && <SILVERIcon />}
            {tierText === "골드" && <GOLDIcon />}
            <Tiertag>{tierText}</Tiertag>
          </TierWrapper>
          {tags.map((tag) => (
            <CommentTag>{tag}</CommentTag>
          ))}
        </CommentWrapper>
      </ContentWrapper>
      <DeadlineButton>모집 마감하기</DeadlineButton>
      <RecruitmentList>
        {applicationForm.map((item) => (
          <RecruitmentItem
            key={item.applicationId}
            item={item}
            clubId={clubId}
          />
        ))}

        {/* <RecruitmentItem item={tmpData} clubId={clubId} /> */}
      </RecruitmentList>
    </Container>
  );
};

export default ManagePromotionItem;

const RecruitmentItem = ({ item, clubId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <RecruitmentItemContainer>
      <ItemInfo>
        <ItemName>{item.memberClubApplicationInfo.username}</ItemName>
        <ItemSchool>{item.memberClubApplicationInfo.university}</ItemSchool>
      </ItemInfo>

      <NextButton
        onClick={() => {
          setIsOpen(true);
        }}
      >
        지원서 검토
        <NextIcon />
      </NextButton>
      {isOpen && (
        <ApplicationFormModal
          item={item}
          isOpen={isOpen}
          closeModal={closeModal}
          clubId={clubId}
        ></ApplicationFormModal>
      )}
    </RecruitmentItemContainer>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
  gap: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px #555ba03b;
  position: relative;
`;
const BackGroundIconStyled = styled(BackGroundIcon)`
  position: absolute;
  right: 0;
  top: 0;
`;
const ContentWrapper = styled.div`
  width: 329px;
  height: 118px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 100%;
`;

const RecruitmentWrapper = styled.div`
  width: 329px;
  height: 25px;
  gap: 8px;
  display: flex;
  align-items: center;
`;
const RecruitmentDate = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #98a2b3;
`;
const RecruitmentTag = styled.div`
  width: 53px;
  height: 25px;
  padding: 2px 8px;
  gap: 10px;
  display: flex;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #ff6330;
  background: #fff3ec;
`;

const NoticeTitleWrapper = styled.div`
  width: 329px;
  height: 48px;
  padding: 0px 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
`;
const NoticeTitle = styled.div`
  font-size: 19px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: #101828;
`;
const NoticeTagWrapper = styled.div`
  height: 22px;
  gap: 8px;
  display: flex;
`;
const NoticeTag = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
  color: #ff6330;
`;

const CommentWrapper = styled.div`
  width: 329px;
  height: 25px;
  gap: 4px;
  display: flex;
`;
const CommentTag = styled.div`
  height: 25px;
  padding: 2px 6px;
  display: flex;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #667085;
  background: #f9fafb;
`;
const BRONZEIcon = styled(BronzeIcon)`
  width: 24px;
  height: 24px;
`;
const SILVERIcon = styled(SilverIcon)`
  width: 24px;
  height: 24px;
`;
const GOLDIcon = styled(GoldIcon)`
  width: 24px;
  height: 24px;
`;
const Tiertag = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #667085;
`;
const TierWrapper = styled.div`
  height: 25px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

//모집내역
const NextButton = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #475467;
`;
const RecruitmentItemContainer = styled.div`
  height: 66px;
  padding: 16px 0px;
  gap: 8px;
  border-bottom: 1px solid #f2f4f7;
  display: flex;
  justify-content: space-between;
`;
const ItemInfo = styled.div`
  height: 34px;
  padding: 0px 8px;
  gap: 4px;
  display: flex;
  flex-direction: column;
`;
const ItemName = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: #101828;
`;
const ItemSchool = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  color: #667085;
`;
const DeadlineButton = styled.div`
  width: 100%;
  height: 34px;
  padding: 12px 8px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  color: #ff6330;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RecruitmentList = styled.div`
  padding: 0px 8px 8px 8px;
  border-top: 1px solid #f2f4f7;
`;

//지원서 검토
