import React from 'react';
import styled from 'styled-components';
import MercenaryReceivedItem from './MercenaryReceivedItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MercenaryReceivedList = () => {
  const MercenaryReceivedData = [
    { 
      id: "1", 
      title: "매치 구합니다!!", 
      location: "서울 강남",
      date: "2024.07.30", 
      placeOffer: "O", 
      img: "", 
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
      maxCount: "10", 
      currentCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
    },
  ]

  return (
    <Container>
      {MercenaryReceivedData.map(mercenaryReceived => (
        <MercenaryReceivedItem 
          key={mercenaryReceived.id}
          title={mercenaryReceived.title}
          location={mercenaryReceived.location}
          date={mercenaryReceived.date}
          placeOffer={mercenaryReceived.placeOffer}
          img={mercenaryReceived.img}
          maxCount={mercenaryReceived.maxCount}
          currentCount={mercenaryReceived.currentCount}
          content={mercenaryReceived.content}
        />
      ))}
    </Container>
  );
}

export default MercenaryReceivedList;
