import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrow_up_icon from '../../../assets/icons/arrow-up-white.svg';
import MatchClubItem from './MatchClubItem'; 
import MatchSendModal from './MatchSendModal';
import MatchSendCancelModal from './MatchSendCancelModal';
import MatchSendSuccessModal from './MatchSendSuccessModal';
import MatchSendFailModal from './MatchSendFailModal';
import { getUserClubs, getAdminClubs } from '../../../apis/api/user';

const WrapperContainer = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0px 2px 10px rgba(85, 91, 160, 0.23);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 12px;
`;

const MainContainer = styled.div`
  width: 100%; 
  height: auto; 
  padding: 16px;
  background: radial-gradient(300% 300% at -30% 100%, #FF5810 0%, #A88BE4 38%, #3887E3 100%); 
  overflow: hidden; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 10px; 
  display: inline-flex;
  color: white;
  border-radius: 12px 12px 0 0; 
`;

const BottomContainer = styled.div`
  background-color: white;
  display: ${({ $expanded }) => ($expanded ? 'flex' : 'none')};
  flex-direction: column;
  padding: 4px 16px;
  border-radius: 0 0 12px 12px; 
`;

const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const ArrowUpIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${arrow_up_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transform: ${({ $expanded }) => ($expanded ? 'rotate(0)' : 'rotate(180deg)')};
  transition: transform 0.3s ease;
`;

const SubInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ClubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
`;

const Image = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: black;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
`;

const SegmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
`;

const Schedule = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
`

const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 600;
`

const ContentContainer = styled.div`
  width: 100%;
  display: ${({ $expanded }) => ($expanded ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 4px;
  gap: 8px;
  font-size: 15px;
  line-height: 18px;
`;

const PlaceOffer = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  opacity: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const Label = styled.div`
  font-size: 12px;
  color: white;
  opacity: 80%;
`

const RequestButton = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 24px;
  background-color: white;
  color: ${({ theme }) => theme.colors.main[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  margin-top: 12px;
  display: ${({ $expanded, $show }) => ($expanded && $show ? 'flex' : 'none')};
`;

const EmptyStateMessage = styled.div`
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-weight: 600;
  padding: 20px 12px;
  text-align: center;
`;


const MatchArticleCard = ({ matchIdx, title, location, category, date, placeOffer, img, clubName, clubIdx, tierNeed, peopleCount, content, requestButtonLabel, userClubs, showRequestButton = true, showClubContainer = false, clubData, clubMemberId, isAccepted }) => {
  const [expanded, setExpanded] = useState(false);
  const [showMatchSendModal, setShowMatchSendModal] = useState(false);
  const [showMatchSendCancelModal, setShowMatchSendCancelModal] = useState(false);
  const [showMatchSendSuccessModal, setShowMatchSendSuccessModal] = useState(false);
  const [showMatchSendFailModal, setShowMatchSendFailModal] = useState(false);
  const [failedClub, setFailedClub] = useState(''); // 요청 실패한 동아리 이름 저장할 상태 추가

  // 사용자가 요청을 보낼 수 있는지 여부 확인
  const canSendRequest = userClubs?.some(club => club.clubId !== clubIdx && club.isAdmin);

  const handleRequestButtonClick = (event) => {
    event.stopPropagation();
    if (requestButtonLabel === "요청 보내기") {
      setShowMatchSendModal(true);
    } else if (requestButtonLabel === "요청 취소") {
      setShowMatchSendCancelModal(true);
    }
  };

  const handleSendModalClose = () => {
    setShowMatchSendModal(false);
  };

  const handleSendConfirm = () => {
    handleSendModalClose();
    setShowMatchSendSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowMatchSendSuccessModal(false);
  };

  const handleFailModalClose = () => {
    setShowMatchSendFailModal(false);
  };

  const handleSendFail = (selectedClub) => {
    setFailedClub(selectedClub); // 실패한 동아리 이름을 설정
    handleSendModalClose();
    setShowMatchSendFailModal(true);
  };



  // 매치글 카드의 동아리 정보
  const matchClubData = {
    matchIdx: matchIdx,
    matchClubName: clubName,
    matchDate: date,
    clubIdx: clubIdx  // 매치 글을 올린 동아리의 ID를 포함하여 보낼 예정
  };

  return (
    <WrapperContainer>
      <MainContainer onClick={() => setExpanded(!expanded)}>
        <MainInfoContainer>
          <div>
            <Title>{title}</Title>
            <SubTitle>{location} · {category}</SubTitle>
          </div>
          <ArrowUpIcon $expanded={expanded ? "true" : undefined} />
        </MainInfoContainer>
        <SubInfoContainer>
          <ClubContainer>
            <Image img={img} />
            {clubName}
          </ClubContainer>
          <DetailContainer>
            <SegmentContainer>
              <Schedule>{date}</Schedule>
              {tierNeed} 이상
            </SegmentContainer>
            <CountContainer>
              {peopleCount}명
            </CountContainer>
          </DetailContainer>
        </SubInfoContainer>
        <ContentContainer $expanded={expanded ? "true" : undefined}>
          <PlaceOffer>
            <Label>장소제공 여부</Label>
            {placeOffer}
          </PlaceOffer>
          {content}
        </ContentContainer>
        {canSendRequest && (
          <RequestButton
            $expanded={expanded}
            $show={showRequestButton}
            onClick={handleRequestButtonClick}
          >
            {requestButtonLabel}
          </RequestButton>
        )}
      </MainContainer>
      {showClubContainer && 
        <BottomContainer $expanded={expanded ? "true" : undefined}>
          {clubData && clubData.length > 0 ? (  // clubData가 있는 경우
            clubData.map(club => (   // clubData는 매치를 신청한 동아리 데이터
              <MatchClubItem 
                key={club.id}
                matchIdx={matchIdx}
                clubName={club.clubName}
                university={club.university}
                tier={club.tier}
                requestId={club.requestId}
                clubMemberId={clubMemberId}   // 사용자가 헤더에서 선택한 동아리에서 clubMemberIdx
                onDecision={club.onDecision}
                isAccepted={isAccepted}
                status={club.status}
              />
            ))
          ) : (  // clubData가 없는 경우
            <EmptyStateMessage>아직 신청한 동아리가 없습니다</EmptyStateMessage>
          )}
        </BottomContainer>
      }


      {showMatchSendModal && (
        <MatchSendModal
          onClose={handleSendModalClose}
          onConfirm={handleSendConfirm}
          onFail={handleSendFail}
          matchClubData={matchClubData}
        />
      )}
      {showMatchSendCancelModal && <MatchSendCancelModal onClose={() => setShowMatchSendCancelModal(false)} />}
      {showMatchSendSuccessModal && <MatchSendSuccessModal onClose={handleSuccessModalClose} />}
      {showMatchSendFailModal && <MatchSendFailModal onClose={handleFailModalClose} selectedClub={failedClub} />}
    </WrapperContainer>
    
  );
}

export default MatchArticleCard;
