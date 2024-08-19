import React from 'react';
import styled from 'styled-components';
import MercenaryArticleCard from './MercenaryArticleCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MercenaryReceivedItem = ({ title, location, date, placeOffer, img, tierNeed, maxCount, currentCount, content}) => {
  const personData = [
    { 
      id: "1", 
      personName: "이다인", 
      university: "성신여자대학교",
    },
    { 
      id: "2", 
      personName: "카리나", 
      university: "서울대학교",
    }
  ]
  
  return (
    <Container>
      <MercenaryArticleCard
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
        showPersonContainer={true}
        personData={personData}
      />
    </Container>
  );
}

export default MercenaryReceivedItem;
