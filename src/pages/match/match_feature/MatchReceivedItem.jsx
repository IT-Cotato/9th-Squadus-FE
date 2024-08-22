import React from 'react';
import styled from 'styled-components';
import MatchArticleCard from './MatchArticleCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MatchReceivedItem = ({ title, location, date, placeOffer, img, clubName, tierNeed, peopleCount, content, receivedRequests}) => {
  // 요청 받은 동아리의 정보를 clubData로 변환
  const clubData = receivedRequests.map((request) => ({
    id: request.requestId, // 유니크 키로 사용
    clubName: request.requesterClubName,
    university: request.requesterUniversity,
    tier: request.requesterTier,
  }));
  
  // const clubData = [
  //   { 
  //     id: "1", 
  //     clubName: "코테이토", 
  //     university: "서울대학교",
  //     tier: "SILVER", 
  //   },
  //   { 
  //     id: "2", 
  //     clubName: "성신양궁", 
  //     university: "성신여자대학교",
  //     tier: "SILVER", 
  //   }
  // ]
  
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
