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
      clubName: "코테이토1",
      tierNeed: "silver", 
      peopleCount: "100",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
    },
    { 
      id: "2", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      clubName: "코테이토2",
      tierNeed: "silver", 
      peopleCount: "200",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
    },
    { 
      id: "3", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      clubName: "코테이토3",
      tierNeed: "silver", 
      peopleCount: "21",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
    },
    { 
      id: "4", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      clubName: "코테이토4",
      tierNeed: "silver", 
      peopleCount: "22",
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
          clubName={matchReceived.clubName}
          tierNeed={matchReceived.tierNeed}
          peopleCount={matchReceived.peopleCount}
          content={matchReceived.content}
        />
      ))}
    </Container>
  );
}

export default MatchReceivedList;
