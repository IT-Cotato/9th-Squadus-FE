import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MatchSentItem from './MatchSentItem';
import { getMatchRequests } from '../../../apis/api/match';

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


const MatchSentList = ({ selectedGroup, clubMemberId }) => {
  const [matchSentData, setMatchSentData] = useState([]);

  useEffect(() => {
    const fetchMatchRequests = async () => {
      if (!selectedGroup) return;

      try {
        const accessToken = localStorage.getItem('accessToken');
        const data = await getMatchRequests(accessToken, selectedGroup.clubId);
        setMatchSentData(data.matches || []);
      } catch (error) {
        console.error('매치 신청한 내역 불러오는 중 오류', error);
      }
    };

    fetchMatchRequests();
  }, [selectedGroup]);

  const getStatusLabel = (status) => {
    switch (status) {
      case 'PENDING':
        return '대기';
      case 'ACCEPTED':
        return '승낙';
      case 'REJECTED':
        return '거절';
      default:
        return '알 수 없음';
    }
  };

  // const MatchSentData = [
  //   { 
  //     id: "1", 
  //     title: "매치 구합니다!!", 
  //     location: "서울 강남",
  //     date: "2024.07.30", 
  //     placeOffer: "O", 
  //     img: "", 
  //     clubName: "코테이토1",
  //     tierNeed: "silver", 
  //     peopleCount: "2",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //     status: "승낙"
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
  //     peopleCount: "222",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //     status: "대기"
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
  //     peopleCount: "33",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //     status: "거절"
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
  //     peopleCount: "20",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!",
  //     status: "대기"
  //   },
  // ]

  return (
    <Container>
      {matchSentData.map(matchSent => (
        <MatchSentItem 
          key={matchSent.matchRequestIdx}
          matchIdx={matchSent.matchCreateResponse.matchIdx}
          title={matchSent.matchCreateResponse.title}
          location={`${matchSent.matchCreateResponse.matchPlace.city} ${matchSent.matchCreateResponse.matchPlace.district}`}
          date={formatDateAndTime(matchSent.matchCreateResponse.matchStartDate, matchSent.matchCreateResponse.matchStartTime)}
          placeOffer={matchSent.matchCreateResponse.placeProvided ? 'O' : 'X'}
          img={matchSent.matchCreateResponse.clubLogo}
          clubName={matchSent.matchCreateResponse.clubName}
          category={matchSent.matchCreateResponse.sportsCategory}
          tierNeed={matchSent.matchCreateResponse.tier}
          peopleCount={matchSent.matchCreateResponse.maxParticipants}
          content={matchSent.matchCreateResponse.content}
          status={getStatusLabel(matchSent.status)}
          clubMemberId={clubMemberId}
        />
      ))}
    </Container>
  );
}

export default MatchSentList;
