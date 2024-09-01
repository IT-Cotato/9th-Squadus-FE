import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GameItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputBox = styled.input`
  width: 20%;
  padding: 8px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.neutral[600]};
  border: none;
  font-size: 16px;
  text-align: center;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;

const GameNumber = styled.div`
  font-size: 16px;
  font-weight: 400;
`;

const ResultText = styled.div`
  width: 20%;
  padding: 8px;
  text-align: center;
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

const GameItem = ({ gameNumber, isComplete, homeScore, awayScore, onScoreChange }) => {
  const [inputValueOne, setInputValueOne] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');

  useEffect(() => {
    setInputValueOne(homeScore);
    setInputValueTwo(awayScore);
  }, [homeScore, awayScore])

  const handleInputChangeOne = (event) => {
    setInputValueOne(event.target.value);
    onScoreChange(event.target.value, inputValueTwo);
  };

  const handleInputChangeTwo = (event) => {
    setInputValueTwo(event.target.value);
    onScoreChange(inputValueOne, event.target.value);
  };

  return (
    <GameItemContainer>
      {isComplete ? (
        <>
          <ResultText>{inputValueOne}</ResultText>
          <GameNumber>{gameNumber}</GameNumber>
          <ResultText>{inputValueTwo}</ResultText>
        </>
      ) : (
        <>
          <InputBox
            type="text"
            placeholder="입력"
            value={inputValueOne}
            onChange={handleInputChangeOne}
          />
          <GameNumber>{gameNumber}</GameNumber>
          <InputBox
            type="text"
            placeholder="입력"
            value={inputValueTwo}
            onChange={handleInputChangeTwo}
          />
        </>
      )}
    </GameItemContainer>
  );
};

export default GameItem;