import React from 'react';
import styled from 'styled-components';
import MercenarySentItem from './MercenarySentItem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;


const MercenarySentList = () => {
  const MercenarySentData = [
    { 
      id: "1", 
      title: "용병 구합니다!!", 
      location: "서울 강남",
      date: "2024.07.30", 
      placeOffer: "O", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "8", 
      currentCount: "7",
      content: "용병 8명 구합니다~~!!",
      status: "승낙"
    },
    { 
      id: "2", 
      title: "농구 용병 구해용", 
      location: "파리",
      date: "2024.08.30", 
      placeOffer: "X", 
      img: "", 
      tierNeed: "silver", 
      maxCount: "10", 
      currentCount: "5",
      content: "용병구함!!",
      status: "대기"
    },
  ]

  return (
    <Container>
      {MercenarySentData.map(mercenarySent => (
        <MercenarySentItem 
          key={mercenarySent.id}
          title={mercenarySent.title}
          location={mercenarySent.location}
          date={mercenarySent.date}
          placeOffer={mercenarySent.placeOffer}
          img={mercenarySent.img}
          maxCount={mercenarySent.maxCount}
          currentCount={mercenarySent.currentCount}
          content={mercenarySent.content}
          status={mercenarySent.status}
        />
      ))}
    </Container>
  );
}

export default MercenarySentList;
