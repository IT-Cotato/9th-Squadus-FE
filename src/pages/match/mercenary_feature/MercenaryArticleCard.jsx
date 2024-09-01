import React, { useState } from 'react';
import styled from 'styled-components';
import arrow_up_icon from '../../../assets/icons/arrow-up-white.svg';
import MercenaryPersonItem from './MercenaryPersonItem';
import MercenarySendSuccessModal from './MercenarySendSuccessModal';
import MercenarySendFailModal from './MercenarySendFailModal';
import { postMercenaryRequest } from '../../../apis/api/mercenary';

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
  flex-direction: column;
  gap: 8px;
`;

const SegmentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
`;

const CountContainer = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  position: relative;
`;

const CurrentBarContainer = styled.div`
  width: ${({ $currentCount, $maxCount }) => ($currentCount / $maxCount) * 100}%;
  height: 100%;
  background-color: white;
  border-radius: 2px;
`;

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
`;

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

const MercenaryArticleCard = ({ clubMemberId, mercenaryIdx, title, location, category, date, placeOffer, img, clubName, clubIdx, maxCount, currentCount, content, requestButtonLabel, userClubs, showRequestButton = true, showPersonContainer = false, personData }) => {
  const [expanded, setExpanded] = useState(false);
  const [showMercenarySendSuccessModal, setShowMercenarySendSuccessModal] = useState(false);
  const [showMercenarySendFailModal, setShowMercenarySendFailModal] = useState(false);

  // 사용자가 요청을 보낼 수 있는지 여부 확인
  const canSendRequest = !userClubs?.some(club => club.clubId === clubIdx);

  const handleRequestButtonClick = async (event) => {
    event.stopPropagation();

    try {
      const accessToken = localStorage.getItem('accessToken');
      await postMercenaryRequest(accessToken, mercenaryIdx);
      setShowMercenarySendSuccessModal(true);
    } catch (error) {
      if (error.response && error.response.data.code === 'M-302') {
        console.log("이미 용병 요청을 보냄")
        setShowMercenarySendFailModal(true);
      }
    }
  };

  const handleSendSuccessModalClose = () => {
    setShowMercenarySendSuccessModal(false);
  };

  const handleSendFailModalClose = () => {
    setShowMercenarySendFailModal(false);
  }


  const mercenaryClubData = {
    mercenaryIdx: mercenaryIdx,
    matchClubName: clubName,
    matchDate: date,
  };

  return (
    <WrapperContainer>
      <MainContainer  onClick={() => setExpanded(!expanded)}>
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
              <CountContainer>{currentCount}/{maxCount}</CountContainer>
            </SegmentContainer>
            <BarContainer>
              <CurrentBarContainer $currentCount={currentCount} $maxCount={maxCount} />
            </BarContainer>
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
            $expanded={expanded ? "true" : undefined}
            $show={showRequestButton ? "true" : undefined}
            onClick={handleRequestButtonClick}
            >
            {requestButtonLabel}
          </RequestButton>
        )}
      </MainContainer>
      {showPersonContainer && 
        <BottomContainer $expanded={expanded ? "true" : undefined}>
          {personData && personData.length > 0 ? (
            personData.map(person => (
              <MercenaryPersonItem
                key={person.id}
                requestId={person.requestId}
                personName={person.personName}
                university={person.university}
                memberId={person.memberId}
                matchingStatus={person.matchingStatus}
                clubMemberId={clubMemberId}
              />
            ))
          ) : (
            <EmptyStateMessage>아직 신청한 사람이 없습니다</EmptyStateMessage>
          )} 
        </BottomContainer>
      }

      {showMercenarySendSuccessModal && <MercenarySendSuccessModal onClose={handleSendSuccessModalClose} />}
      {showMercenarySendFailModal && <MercenarySendFailModal onClose={handleSendFailModalClose} />}

    </WrapperContainer>
    
  );
}

export default MercenaryArticleCard;
