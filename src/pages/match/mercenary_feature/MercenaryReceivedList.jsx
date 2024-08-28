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

  // const mercenaryReceivedData = [
  //   {
  //     "mercenaryCreateResponse": {
  //       "mercenaryIdx": 0,
  //       "title": "string",
  //       "content": "string",
  //       "matchPlace": {
  //         "city": "string",
  //         "district": "string"
  //       },
  //       "placeProvided": true,
  //       "matchStartDate": "2024-08-22",
  //       "matchStartTime": "10:00",
  //       "maxParticipants": 0,
  //       "currentParticipants": 0,
  //       "sportsCategory": "string",
  //       "clubName": "string",
  //       "clubLogo": "string"
  //     },
  //     "receivedRequests": [
  //       {
  //         "matchingStatus": "string",
  //         "requestId": 0,
  //         "clubMemberId": 0,
  //         "requestName": "string",
  //         "requesterUniversity": "string"
  //       }
  //     ]
  //   }
  // ]

  return (
    <Container>
      {mercenaryReceivedData.map(mercenaryReceived => (
        <MercenaryReceivedItem 
          key={mercenaryReceived.mercenaryCreateResponse.mercenaryIdx}
          title={mercenaryReceived.mercenaryCreateResponse.title}
          location={`${mercenaryReceived.mercenaryCreateResponse.matchPlace.city} ${mercenaryReceived.mercenaryCreateResponse.matchPlace.district}`}
          category={mercenaryReceived.mercenaryCreateResponse.sportsCategory}
          date={formatDateAndTime(mercenaryReceived.mercenaryCreateResponse.matchStartDate, mercenaryReceived.mercenaryCreateResponse.matchStartTime)}
          placeOffer={mercenaryReceived.mercenaryCreateResponse.placeProvided ? 'O' : 'X'}
          img={mercenaryReceived.mercenaryCreateResponse.clubLogo}
          clubName={mercenaryReceived.mercenaryCreateResponse.clubName}
          maxCount={mercenaryReceived.mercenaryCreateResponse.maxParticipants}
          currentCount={mercenaryReceived.mercenaryCreateResponse.currentParticipants}
          content={mercenaryReceived.mercenaryCreateResponse.content}
          receivedRequests={mercenaryReceived.receivedRequests}
        />
      ))}
    </Container>
  );
}

export default MercenaryReceivedList;
