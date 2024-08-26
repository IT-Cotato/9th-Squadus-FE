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



const MatchReceivedList = ({ selectedGroup, clubMemberId }) => {
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

  return (
    <Container>
      {matchReceivedData.map((matchReceived) => {
        // 각 매치에 대해 'ACCEPTED' 상태가 있는지 확인
        const hasAcceptedRequest = matchReceived.receivedRequests.some(
          (request) => request.matchingStatus === 'ACCEPTED'
        );

        return (
          <MatchReceivedItem 
            key={matchReceived.matchRequestIdx}
            matchIdx={matchReceived.matchCreateResponse.matchIdx}
            title={matchReceived.matchCreateResponse.title}
            content={matchReceived.matchCreateResponse.content}
            location={`${matchReceived.matchCreateResponse.matchPlace.city} ${matchReceived.matchCreateResponse.matchPlace.district}`}
            date={formatDateAndTime(matchReceived.matchCreateResponse.matchStartDate, matchReceived.matchCreateResponse.matchStartTime)}
            placeOffer={matchReceived.matchCreateResponse.placeProvided ? 'O' : 'X'}
            img={matchReceived.matchCreateResponse.clubLogo}
            clubIdx={matchReceived.matchCreateResponse.clubIdx}
            clubName={matchReceived.matchCreateResponse.clubName}
            tierNeed={matchReceived.matchCreateResponse.tier}
            peopleCount={matchReceived.matchCreateResponse.maxParticipants}
            receivedRequests={matchReceived.receivedRequests}
            clubMemberId={clubMemberId}
            isAccepted={hasAcceptedRequest}
          />
        );
      })}
    </Container>



  );
}

export default MatchReceivedList;
