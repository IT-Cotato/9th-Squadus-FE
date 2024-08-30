import React from 'react';
import styled from 'styled-components';
import MatchArticleCard from './MatchArticleCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MatchReceivedItem = ({ matchIdx, title, location, date, placeOffer, img, clubIdx, clubName, tierNeed, peopleCount, content, receivedRequests, clubMemberId, isAccepted }) => {
  
  // 요청 처리 후 콜백 함수
  const handleDecision = (requestId, decision) => {
    console.log("requestId: ", requestId);
    console.log("decision: ", decision);
  };
  
  // 요청 받은 동아리의 정보를 clubData로 변환
  const clubData = receivedRequests.map((request) => ({
    id: request.requestId, // 유니크 키로 사용
    clubName: request.requesterClubName,
    university: request.requesterUniversity,
    tier: request.requesterTier,
    requestId: request.requestId, // 요청 ID 추가
    onDecision: handleDecision, // 요청 처리 후 콜백 추가
    clubMemberId: clubMemberId,
    status: request.matchingStatus, 
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
        matchIdx={matchIdx}
        title={title}
        location={location}
        date={date}
        placeOffer={placeOffer}
        img={img}
        clubIdx={clubIdx}
        clubName={clubName}
        tierNeed={tierNeed}
        peopleCount={peopleCount}
        content={content}
        showRequestButton={false}
        showClubContainer={true}
        clubData={clubData}
        clubMemberId={clubMemberId}
        isAccepted={isAccepted}
      />
    </Container>
  );
}

export default MatchReceivedItem;
