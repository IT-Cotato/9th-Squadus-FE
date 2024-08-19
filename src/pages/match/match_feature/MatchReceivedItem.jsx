import React from 'react';
import styled from 'styled-components';
import MatchArticleCard from './MatchArticleCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MatchReceivedItem = ({ title, location, date, placeOffer, img, clubName, tierNeed, peopleCount, content}) => {
  const clubData = [
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
  
  return (
    <Container>
      <MatchArticleCard
        title={title}
        location={location}
        date={date}
        placeOffer={placeOffer}
        img={img}
        clubName={clubName}
        tierNeed={tierNeed}
        peopleCount={peopleCount}
        content={content}
        showRequestButton={false}
        showClubContainer={true}
        clubData={clubData}
      />
    </Container>
  );
}

export default MatchReceivedItem;
