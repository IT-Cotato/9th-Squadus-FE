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
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 2px 50px rgba(85, 91, 160, 0.43);
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
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  align-items: center;
  font-size: 18px;
  line-height: 22px;
`;

const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  border-radius: 8px;
`;


const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.main[600]};
  color: white;
  width: 100%;
`;

const MercenarySendFailModal = ({ onClose }) => {

  return(
    <WrapperContainer onClick={onClose}>
      <Container onClick={e => e.stopPropagation()}>
        <ModalContainer>
          <ModalHeader>매치 요청 실패</ModalHeader>
          <ModalContentContainer>
            <ModalContent>
              <div>이미 해당 용병 구인글에 신청을 보냈습니다.</div>
            </ModalContent>
            <ModalButtonContainer>
              <ConfirmButton onClick={onClose}>확인</ConfirmButton>
            </ModalButtonContainer>
          </ModalContentContainer>
        </ModalContainer>
      </Container>
    </WrapperContainer>
  )
}

export default MercenarySendFailModal;
