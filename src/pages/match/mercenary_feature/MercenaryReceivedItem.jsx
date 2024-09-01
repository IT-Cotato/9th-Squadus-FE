import React from 'react';
import styled from 'styled-components';
import MercenaryArticleCard from './MercenaryArticleCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MercenaryReceivedItem = ({ clubMemberId, title, location, category, date, placeOffer, img, clubName, tierNeed, maxCount, currentCount, content, receivedRequests}) => {
  // 요청 받은 개인의 정보를 personData로 변환
  const personData = receivedRequests.map((request) => ({
    id: request.requestId,
    requestId: request.requestId,
    personName: request.requestName,
    memberId: request.memberId,
    university: request.requesterUniversity,
    matchingStatus: request.matchingStatus
  }));
  
  return (
    <Container>
      <MercenaryArticleCard
        title={title}
        location={location}
        category={category}
        date={date}
        placeOffer={placeOffer}
        img={img}
        clubName={clubName}
        tierNeed={tierNeed}
        maxCount={maxCount}
        currentCount={currentCount}
        content={content}
        showRequestButton={false}
        showPersonContainer={true}
        personData={personData}
        clubMemberId={clubMemberId}
      />
    </Container>
  );
}

export default MercenaryReceivedItem;
