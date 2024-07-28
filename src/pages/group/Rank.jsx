import { useState } from 'react';
import styled from 'styled-components';
import RankItem from './group_components/RankItem';

const BaseContainer = styled.div`
  max-width: 649px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  z-index: 10001;
  padding: 4px 20px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -2px 87px 0px #475467;
  box-sizing: border-box;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background: linear-gradient(270deg, #1e58ec 0%, #525e9d 100%);
`;
const TopBar = styled.div`
  width: 100%;
  height: 64px; /* Hug (64px) px를 64px로 변경 */
  padding: 0px 20px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: #ffffff;
  display: flex;
  align-items: center;
  position: relative;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-weight: 600;
  line-height: 22px;
  color: #ffffff;
  font-size: 24px;
  position: absolute;
  left: 20px;
`;

const TopText = styled.div`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
`;

const ListContainer = styled.div`
  width: 100%;
  height: Hug (502.9px) px;
  padding: 16px 0px;
  border-radius: 16px 16px 0px 0px;
  background-color: #ffffff;
`;
const mockData = [
  {
    rank: 1,
    isUp: true,
    upDown: 2,
    name: '중앙가르드',
    score: 238,
  },
  {
    rank: 2,
    isUp: false,
    upDown: 1,
    name: '중앙가르드',
    score: 238,
  },
  {
    rank: 3,
    isUp: false,
    upDown: 2,
    name: '중앙가르드',
    score: 238,
  },
  {
    rank: 4,
    isUp: true,
    upDown: 1,
    name: '중앙가르드',
    score: 238,
  },
  {
    rank: 5,
    isUp: false,
    upDown: 1,
    name: '중앙가르드',
    score: 238,
  },
];
const Rank = ({ isOpen, onClose }) => {
  return (
    <div>
      <BaseContainer isOpen={isOpen}>
        <TopBar>
          <BackButton onClick={onClose}> &lt; </BackButton>
          <TopText>티어</TopText>
        </TopBar>
        <ListContainer>
          {mockData.map((item) => (
            <RankItem key={item.rank} {...item} />
          ))}
        </ListContainer>
      </BaseContainer>
    </div>
  );
};

export default Rank;
