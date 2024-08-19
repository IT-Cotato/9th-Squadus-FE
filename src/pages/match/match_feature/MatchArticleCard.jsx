import React, { useState } from 'react';
import styled from 'styled-components';
import arrow_up_icon from '../../../assets/icons/arrow-up-white.svg';
import MatchClubItem from './MatchClubItem'; 
import MatchSendModal from './MatchSendModal';
import MatchSendCancelModal from './MatchSendCancelModal';
import MatchSendSuccessModal from './MatchSendSuccessModal';

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
  font-size: 20px;
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
`;

const Schedule = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  opacity: 80%;
`

const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ContentContainer = styled.div`
  width: 100%;
  display: ${({ $expanded }) => ($expanded ? 'flex' : 'none')};
  flex-direction: column;
  margin-top: 4px;
  gap: 8px;
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

const MatchArticleCard = ({ title, location, category, date, placeOffer, img, clubName, tierNeed, peopleCount, content, requestButtonLabel, showRequestButton = true, showClubContainer = false, clubData }) => {
  const [expanded, setExpanded] = useState(false);
  const [showMatchSendModal, setShowMatchSendModal] = useState(false);
  const [showMatchSendCancelModal, setShowMatchSendCancelModal] = useState(false);
  const [showMatchSendSuccessModal, setShowMatchSendSuccessModal] = useState(false);


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

  const handleSendModalConfirm = () => {
    handleSendModalClose();
    setShowMatchSendSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowMatchSendSuccessModal(false);
  };

  return (
    <WrapperContainer onClick={() => setExpanded(!expanded)}>
      <MainContainer>
        <MainInfoContainer>
          <div>
            <Title>{title}</Title>
            <SubTitle>{location} · {category}</SubTitle>
          </div>
          <ArrowUpIcon $expanded={expanded ? "true" : undefined} />
        </MainInfoContainer>
        <SubInfoContainer>
          <ClubContainer>
            <Image></Image>
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
        <RequestButton
          $expanded={expanded}
          $show={showRequestButton}
          onClick={handleRequestButtonClick}
        >
          {requestButtonLabel}
        </RequestButton>
      </MainContainer>
      {showClubContainer && 
        <BottomContainer $expanded={expanded ? "true" : undefined}>
          {clubData.map(club => (
            <MatchClubItem 
              key={club.id}
              clubName={club.clubName}
              university={club.university}
              tier={club.tier}
            />
          ))}
        </BottomContainer>
      }

      {showMatchSendModal && <MatchSendModal onClose={handleSendModalClose} onConfirm={handleSendModalConfirm} />}
      {showMatchSendCancelModal && <MatchSendCancelModal onClose={() => setShowMatchSendCancelModal(false)} />}
      {showMatchSendSuccessModal && <MatchSendSuccessModal onClose={handleSuccessModalClose} />}
    </WrapperContainer>
    
  );
}

export default MatchArticleCard;
