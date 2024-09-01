import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import MatchHeader from './MatchHeader';
import create_icon from '../../assets/icons/write.svg'
import MatchCreate from './match_feature/MatchCreate';
import MercenaryCreate from './mercenary_feature/MercenaryCreate';
import MatchContent from './MatchContent';
import MercenaryContent from './MercenaryContent';
import { getMatches } from '../../apis/api/match';
import { getMercenaries } from '../../apis/api/mercenary';

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const WrapperContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const FloatingButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 32px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
`;

const CreateIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${create_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Match = () => {
  const [selectedTab, setSelectedTab] = useState("match");
  const [showMatchCreate, setShowMatchCreate] = useState(false);
  const [showMercenaryCreate, setShowMercenaryCreate] = useState(false);
  const [matches, setMatches] = useState([]);
  const [mercenaries, setMercenaries] = useState([]); 

  // 매치 및 용병 데이터를 로드하는 함수
  const loadData = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (selectedTab === "match") {
        const data = await getMatches(accessToken);
        setMatches(data.matches || []);
      } else if (selectedTab === "mercenary") {
        const data = await getMercenaries(accessToken);
        setMercenaries(data.matches || []);
      }
    } catch (error) {
      console.error('데이터 불러오는 중 오류', error);
    }
  }, [selectedTab]);


  useEffect(() => {
    loadData();
  }, [selectedTab, loadData]);

  // 플로팅버튼 눌렀을 때
  const handleFloatingButtonClick = () => {
    if (selectedTab === "match") {
      setShowMatchCreate(true);
    } else if (selectedTab === "mercenary") {
      setShowMercenaryCreate(true);
    }
  };

  // 매치 생성 시 호출되는 함수
  const handleMatchCreate = (newMatch) => {
    setMatches((prevMatches) => [newMatch, ...prevMatches]);
    setShowMatchCreate(false);
  };

  // 용병 생성 시 호출되는 함수
  const handleMercenaryCreate = (newMercenary) => {
    setMercenaries((prevMercenaries) => [newMercenary, ...prevMercenaries]);
    setShowMercenaryCreate(false);
  };


  return (
    <>
      <FixedContainer>
        <MatchHeader setSelectedTab={setSelectedTab} />
      </FixedContainer>
      <WrapperContainer>
        <ContentContainer>
          {selectedTab === "match" && (
            <MatchContent 
              matches={matches} 
            />
          )}
          {selectedTab === "mercenary" && (
            <MercenaryContent 
              mercenaries={mercenaries} 
            />
          )}
        </ContentContainer>
        <FloatingButton onClick={handleFloatingButtonClick}>
          <CreateIcon />
        </FloatingButton>
      </WrapperContainer>

      {showMatchCreate && (
        <MatchCreate 
          closeMatchCreate={() => setShowMatchCreate(false)} 
          onMatchCreate={handleMatchCreate} 
        />
      )}

      {showMercenaryCreate && (
        <MercenaryCreate
          closeMercenaryCreate={() => setShowMercenaryCreate(false)}
          onMercenaryCreate={handleMercenaryCreate}
        />
      )}
    </>
  );
};

export default Match;
