import React from 'react';
import styled from 'styled-components';
import MatchArticleCard from './MatchArticleCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Result = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
`;


const MatchSentItem = ({ title, location, date, placeOffer, img, clubName, tierNeed, peopleCount, content, status}) => {

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
        requestButtonLabel="요청 취소"
        showRequestButton={true}
      />
      <Result>{status}</Result>
    </Container>
  );
}

export default MatchSentItem;
