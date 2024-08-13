import styled from 'styled-components';


const Container = styled.div`
  width: 100%; 
  height: auto; 
  padding: 16px 16px 8px 16px;
  background: radial-gradient(300% 300% at -30% 100%, #FF5810 0%, #A88BE4 38%, #3887E3 100%); 
  box-shadow: 0px 1px 6px rgba(42, 36, 112, 0.13); 
  border-radius: 12px; 
  overflow: hidden; 
  flex-direction: column; 
  justify-content: flex-start; 
  align-items: flex-start; 
  gap: 10px; 
  display: inline-flex;
  color: white;
`;

const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Location = styled.div`
  font-size: 14px;
`;

const SubInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Schedule = styled.div`
  display: flex;
  flex-direction: row;
`;

const PlaceOffer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: black;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  gap: 8px;
`
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const TierDescription = styled.div`
  font-size: 12px;
`;

const RecruitmentCount = styled.div`
  font-size: 12px;
`

const BarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: pink;
`;

const CommentContainer = styled.div`
  width: 100%;
`;

const RequestButton = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 24px;
  background-color: white;
  color: ${({ theme }) => theme.colors.main[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
`;

const MatchCard = () => {
  return (
    <Container>
      <MainInfoContainer>
        <Title>매치 구합니다</Title>
        <Location>서울 강남</Location>
      </MainInfoContainer>
      <SubInfoContainer>
        <Schedule>일시</Schedule>
        <PlaceOffer>장소 제공 여부</PlaceOffer>
      </SubInfoContainer>
      <DetailContainer>
        <Image></Image>
        <StatusContainer>
          <DescriptionContainer>
            <TierDescription>티어 3이상</TierDescription>
            <RecruitmentCount>7/8</RecruitmentCount>
          </DescriptionContainer>
          <BarContainer></BarContainer>
        </StatusContainer>
      </DetailContainer>
      <CommentContainer>매치해용</CommentContainer>
      <RequestButton>요청 보내기</RequestButton>

    </Container>
    
  );
}

export default MatchCard;
