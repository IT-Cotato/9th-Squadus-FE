import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MercenarySentItem from './MercenarySentItem';
import { getMercenaryRequests } from '../../../apis/api/mercenary';
import useAuthStore from '../../../stores/useAuthStore';

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


const MercenarySentList = () => {
  const { userData } = useAuthStore();
  const [mercenarySentData, setMercenarySentData] = useState([])

  useEffect(() => {
    const fetchMercenaryRequests = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const data = await getMercenaryRequests(accessToken);   // TODO: 백에서 데이터 제대로 받아오고 있는지 확인 필요
        setMercenarySentData(data.matches || []);
      } catch (error) {
        console.error('개인이 신청한 용병 내역 불러오는 중 오류', error);
      }
    };

    fetchMercenaryRequests();
  }, [userData]);

  // const MercenarySentData = [
  //   { 
  //     id: "1", 
  //     title: "용병 구합니다!!", 
  //     location: "서울 강남",
  //     date: "2024.07.30", 
  //     placeOffer: "O", 
  //     img: "", 
  //     tierNeed: "silver", 
  //     maxCount: "8", 
  //     currentCount: "7",
  //     content: "용병 8명 구합니다~~!!",
  //     status: "승낙"
  //   },
  //   { 
  //     id: "2", 
  //     title: "농구 용병 구해용", 
  //     location: "파리",
  //     date: "2024.08.30", 
  //     placeOffer: "X", 
  //     img: "", 
  //     tierNeed: "silver", 
  //     maxCount: "10", 
  //     currentCount: "5",
  //     content: "용병구함!!",
  //     status: "대기"
  //   },
  // ]

  return (
    <Container>
      {mercenarySentData.map(mercenarySent => (
        <MercenarySentItem 
          key={mercenarySent.mercenaryRequestIdx}
          title={mercenarySent.mercenaryCreateResponse.title}
          location={`${mercenarySent.mercenaryCreateResponse.matchPlace.city} ${mercenarySent.mercenaryCreateResponse.matchPlace.district}`}
          date={formatDateAndTime(mercenarySent.mercenaryCreateResponse.matchStartDate, mercenarySent.mercenaryCreateResponse.matchStartTime)}
          placeOffer={mercenarySent.placeOffer}
          img=""            // TODO: 채워주기
          clubName="포테이토칩" // TODO: 채워주기
          maxCount={mercenarySent.mercenaryCreateResponse.maxParticipants}
          currentCount={mercenarySent.mercenaryCreateResponse.currentParticipants}
          content={mercenarySent.mercenaryCreateResponse.content}
          status={mercenarySent.status}
        />
      ))}
    </Container>
  );
}

export default MercenarySentList;
