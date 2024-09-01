import React, { useState, useEffect } from 'react';
import MatchArticleCard from './match_feature/MatchArticleCard';
import styled from 'styled-components';
import { getUserClubs } from '../../apis/api/user';

const Container = styled.div`
  padding: 20px;
`;

const MatchArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

const MatchContent = ({ matches }) => {
  const [userClubs, setUserClubs] = useState([]); // 사용자 동아리 정보를 저장할 상태 변수

  useEffect(() => {
    const fetchUserClubs = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const clubs = await getUserClubs(accessToken);
        setUserClubs(clubs.memberClubResponseList || []);
      } catch (error) {
        console.error('사용자 동아리 정보 불러오기 실패:', error);
      }
    };
    
    fetchUserClubs();
  }, []);

  // const matchArticleData = [
  //   { 
  //     id: "1", 
  //     title: "매치 구합니다!!", 
  //     location: "서울 강남",
  //     category: "축구",
  //     date: "2024.07.30", 
  //     placeOffer: "O", 
  //     img: "", 
  //     clubName: "코테이토",
  //     tierNeed: "silver", 
  //     peopleCount: "3",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
  //   },
  //   { 
  //     id: "2", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     category: "농구",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "토마토",
  //     tierNeed: "silver", 
  //     peopleCount: "8",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
  //   },
  //   { 
  //     id: "3", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     category: "농구",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "서울펜싱팀",
  //     tierNeed: "silver", 
  //     peopleCount: "5",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
  //   },
  //   { 
  //     id: "4", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     category: "농구",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "서울사격팀",
  //     tierNeed: "silver", 
  //     peopleCount: "6",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
  //   },
  // ]


  return (
    <Container>
      <MatchArticleList>
        {matches.map(matchArticle => (
          <MatchArticleCard 
            key={matchArticle.matchIdx}
            matchIdx={matchArticle.matchIdx}
            title={matchArticle.title}
            content={matchArticle.content}
            location={`${matchArticle.matchPlace.city} ${matchArticle.matchPlace.district}`}
            category={matchArticle.sportsCategory}
            date={formatDateAndTime(matchArticle.matchStartDate, matchArticle.matchStartTime)}
            placeOffer={matchArticle.placeProvided ? 'O' : 'X'}
            img={matchArticle.clubLogo}
            clubName={matchArticle.clubName}
            clubIdx={matchArticle.clubIdx}
            userClubs={userClubs}
            tierNeed={matchArticle.tier}
            peopleCount={matchArticle.maxParticipants}
            requestButtonLabel="요청 보내기"
            showRequestButton={true}
          />
        )) }

      </MatchArticleList>
    </Container>
  );
}

export default MatchContent;
