import React from 'react';
import MercenaryArticleCard from './mercenary_feature/MercenaryArticleCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const MercenaryArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
`;

const MercenaryContent = () => {
  const mercenaryArticleData = [
    { 
      id: "1", 
      title: "용병 구합니다!!", 
      location: "서울 강남",
      date: "2024.07.30", 
      placeOffer: "O", 
      img: "", 
      clubName: "중앙가르드",
      maxCount: "8", 
      currentCount: "7",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
    { 
      id: "2", 
      title: "용병 구합니다~~~", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      clubName: "서울사격팀",
      maxCount: "10", 
      currentCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
    { 
      id: "3", 
      title: "용병 구함", 
      location: "서울 성북구",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      clubName: "한국펜싱",
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
      clubName: "한국피겨",
      tierNeed: "silver", 
      maxCount: "10", 
      currentCount: "5",
      content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
    },
  ]


  return (
    <Container>
      <MercenaryArticleList>
        {mercenaryArticleData.map(mercenaryArticle => (
          <MercenaryArticleCard 
            key={mercenaryArticle.id}
            title={mercenaryArticle.title}
            location={mercenaryArticle.location}
            date={mercenaryArticle.date}
            placeOffer={mercenaryArticle.placeOffer}
            img={mercenaryArticle.img}
            clubName={mercenaryArticle.clubName}
            maxCount={mercenaryArticle.maxCount}
            currentCount={mercenaryArticle.currentCount}
            content={mercenaryArticle.content}
            requestButtonLabel="요청 보내기"
            showRequestButton={true}
          />
        )) }

      </MercenaryArticleList>
    </Container>
  );
}

export default MercenaryContent;
