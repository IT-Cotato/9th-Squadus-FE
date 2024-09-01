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


const MercenaryReceivedList = ({ selectedGroup, clubMemberId }) => {
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
          clubMemberId={clubMemberId}
        />
      ))}
    </Container>
  );
}

export default MercenaryReceivedList;
