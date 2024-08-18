import React, { useState } from 'react';
import styled from 'styled-components';
import close_icon from '../../../assets/icons/close-white.svg';
import background_decoration from '../../../assets/match/background_decoration.svg'
import GameItem from './GameItem';

const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10000;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-image: url(${background_decoration}), radial-gradient(160% 220% at 0% 70%, #3887E3 0%, #A88BE4 38%, #FF5810 100%);
  background-size: cover, auto;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

const Spacer = styled.div`
  width: 32px;
  height: 32px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  color: white;

`;

const VersusContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 8px;
  font-size: 32px;
  color: white;
  font-weight: 700;
  padding: 20px;
`;

const ClubCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 36px;
`;

const ClubImage = styled.div`
  background-color: black;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
`;

const ClubName = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ClubTier = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const DetailContainer = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.10);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
  text-align: center;
  color: white;
  font-size: 18px;
  line-height: 18px;
  font-weight: 400;
`;

const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px 20px 20px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  gap: 12px;
`;

const ResultCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border: 1px solid white;
  border-radius: 10px;
`;

const ClubLabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ClubLabel = styled.div`
  width: 20%;
  color: white;
  font-size: 14px;
  font-weight: 700;
`;

const GameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0px 16px;
`;

const AddGameButton = styled.div`
  width: 100%;
  padding: 12px;
`;

const SumResultContainer = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const SumResultCard = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  font-size: 16px;
  font-weight: 600;
  background-color: white;
  color: ${({ theme }) => theme.colors.main[600]};
  align-items: center;
  border-radius: 12px;
`;

const SumClubBox = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SumClubCount = styled.div`
  color: ${({ theme }) => theme.colors.main[600]};
  font-size: 27px;
  font-weight: 700;
`;

const FinalResult = styled.div`
  color: ${({ theme }) => theme.colors.main[600]};
  font-size: 24px;
  font-weight: 500;
`;

const FooterContainer = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  gap: 10px;
  padding: 8px 20px 32px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 2px 10px rgba(85, 91, 160, 0.23);
`;

const FooterButton = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const FooterFillButton = styled(FooterButton)`
  background-color: white;
  color: ${({ theme }) => theme.colors.main[600]};
  border: none;
`;

const FooterBorderButton = styled(FooterButton)`
  background-color: none;
  color: white;
  border: 1px solid white;
`;


const MatchDetail = ({ closeMatchDetail }) => {
  const [gameItems, setGameItems] = useState([{ id: 1, gameNumber: '1경기' }]);
  const [isComplete, setIsComplete] = useState(false);

  const handleAddGameItem = () => {
    const nextId = gameItems.length + 1;
    const newGameItem = { id: nextId, gameNumber: `${nextId}경기` };
    setGameItems([...gameItems, newGameItem]);
  };

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleUnsetComplete = () => {
    setIsComplete(false);
  };

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeMatchDetail} />
          <HeaderTitle>매치 상세보기</HeaderTitle>
          <Spacer></Spacer>
        </HeaderContainer>
        <ContentContainer>
          <DateContainer>2024</DateContainer>
          <VersusContainer>
            <ClubCard>
              <ClubImage />
              <ClubName>중앙가르드</ClubName>
              <ClubTier>실버</ClubTier>
            </ClubCard>
            VS
            <ClubCard>
              <ClubImage />
              <ClubName>코테이토</ClubName>
              <ClubTier>골드</ClubTier>
            </ClubCard>
          </VersusContainer>
          <DetailContainer>
            <DescriptionContainer>강남구민체육관에서 5시에 매치하실 분분분분분분분분분분분분분분!</DescriptionContainer>
            <ResultContainer>
              매치 결과
              <ResultCard>
                <ClubLabelContainer>
                  <ClubLabel>중앙가르드</ClubLabel>
                  <ClubLabel>코테이토</ClubLabel>
                </ClubLabelContainer>
                <GameContainer>
                  {gameItems.map((item) => (
                    <GameItem key={item.id} gameNumber={item.gameNumber} isComplete={isComplete} />
                  ))}
                </GameContainer>
                {!isComplete && (
                  <AddGameButton onClick={handleAddGameItem}>
                    매치 결과 추가하기 +
                  </AddGameButton>
                )}
              </ResultCard>
            </ResultContainer>
            {isComplete && (
              <SumResultContainer>
                <SumResultCard>
                  <SumClubBox>
                    <SumClubCount>3</SumClubCount>
                    <FinalResult>WIN</FinalResult>
                  </SumClubBox>
                  합산 결과
                  <SumClubBox>
                    <SumClubCount>3</SumClubCount>
                    <FinalResult>LOSE</FinalResult>
                  </SumClubBox>
                </SumResultCard>
              </SumResultContainer>
            )}
          </DetailContainer>
        </ContentContainer>
        <FooterContainer>
          {!isComplete ? (
            <FooterFillButton onClick={handleComplete}>
              모든 경기 입력 완료
            </FooterFillButton>
          ) : (
            <>
              <FooterBorderButton onClick={handleUnsetComplete}>결과 수정</FooterBorderButton>
            </>
          )}
        </FooterContainer>
      </Container>
    </WrapperContainer>
  );
};

export default MatchDetail;
