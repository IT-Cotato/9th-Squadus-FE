import React from 'react';
import MatchArticleCard from './match_feature/MatchArticleCard';
import styled from 'styled-components';
import MainArticle from '../home/MainArticle';

const Container = styled.div`
  padding: 20px;
`;

const MatchArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
`;

const MatchContent = () => {
  const matchArticleData = [
    { 
      id: "1", 
      title: "매치 구합니다!!", 
      location: "서울 강남",
      category: "축구",
      date: "2024.07.30", 
      placeOffer: "O", 
      img: "", 
      clubName: "코테이토",
      tierNeed: "silver", 
      peopleCount: "3",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
    { 
      id: "2", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      category: "농구",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      clubName: "토마토",
      tierNeed: "silver", 
      peopleCount: "8",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
    { 
      id: "3", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      category: "농구",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      clubName: "서울펜싱팀",
      tierNeed: "silver", 
      peopleCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
    { 
      id: "4", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      category: "농구",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      clubName: "서울사격팀",
      tierNeed: "silver", 
      peopleCount: "6",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
  ]


  return (
    <Container>
      <MatchArticleList>
        {matchArticleData.map(matchArticle => (
          <MatchArticleCard 
            key={matchArticle.id}
            title={matchArticle.title}
            location={matchArticle.location}
            category={matchArticle.category}
            date={matchArticle.date}
            placeOffer={matchArticle.placeOffer}
            img={matchArticle.img}
            clubName={matchArticle.clubName}
            tierNeed={matchArticle.tierNeed}
            peopleCount={matchArticle.peopleCount}
            content={matchArticle.content}
            requestButtonLabel="요청 보내기"
            showRequestButton={true}
          />
        )) }

      </MatchArticleList>
    </Container>
  );
}

export default MatchContent;
