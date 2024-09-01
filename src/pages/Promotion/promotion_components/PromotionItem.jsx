import { useEffect, useState } from "react";
import styled from "styled-components";
import ClubApply from "../ClubApply";
import { ReactComponent as BronzeIcon } from "../../../assets/icons/group/bronze.svg";
import { ReactComponent as SilverIcon } from "../../../assets/icons/group/silver.svg";
import { ReactComponent as GoldIcon } from "../../../assets/icons/group/gold.svg";
import { ReactComponent as BackGroundIcon } from "../../../assets/icons/promotion-bg-image.svg";

const PromotionItem = ({
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
  const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };
  const tierTranslations = {
    BRONZE: "브론즈",
    SILVER: "실버",
    GOLD: "골드",
  };
  useEffect(() => {
    console.log(
      "item에서 받아오는 props들\n",
      "\ntitle임:",
      title,
      "\nregion임:",
      region,
      "\nsportsCategory임:",
      sportsCategory,
      "\nclubTier임:",
      clubTier,
      "\ntags임:",
      tags,
      "\nclubId임:",
      clubId,
      "\nclubName임:",
      clubName,
      "\ndeactivate임:",
      deactivate,
      "\nrecruitingPostId임:",
      recruitingPostId
    );
  }, []);
  const tierText = tierTranslations[clubTier];
  return (
    <>
      <Container
        $deactivate={deactivate}
        onClick={() => setExpanded(!expanded)}
      >
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
        <ButtonWrapper $expanded={expanded ? "ture" : undefined}>
          <Button>상세보기</Button>
          <Button onClick={openModal}>지원하기</Button>
        </ButtonWrapper>
      </Container>
      <ClubApply
        isOpen={isModalOpen}
        closeModal={closeModal}
        clubId={clubId}
        clubName={clubName}
        sportsCategory={sportsCategory}
        recruitingPostId={recruitingPostId}
      />
    </>
  );
};

export default PromotionItem;

const Container = styled.div`
  width: 0;
  padding: 16px;
  gap: 10px;
  flex: 1;
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
  gap: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 100%;
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
  background: #fff3ec;
`;

const NoticeTitleWrapper = styled.div`
  width: 329px;
  height: 48px;
  padding: 0px 8px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
