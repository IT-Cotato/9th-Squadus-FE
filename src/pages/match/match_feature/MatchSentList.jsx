import React from 'react';
import styled from 'styled-components';
import MatchSentItem from './MatchSentItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MatchSentList = () => {
  const MatchSentData = [
    { 
      id: "1", 
      title: "매치 구합니다!!", 
      location: "서울 강남",
      date: "2024.07.30", 
      placeOffer: "O", 
      img: "", 
      clubName: "코테이토1",
      tierNeed: "silver", 
      peopleCount: "2",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
      status: "승낙"
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
      peopleCount: "222",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
      status: "대기"
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
      peopleCount: "33",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
      status: "거절"
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
      peopleCount: "20",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
      status: "대기"
    },
  ]

  return (
    <Container>
      {MatchSentData.map(matchSent => (
        <MatchSentItem 
          key={matchSent.id}
          title={matchSent.title}
          location={matchSent.location}
          date={matchSent.date}
          placeOffer={matchSent.placeOffer}
          img={matchSent.img}
          clubName={matchSent.clubName}
          tierNeed={matchSent.tierNeed}
          peopleCount={matchSent.peopleCount}
          content={matchSent.content}
          status={matchSent.status}
        />
      ))}
    </Container>
  );
}

export default MatchSentList;
