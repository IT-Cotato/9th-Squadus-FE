import React, {useState} from 'react';
import styled from 'styled-components';
import MatchArticleCard from './MatchArticleCard';
import MatchDetail from '../match_detail/MatchDetail';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Result = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: ${({ status, theme }) => {
    if (status === '승낙') return theme.colors.main[600];
    if (status === '대기' || status === '거절') return theme.colors.neutral[400];
  }};
`;



const MatchSentItem = ({ title, location, date, placeOffer, img, clubName, category, tierNeed, peopleCount, content, status}) => {
  const [showMatchDetail, setShowMatchDetail] = useState(false);

  const handleDetailClick = () => {
    setShowMatchDetail(true);
  }


  return (
    <Container>
      <MatchArticleCard 
        title={title}
        location={location}
        date={date}
        placeOffer={placeOffer}
        img={img}
        clubName={clubName}
        category={category}
        tierNeed={tierNeed}
        peopleCount={peopleCount}
        content={content}
        requestButtonLabel="요청 취소"
        showRequestButton={true}
      />
      <Result status={status} onClick={handleDetailClick}>
        {status}
      </Result>

      {
        showMatchDetail && 
        <MatchDetail
          closeMatchDetail={() => setShowMatchDetail(false)}
        />
      }
    </Container>
  );
}

export default MatchSentItem;
