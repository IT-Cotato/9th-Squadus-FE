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
  text-align: center;
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
  width: 50%;
  border-radius: 8px;
`;

const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.neutral[300]};
  color: white;
`;

const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.main[600]};
  color: white;
`;


const MatchSendCancelModal = ({ onClose }) => {

  const matchClubData = {
    id: "1",
    matchClubName: "파리펜싱팀",
    matchDate: "7월 30일 4시"
  }

  const handleModalClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 중지
  };

  return(
    <WrapperContainer onClick={onClose}>
      <Container onClick={handleModalClick}>
        <ModalContainer>
          <ModalHeader>매치 신청 취소</ModalHeader>
          <ModalContentContainer>
            <ModalContent>
              {matchClubData.matchClubName}에게 보낸 신청을<br />취소하시겠습니까?
            </ModalContent>
            <ModalButtonContainer>
              <CancelButton onClick={onClose}>취소</CancelButton>
              <ConfirmButton>확인</ConfirmButton>
            </ModalButtonContainer>
          </ModalContentContainer>
        </ModalContainer>
      </Container>
    </WrapperContainer>
  )
}

export default MatchSendCancelModal;
