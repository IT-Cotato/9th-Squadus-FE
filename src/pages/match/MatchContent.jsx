import React, { useState, useEffect } from 'react';
import MatchArticleCard from './match_feature/MatchArticleCard';
import styled from 'styled-components';
import { getMatches } from '../../apis/api/match';
import useAuthStore from '../../stores/useAuthStore';

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

const MatchContent = () => {
  const { userData } = useAuthStore();
  const [matchArticleData, setMatchArticleData] = useState([]);

  useEffect(() => {
    const fetchMatchArticle = async() => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!userData || !userData.memberId) {
          console.error('로그인 정보가 없습니다.');
          return;
        }

        const clubMemberId = userData.memberId;
        const data = await getMatches(accessToken, clubMemberId);
        setMatchArticleData(data.matches || []);
      } catch (error) {
        console.error("용병 데이터 불러오는 중 오류", error);
      }
    }
    fetchMatchArticle();
  }, [userData])

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
        {matchArticleData.map(matchArticle => (
          <MatchArticleCard 
            key={matchArticle.matchIdx}
            title={matchArticle.title}
            content={matchArticle.content}
            location={`${matchArticle.matchPlace.city} ${matchArticle.matchPlace.district}`}
            category="양궁"     // TODO: 채워주기
            date={formatDateAndTime(matchArticle.matchStartDate, matchArticle.matchStartTime)}
            placeOffer={matchArticle.placeProvided ? 'O' : 'X'}
            img=""            // TODO: 채워주기
            clubName="코테이토" // TODO: 채워주기
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
