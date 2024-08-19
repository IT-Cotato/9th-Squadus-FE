import { useState } from "react";
import styled from "styled-components";
import ClubApply from "../ClubApply";

const PromotionItem = () => {
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };
  return (
    <>
      <Container>
        <ContentWrapper onClick={() => setExpanded(!expanded)}>
          <RecruitmentWrapper>
            <RecruitmentTag>모집중</RecruitmentTag>
            <RecruitmentDate>08.23~09.11</RecruitmentDate>
          </RecruitmentWrapper>
          <NoticeTitleWrapper>
            <NoticeTitle>그린비 2024 여름 동아리원 모집 🐝💚</NoticeTitle>
            <NoticeTagWrapper>
              <NoticeTag>서울강남</NoticeTag>
              <NoticeTag>·</NoticeTag>
              <NoticeTag>테니스</NoticeTag>
            </NoticeTagWrapper>
          </NoticeTitleWrapper>
          <CommentWrapper>
            <CommentTag>브론즈</CommentTag>
            <CommentTag>모두환영</CommentTag>
          </CommentWrapper>
        </ContentWrapper>
        <ButtonWrapper $expanded={expanded ? "ture" : undefined}>
          <Button>상세보기</Button>
          <Button onClick={openModal}>지원하기</Button>
        </ButtonWrapper>
      </Container>
      <ClubApply isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default PromotionItem;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  gap: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 8px 0px #555ba03b;
`;
const ContentWrapper = styled.div`
  width: 329px;
  height: 118px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 38px;
  gap: 12px;
  display: ${({ $expanded }) => ($expanded ? "flex" : "none")};
`;

const Button = styled.button`
  width: 158.5px;
  height: 38px;
  padding: 8px 16px;
  border-radius: 24px;
  outline: none;
  border: 0px;
  color: #fff;
  background: linear-gradient(90deg, #ff6330 0%, #ff3f00 100%);
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
  padding: 2px 8px;
  display: flex;
  gap: 10px;
  border-radius: 5px;

  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: left;
  color: #667085;
`;
