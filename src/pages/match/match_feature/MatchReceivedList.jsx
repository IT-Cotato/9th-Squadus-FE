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
        setMatchReceivedData(data.matchRequestAndMatchPostResponses || []);
      } catch (error) {
        console.error('매치 신청받은 내역 불러오는 중 오류', error);
      }
    };

    fetchMatchReceiveds();
  }, [selectedGroup]);


  // const MatchReceivedData = [
  //   {
  //     "matchCreateResponse": {
  //       "matchIdx": 0,
  //       "title": "string",
  //       "content": "string",
  //       "tier": "string",
  //       "matchPlace": {
  //         "city": "string",
  //         "district": "string"
  //       },
  //       "placeProvided": true,
  //       "matchStartDate": "2024-08-22",
  //       "matchStartTime": "10:00",
  //       "maxParticipants": 0,
  //       "sportsCategory": "string",
  //       "clubName": "string",
  //       "clubLogo": "string"
  //     },
  //     "receivedRequests": [
  //       {
  //         "matchingStatus": "string",
  //         "requestId": 0,
  //         "requesterClubName": "string",
  //         "requesterUniversity": "string",
  //         "requesterTier": "string"
  //       }
  //     ]
  //   }
  // ]

  return (
    <Container>
      {matchReceivedData.map(matchReceived => (
        <MatchReceivedItem 
          key={matchReceived.matchRequestIdx}
          title={matchReceived.matchCreateResponse.title}
          content={matchReceived.matchCreateResponse.content}
          location={`${matchReceived.matchCreateResponse.matchPlace.city} ${matchReceived.matchCreateResponse.matchPlace.district}`}
          date={formatDateAndTime(matchReceived.matchCreateResponse.matchStartDate, matchReceived.matchCreateResponse.matchStartTime)}
          placeOffer={matchReceived.matchCreateResponse.placeProvided ? 'O' : 'X'}
          img={matchReceived.matchCreateResponse.clubLogo}
          clubName={matchReceived.matchCreateResponse.clubName}
          tierNeed={matchReceived.matchCreateResponse.tier}
          peopleCount={matchReceived.matchCreateResponse.maxParticipants}
          receivedRequests={matchReceived.receivedRequests}
        />
      ))}
    </Container>



  );
}

export default MatchReceivedList;
