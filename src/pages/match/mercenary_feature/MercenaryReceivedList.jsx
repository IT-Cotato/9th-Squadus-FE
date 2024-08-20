import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MercenaryReceivedItem from './MercenaryReceivedItem';
import { getMercenaryReceiveds } from '../../../apis/api/mercenary';

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


const MercenaryReceivedList = ({ selectedGroup }) => {
  const [mercenaryReceivedData, setMercenaryReceivedData] = useState([]);

  useEffect(() => {
    const fetchMercenaryReceiveds = async () => {
      if (!selectedGroup) return;

      try {
        const accessToken = localStorage.getItem('accessToken');
        const data = await getMercenaryReceiveds(accessToken, selectedGroup.clubId);
        setMercenaryReceivedData(data.responses || []);
      } catch (error) {
        console.error('매치 신청받은 내역 불러오는 중 오류', error);
      }
    };

    fetchMercenaryReceiveds();
  }, [selectedGroup]);

  // const MercenaryReceivedData = [
  //   { 
  //     id: "1", 
  //     title: "매치 구합니다!!", 
  //     location: "서울 강남",
  //     date: "2024.07.30", 
  //     placeOffer: "O", 
  //     img: "", 
  //     maxCount: "8", 
  //     currentCount: "7",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //   },
  //   { 
  //     id: "2", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     maxCount: "10", 
  //     currentCount: "5",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //   },
  //   { 
  //     id: "3", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     maxCount: "10", 
  //     currentCount: "5",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //   },
  //   { 
  //     id: "4", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     maxCount: "10", 
  //     currentCount: "5",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //   },
  // ]

  return (
    <Container>
      {mercenaryReceivedData.map(mercenaryReceived => (
        <MercenaryReceivedItem 
          key={mercenaryReceived.mercenaryCreateResponse.mercenaryIdx}
          title={mercenaryReceived.mercenaryCreateResponse.title}
          location={`${mercenaryReceived.mercenaryCreateResponse.matchPlace.city} ${mercenaryReceived.mercenaryCreateResponse.matchPlace.district}`}
          date={formatDateAndTime(mercenaryReceived.mercenaryCreateResponse.matchStartDate, mercenaryReceived.mercenaryCreateResponse.matchStartTime)}
          placeOffer={mercenaryReceived.mercenaryCreateResponse.placeProvided}
          img=""          // TODO: 채워주기
          clubName="서울스키점프팀" // TODO: 채워주기
          maxCount={mercenaryReceived.mercenaryCreateResponse.maxParticipants}
          currentCount={mercenaryReceived.mercenaryCreateResponse.currentParticipants}
          content={mercenaryReceived.mercenaryCreateResponse.content}
        />
      ))}
    </Container>
  );
}

export default MercenaryReceivedList;
