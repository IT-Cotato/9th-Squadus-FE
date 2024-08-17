import React from 'react';
import styled from 'styled-components';

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
  position: relative;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 12px;
`;

const ModalHeader = styled.div`
  width: 100%;
  background-color: #343432;
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 12px 12px 0px 0px;
`;

const ModalContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 16px;
  border-radius: 0px 0px 12px 12px;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 0px;
`;

const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main[600]};
  color: white;
`;

const EmailSendModal = ({ closeEmailSendModal }) => {
  return(
    <WrapperContainer>
      <Container>
        <ModalContainer>
          <ModalHeader>인증번호 전송 완료</ModalHeader>
          <ModalContentContainer>
            <ModalContent>이메일로 인증번호가 전송되었습니다.</ModalContent>
            <ModalButtonContainer>
              <Button onClick={closeEmailSendModal}>확인</Button>
            </ModalButtonContainer>
          </ModalContentContainer>
        </ModalContainer>
      </Container>
    </WrapperContainer>
  )
}

export default EmailSendModal;
