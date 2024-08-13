import React from 'react';
import styled from 'styled-components';
import previous_icon from '../../assets/icons/arrow-left.svg';

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
  background-color: white;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
  position: relative;
`;

const PreviousButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${previous_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;


const MercenaryHistory = ({ closeMercenaryHistory }) => {
  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <PreviousButton onClick={closeMercenaryHistory} />
          <HeaderTitle>용병 신청내역</HeaderTitle>
        </HeaderContainer>
        <ContentContainer>
         
        </ContentContainer>
      </Container>
    </WrapperContainer>
  );
};

export default MercenaryHistory;
