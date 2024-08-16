import React from 'react';
import MatchArticleCard from './match_feature/MatchArticleCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
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
      date: "2024.07.30", 
      placeOffer: "O", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "8", 
      currentCount: "7",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
    { 
      id: "2", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "10", 
      currentCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
    { 
      id: "3", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "10", 
      currentCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
    { 
      id: "4", 
      title: "농구 매치할 팀 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "10", 
      currentCount: "5",
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
            date={matchArticle.date}
            placeOffer={matchArticle.placeOffer}
            img={matchArticle.img}
            tierNeed={matchArticle.tierNeed}
            maxCount={matchArticle.maxCount}
            currentCount={matchArticle.currentCount}
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
