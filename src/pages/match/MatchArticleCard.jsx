import React, { useState } from 'react';
import styled from 'styled-components';
import arrow_up_icon from '../../assets/icons/arrow-up-white.svg'

const Container = styled.div`
  width: 100%; 
  height: auto; 
  padding: 16px;
  background: radial-gradient(300% 300% at -30% 100%, #FF5810 0%, #A88BE4 38%, #3887E3 100%); 
  box-shadow: 0px 1px 6px rgba(42, 36, 112, 0.13); 
  border-radius: 12px; 
  overflow: hidden; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 10px; 
  display: inline-flex;
  color: white;
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

const Location = styled.div`
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
  gap: 12px;
  display: ${({ $expanded }) => ($expanded ? 'flex' : 'none')};
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

const PlaceOffer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

const Label = styled.div`
  font-size: 12px;
  color: white;
  opacity: 80%;
`

const ScheduleContent = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  opacity: 80%;
`

const PlaceOfferContent = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: white;
  opacity: 80%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: black;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  gap: 8px;
`
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TierDescription = styled.div`
  font-size: 12px;
`;

const RecruitmentCount = styled.div`
  font-size: 12px;
`

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
  margin-top: 4px;
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

const MatchArticleCard = ({ title, location, date, placeOffer, img, tierNeed, maxCount, currentCount, content, requestButtonLabel, showRequestButton = true }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container onClick={() => setExpanded(!expanded)}>
      <MainInfoContainer>
        <div>
          <Title>{title}</Title>
          <Location>{location}</Location>
        </div>
        <ArrowUpIcon $expanded={expanded ? "true" : undefined} />
      </MainInfoContainer>
      <SubInfoContainer $expanded={expanded ? "true" : undefined}>
        <Schedule>
          <Label>일시</Label>
          <ScheduleContent>{date}</ScheduleContent>
        </Schedule>
        <PlaceOffer>
          <Label>장소제공 여부</Label>
          <PlaceOfferContent>{placeOffer}</PlaceOfferContent>
        </PlaceOffer>
      </SubInfoContainer>
      <DetailContainer>
        <Image></Image>
        <StatusContainer>
          <DescriptionContainer>
            <TierDescription>{tierNeed} 이상</TierDescription>
            <RecruitmentCount>{currentCount}/{maxCount}</RecruitmentCount>
          </DescriptionContainer>
          <BarContainer>
            <CurrentBarContainer $currentCount={currentCount} $maxCount={maxCount} />
          </BarContainer>
        </StatusContainer>
      </DetailContainer>
      <ContentContainer $expanded={expanded ? "true" : undefined}>{content}</ContentContainer>
      <RequestButton $expanded={expanded ? "true" : undefined} $show={showRequestButton ? "true" : undefined}>
        {requestButtonLabel}
      </RequestButton>
    </Container>
    
  );
}

export default MatchArticleCard;
