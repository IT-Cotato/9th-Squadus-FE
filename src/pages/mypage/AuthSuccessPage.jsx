import React from 'react';
import styled from 'styled-components';
import close_icon from '../../assets/icons/close.svg';
import check_icon from '../../assets/icons/check-circle.svg';


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
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
  box-sizing: border-box;
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const CheckIcon = styled.div`
  width: 84px;
  height: 84px;
  background-image: url(${check_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Message = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[800]};
`

const AuthSuccessPage = ({ closeAuthSuccessPage }) => {
  return(
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeAuthSuccessPage} />
          <HeaderTitle>학교 인증</HeaderTitle>
        </HeaderContainer>
        <ContentContainer>
          <CheckIcon></CheckIcon>
          <Message>학교 인증이 완료되었습니다.</Message>
        </ContentContainer>
      </Container>
    </WrapperContainer>
  )
}

export default AuthSuccessPage;
