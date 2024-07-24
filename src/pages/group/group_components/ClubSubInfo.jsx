import ClubComment from './ClubComment';
import styled from 'styled-components';

const ClubSubInfo = ({ onClick }) => {
  return (
    <Container>
      <RankContainer onClick={onClick}>
        <RankImg />
        <RankTextContainer>
          <TextSmall>티어 정보</TextSmall>
          <TextBIg>실버</TextBIg>
          <TextBIg>138팀 중 7위</TextBIg>
          <TextSmall>다음 레벨까지 남은 순위 : 3위</TextSmall>
        </RankTextContainer>
      </RankContainer>
      <ClubComment title={'동아리 한마디'} content={'화이팅!!'} />{' '}
    </Container>
  );
};

export default ClubSubInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
`;

const RankContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 10px;
  width: 100%;
  background: linear-gradient(270deg, #1e58ec 0%, #525e9d 100%);
  box-sizing: border-box;

  box-shadow: 0px 0px 8px rgba(110, 110, 110, 0.23);
  border-radius: 12px;
`;

const RankImg = styled.div`
  width: 83.19px;
  height: 83.19px;
  box-shadow: 0px 0px 11px 0px #00fff033;
`;
const RankTextContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const TextSmall = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.011em;
  color: #f9fafb;
`;

const TextBIg = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 19.2px;
  letter-spacing: -0.011em;
  color: #ffffff;
`;
