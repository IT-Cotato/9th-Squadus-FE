import React, { useState } from 'react';
import styled from 'styled-components';
import arrow_up_icon from '../../../assets/icons/arrow-up-white.svg';
import MatchClubItem from './MatchClubItem'; 

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

const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
`

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

const MatchArticleCard = ({ title, location, date, placeOffer, img, clubName, tierNeed, peopleCount, content, requestButtonLabel, showRequestButton = true, showClubContainer = false, clubData }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <WrapperContainer onClick={() => setExpanded(!expanded)}>
      <MainContainer>
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
          <ClubContainer>
            <Image></Image>
            {clubName}
          </ClubContainer>
          <StatusContainer>
            {tierNeed} 이상 · {peopleCount}명
          </StatusContainer>
        </DetailContainer>
        <ContentContainer $expanded={expanded ? "true" : undefined}>{content}</ContentContainer>
        <RequestButton $expanded={expanded ? "true" : undefined} $show={showRequestButton ? "true" : undefined}>
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
    </WrapperContainer>
  );
}

export default MatchArticleCard;
