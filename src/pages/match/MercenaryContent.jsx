import React, { useEffect, useState } from 'react';
import MercenaryArticleCard from './mercenary_feature/MercenaryArticleCard';
import styled from 'styled-components';
import { getUserClubs } from '../../apis/api/user';

const Container = styled.div`
  padding: 20px;
`;

const MercenaryArticleList = styled.div`
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




const MercenaryContent = ({ mercenaries }) => {
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

  // const mercenaryArticleData = [
  //   { 
  //     id: "1", 
  //     title: "용병 구합니다!!", 
  //     location: "서울 강남",
  //     category: "축구",
  //     date: "2024.07.30", 
  //     placeOffer: "O", 
  //     img: "", 
  //     clubName: "중앙가르드",
  //     maxCount: "8", 
  //     currentCount: "7",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
  //   },
  //   { 
  //     id: "2", 
  //     title: "용병 구합니다~~~", 
  //     location: "파리",
  //     category: "농구",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "서울사격팀",
  //     maxCount: "10", 
  //     currentCount: "5",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
  //   },
  //   { 
  //     id: "3", 
  //     title: "용병 구함", 
  //     location: "서울 성북구",
  //     category: "펜싱",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "한국펜싱",
  //     maxCount: "10", 
  //     currentCount: "5",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
  //   },
  //   { 
  //     id: "4", 
  //     title: "농구 매치할 팀 구해용", 
  //     location: "파리",
  //     category: "피겨",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     clubName: "한국피겨",
  //     tierNeed: "silver", 
  //     maxCount: "10", 
  //     currentCount: "5",
  //     content: "강남구민체육관에서 5시에 매치하실 분 구합니다!!"
  //   },
  // ]


  return (
    <Container>
      <MercenaryArticleList>
        {mercenaries.map(mercenaryArticle => (
          <MercenaryArticleCard 
            key={mercenaryArticle.mercenaryIdx}
            mercenaryIdx={mercenaryArticle.mercenaryIdx}
            title={mercenaryArticle.title}
            content={mercenaryArticle.content}
            location={`${mercenaryArticle.matchPlace.city} ${mercenaryArticle.matchPlace.district}`}
            category={mercenaryArticle.sportsCategory}
            date={formatDateAndTime(mercenaryArticle.matchStartDate, mercenaryArticle.matchStartTime)}
            placeOffer={mercenaryArticle.placeProvided ? 'O' : 'X'}
            img={mercenaryArticle.clubLogo}
            clubName={mercenaryArticle.clubName}
            clubIdx={mercenaryArticle.clubIdx}
            userClubs={userClubs}
            maxCount={mercenaryArticle.maxParticipants}
            currentCount={mercenaryArticle.currentParticipants}
            requestButtonLabel="요청 보내기"
            showRequestButton={true}
          />
        )) }

      </MercenaryArticleList>
    </Container>
  );
}

export default MercenaryContent;
