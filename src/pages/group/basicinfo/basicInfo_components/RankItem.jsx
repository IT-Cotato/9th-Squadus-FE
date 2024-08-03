import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: Hug (94.18px) px;
  padding: 16px 20px;
  display: flex;
  gap: 10px;
  background-color: ${(props) =>
    props.rank % 2 === 0 ? '#F2F4F7' : '#ffffff'};
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
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Photo = styled.div`
  width: 44.18px;
  height: 44.18px;
  border-radius: 50px;
  background-color: black;
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
  const rankColor = isUp ? '#008FDF' : '#FF6330';
  return (
    <Container rank={rank}>
      <Rank>
        0{rank}
        <RankSpan style={{ color: rankColor }}>
          {isUp ? '↑' : '↓'}
          {upDown}
        </RankSpan>
      </Rank>
      <Group>
        <Photo />
        {name}
      </Group>
      <ScoreWrapper>
        <TotalScore>TotalScore:</TotalScore>
        <Score>{score}s</Score>
      </ScoreWrapper>
    </Container>
  );
};

export default RankItem;
