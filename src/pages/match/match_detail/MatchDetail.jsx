import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import close_icon from '../../../assets/icons/close-white.svg';
import background_decoration from '../../../assets/match/background_decoration.svg'
import GameItem from './GameItem';
import { getMatchDetail, postGameResult, putGameResult, getFinalResult } from '../../../apis/api/match';

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
  cursor: pointer;
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
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
  gap: 10px;
  padding: 8px 20px 32px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 2px 10px rgba(85, 91, 160, 0.23);
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 18px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
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


const MatchDetail = ({ closeMatchDetail, matchId, clubMemberId }) => {
  const [gameItems, setGameItems] = useState([{ id: 1, gameNumber: '경기 1' }]);
  const [isComplete, setIsComplete] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [finalResult, setFinalResult] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    getMatchDetail(accessToken, matchId)
      .then((data) => {
        setMatchData(data);
        if (data.matchResults.length > 0) {
          const loadedGameItems = data.matchResults.map((result, index) => ({
            id: index + 1,
            gameNumber: `경기 ${index + 1}`,
            homeScore: result.homeScore,
            awayScore: result.awayScore,
            matchResultIdx: result.matchResultIdx, // 수정: 기존 결과의 ID 저장
          }));
          setGameItems(loadedGameItems);
          fetchFinalResult();
        }
      })
      .catch((error) => {
        console.error('매치 상세 정보 불러오기 오류:', error);
      });

  }, [matchId])


  // 새로운 게임 항목을 추가
  const handleAddGameItem = () => {
    const nextId = gameItems.length + 1;
    const newGameItem = { id: nextId, gameNumber: `경기 ${nextId}`, homeScore: 0, awayScore: 0, matchResultIdx: null };
    setGameItems([...gameItems, newGameItem]);
  };

  // 특정 게임의 점수를 업데이트
  const handleScoreChange = (id, homeScore, awayScore) => {
    setGameItems((prevItems) => 
      prevItems.map((item) => 
        item.id === id ? { ...item, homeScore, awayScore} : item
      )
    );
  }

  // 사용자가 <모든 경기 결과 입력 완료> 버튼을 눌렀을 때 실행됨
  const handleComplete = async () => {
    const accessToken = localStorage.getItem('accessToken');

    for (const item of gameItems) { // 순차적으로 실행
      try {
        if (item.matchResultIdx) {
          await putGameResult(accessToken, item.matchResultIdx, clubMemberId, item.homeScore, item.awayScore);
        } else {
          await postGameResult(accessToken, matchId, clubMemberId, item.homeScore, item.awayScore);
        }
      } catch (error) {
        console.error('경기 결과 처리 오류: ', error);
        return;
      }
    }

    await refreshMatchData();
    await fetchFinalResult();
  };

  const refreshMatchData = async () => {
    const accessToken = localStorage.getItem('accessToken');
    getMatchDetail(accessToken, matchId)
      .then((data) => {
        setMatchData(data);
        setIsComplete(true);
      })
      .catch((error) => {
        console.error('업데이트된 매치 정보 가져오기 오류:', error);
      });
  };

  const fetchFinalResult = async () => {
    const accessToken = localStorage.getItem('accessToken');
    try {
      const finalResultData = await getFinalResult(accessToken, matchId, clubMemberId);
      setFinalResult(finalResultData);
    } catch (error) {
      console.error('최종 결과 가져오기 오류:', error);
    }
  };

  // 결과 수정을 눌렀을 때
  const handleUnsetComplete = () => {
    setIsComplete(false);

    // DB에서 불러온 데이터로 gameItems를 초기화하여 input에 다시 채워지도록 함
    if (matchData && matchData.matchResults.length > 0) {
      const loadedGameItems = matchData.matchResults.map((result, index) => ({
        id: index + 1,
        gameNumber: `경기 ${index + 1}`,
        homeScore: result.homeScore,
        awayScore: result.awayScore,
        matchResultIdx: result.matchResultIdx, 
      }));
      setGameItems(loadedGameItems);
    }
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
          {matchData && (
            <>
              <DateContainer></DateContainer>  {/*TODO: 백에서 데이터 받아야하는 것 */}
              <VersusContainer>
                <ClubCard>
                  <ClubImage style={{ backgroundImage: `url(${matchData.homeClubLogoUrl})` }} />
                  <ClubName>{matchData.homeClubName}</ClubName>
                  <ClubTier>{matchData.homeClubTier}</ClubTier>
                </ClubCard>
                VS
                <ClubCard>
                  <ClubImage style={{ backgroundImage: `url(${matchData.awayClubLogoUrl})` }} />
                  <ClubName>{matchData.awayClubName}</ClubName>
                  <ClubTier>{matchData.awayClubTier}</ClubTier>
                </ClubCard>
              </VersusContainer>
              <DetailContainer>
                <DescriptionContainer>{matchData.matchContent}</DescriptionContainer>
                <ResultContainer>
                  매치 결과
                  <ResultCard>
                    <ClubLabelContainer>
                      <ClubLabel>{matchData.homeClubName}</ClubLabel>
                      <ClubLabel>{matchData.awayClubName}</ClubLabel>
                    </ClubLabelContainer>
                    <GameContainer>
                      {isComplete ? (
                        matchData.matchResults.map((result, index) => (
                          <GameItem
                            key={result.matchResultIdx}
                            gameNumber={`경기 ${index + 1}`}
                            isComplete={true}
                            homeScore={result.homeScore}
                            awayScore={result.awayScore}
                          />
                        ))
                      ) : (
                        gameItems.map((item) => (
                          <GameItem
                            key={item.id}
                            gameNumber={item.gameNumber}
                            isComplete={false}
                            homeScore={item.homeScore}
                            awayScore={item.awayScore}
                            onScoreChange={(homeScore, awayScore) =>
                              handleScoreChange(item.id, homeScore, awayScore)
                            }
                          />
                        ))
                      )}
                    </GameContainer>
                    {!isComplete && (
                      <AddGameButton onClick={handleAddGameItem}>
                        매치 결과 추가하기 +
                      </AddGameButton>
                    )}
                  </ResultCard>
                </ResultContainer>
                {isComplete && finalResult && (
                  <SumResultContainer>
                    <SumResultCard>
                      <SumClubBox>
                        <SumClubCount>{finalResult.homeWins}</SumClubCount>
                        <FinalResult>
                          {finalResult.homeWins > finalResult.awayWins ? 'WIN' : 
                           finalResult.homeWins < finalResult.awayWins ? 'LOSE' : 
                           'DRAW'}
                        </FinalResult>
                      </SumClubBox>
                      합산 결과
                      <SumClubBox>
                        <SumClubCount>{finalResult.awayWins}</SumClubCount>
                        <FinalResult>
                          {finalResult.awayWins > finalResult.homeWins ? 'WIN' : 
                           finalResult.awayWins < finalResult.homeWins ? 'LOSE' : 
                           'DRAW'}
                        </FinalResult>
                      </SumClubBox>
                    </SumResultCard>
                  </SumResultContainer>
                )}
              </DetailContainer>
            </>
          )}
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
