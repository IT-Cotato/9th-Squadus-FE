import React, { useState } from 'react';
import styled from 'styled-components';
import MercenaryArticleCard from './MercenaryArticleCard';
import MercenaryPersonItem from './MercenaryPersonItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MercenaryReceivedItem = ({ title, location, date, placeOffer, img, tierNeed, maxCount, currentCount, content}) => {
  const PersonData = [
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
  
  const [showRequests, setShowRequests] = useState(false);

  const toggleButtonContainer = () => {
    setShowRequests(prevShowButtons => !prevShowButtons);
  };

  return (
    <Container onClick={toggleButtonContainer}>
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
      />
      {showRequests && (
        PersonData.map(person => (
          <MercenaryPersonItem 
            key={person.id}
            personName={person.personName}
            university={person.university}
          />
        ))
      )}

    </Container>
  );
}

export default MercenaryReceivedItem;
