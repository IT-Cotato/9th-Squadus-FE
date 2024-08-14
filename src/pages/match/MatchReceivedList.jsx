import React from 'react';
import styled from 'styled-components';
import MatchReceivedItem from './MatchReceivedItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MatchReceivedList = () => {
  const MatchReceivedData = [
    { 
      id: "1", 
      title: "매치 구합니다!!", 
      location: "서울 강남",
      date: "2024.07.30", 
      placeOffer: "O", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "8", 
      currentCount: "7",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
    },
    { 
      id: "2", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "10", 
      currentCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
    },
    { 
      id: "3", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "10", 
      currentCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
    },
    { 
      id: "4", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "10", 
      currentCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
    },
  ]

  return (
    <Container>
      {MatchReceivedData.map(matchReceived => (
        <MatchReceivedItem 
          key={matchReceived.id}
          title={matchReceived.title}
          location={matchReceived.location}
          date={matchReceived.date}
          placeOffer={matchReceived.placeOffer}
          img={matchReceived.img}
          tierNeed={matchReceived.tierNeed}
          maxCount={matchReceived.maxCount}
          currentCount={matchReceived.currentCount}
          content={matchReceived.content}
        />
      ))}
    </Container>
  );
}

export default MatchReceivedList;
