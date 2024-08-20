import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MatchReceivedItem from './MatchReceivedItem';
import { getMatchReceiveds } from '../../../apis/api/match';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const formatDateAndTime = (date, time) => {
  if (!date || !time) {
    return '날짜 정보 없음';
  }

  const [hour, minute] = time.split(':');
  const [year, month, day] = date.split('-');
  const formattedDate = `${month}월 ${day}일`;
  const formattedTime = `${hour}:${minute}`;

  return `${formattedDate} ${formattedTime}`;
};



const MatchReceivedList = ({ selectedGroup }) => {
  const [matchReceivedData, setMatchReceivedData] = useState([]);

  useEffect(() => {
    const fetchMatchReceiveds = async () => {
      if (!selectedGroup) return;

      try {
        const accessToken = localStorage.getItem('accessToken');
        const data = await getMatchReceiveds(accessToken, selectedGroup.clubId);
        setMatchReceivedData(data.matches || []);
      } catch (error) {
        console.error('매치 신청받은 내역 불러오는 중 오류', error);
      }
    };

    fetchMatchReceiveds();
  }, [selectedGroup]);

  // const MatchReceivedData = [
  //   { 
  //     id: "1", 
  //     title: "매치 구합니다!!", 
  //     location: "서울 강남",
  //     date: "2024.07.30", 
  //     placeOffer: "O", 
  //     img: "", 
  //     clubName: "코테이토1",
  //     tierNeed: "silver", 
  //     peopleCount: "100",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //   },
  //   { 
  //     id: "2", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "코테이토2",
  //     tierNeed: "silver", 
  //     peopleCount: "200",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //   },
  //   { 
  //     id: "3", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "코테이토3",
  //     tierNeed: "silver", 
  //     peopleCount: "21",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //   },
  //   { 
  //     id: "4", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "코테이토4",
  //     tierNeed: "silver", 
  //     peopleCount: "22",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //   },
  // ]

  return (
    <Container>
      {matchReceivedData.map(matchReceived => (
        <MatchReceivedItem 
          key={matchReceived.matchRequestIdx}
          title={matchReceived.matchReceived.matchCreateResponse.title}
          content={matchReceived.matchCreateResponse.content}
          location={`${matchReceived.matchCreateResponse.matchPlace.city} ${matchReceived.matchCreateResponse.matchPlace.district}`}
          date={formatDateAndTime(matchReceived.matchCreateResponse.matchStartDate, matchReceived.matchCreateResponse.matchStartTime)}
          placeOffer={matchReceived.matchCreateResponse.placeProvided ? 'O' : 'X'}
          img=""            // TODO: 채워주기
          clubName="포테이토칩" // TODO: 채워주기
          tierNeed={matchReceived.matchCreateResponse.tier}
          peopleCount={matchReceived.matchCreateResponse.maxParticipants}
        />
      ))}
    </Container>



  );
}

export default MatchReceivedList;
