import React, { useState } from 'react';
import styled from 'styled-components';
import MatchArticleCard from './MatchArticleCard';
import MatchClubItem from './MatchClubItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MatchReceivedItem = ({ title, location, date, placeOffer, img, tierNeed, maxCount, currentCount, content}) => {
  const ClubData = [
    { 
      id: "1", 
      clubName: "코테이토", 
      university: "서울대학교",
      tier: "SILVER", 
    },
    { 
      id: "2", 
      clubName: "성신양궁", 
      university: "성신여자대학교",
      tier: "SILVER", 
    }
  ]
  
  const [showRequests, setShowRequests] = useState(false);

  const toggleButtonContainer = () => {
    setShowRequests(prevShowButtons => !prevShowButtons);
  };

  return (
    <Container onClick={toggleButtonContainer}>
      <MatchArticleCard
        title={title}
        location={location}
        date={date}
        placeOffer={placeOffer}
        img={img}
        tierNeed={tierNeed}
        maxCount={maxCount}
        currentCount={currentCount}
        content={content}
        showRequestButton={false}
      />
      {showRequests && (
        ClubData.map(club => (
          <MatchClubItem 
            key={club.id}
            clubName={club.clubName}
            university={club.university}
            tier={club.tier}
          />
        ))
      )}

    </Container>
  );
}

export default MatchReceivedItem;
