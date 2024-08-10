import React, { useState } from 'react';
import styled from 'styled-components';
import arrowdown_icon from '../../../assets/icons/group/arrow_down.svg';
import GroupSelectList from './GroupSelectList';


const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  font-size: 16px;
  border-bottom: 1px solid #dcdcdc;
`;

const Logo = styled.img`
  height: 24px;
  width: 24px;
  background-color: pink;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const ArrowDown = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${arrowdown_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function GroupHeader() {
  const [showGroupSelectList, setShowGroupSelectList] = useState(false);

  return (
    <Container>
        <Logo />
        <Title>중앙가르드</Title>
        <ArrowDown onClick={(e) => {
          setShowGroupSelectList(!showGroupSelectList);
        }} />
        {showGroupSelectList && <GroupSelectList />}
    </Container>
  );
}

export default GroupHeader;
