import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: Hug (94.18px) px;
  padding: 16px 20px;
  display: flex;
  gap: 10px;
  background-color: ${({ rank }) => (rank % 2 === 0 ? '#F2F4F7' : '#ffffff')};
  box-sizing: border-box;
`;

const Rank = styled.div`
  width: Hug (59px) px;
  height: Fill (62.18px) px;
  display: flex;

  gap: 4px;
  font-family: Pretendard;
  font-size: 30px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: -0.011em;
  text-align: left;

  color: #475467;
`;

const RankSpan = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: 45px;
  letter-spacing: -0.011em;
  text-align: left;
  color: ${({ isUp }) => (isUp ? '#008FDF' : '#FF6330')};
`;
// const RankDirection = `
//   font-size:15px;
// `;
const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Group = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.011em;
  text-align: left;
`;
const TotalScore = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.011em;
  text-align: left;
  color: #475467;
`;
const Score = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.011em;
  text-align: left;
  color: #475467;
`;
const RankItem = ({ rank, isUp, upDown, name, score }) => {
  return (
    <Container rank={rank}>
      <Rank>
        0{rank}
        <RankSpan isUp={isUp}>
          {isUp ? '↑' : '↓'}
          {upDown}
        </RankSpan>
      </Rank>
      <Group>{name}</Group>
      <ScoreWrapper>
        <TotalScore>TotalScore:</TotalScore>
        <Score>{score}s</Score>
      </ScoreWrapper>
    </Container>
  );
};

export default RankItem;
