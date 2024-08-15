import React from "react";
import {
  AddButton,
  CloseButtonStyled,
  ModalNavi,
  ModalTitle,
  Container,
} from "../group/group_components/ModalHeader";
import styled from "styled-components";
const ClubApply = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <Container>
          <ModalNavi>
            <CloseButtonStyled onClick={closeModal}>X</CloseButtonStyled>
            <ModalTitle>동아리 지원</ModalTitle>
            <AddButton>지원</AddButton>
          </ModalNavi>
          <TitleWrapper>
            <TitleText>그린비</TitleText>
            <TitleEvent>테니스</TitleEvent>
          </TitleWrapper>
          <EntireContainer>
            <Wrapper>
              <Question>1. 자신을 소개해주세요.</Question>
              <Answer placeholder="답변을 입력하세요"></Answer>
            </Wrapper>
            <Wrapper>
              <Question>2. 지원 동기가 무엇인가요?</Question>
              <Answer placeholder="답변을 입력하세요"></Answer>
            </Wrapper>
            <Wrapper>
              <Question>3. 동아리를 통해 이루고싶은 목표가 있나요?</Question>
              <Answer placeholder="답변을 입력하세요"></Answer>
            </Wrapper>
          </EntireContainer>
        </Container>
      )}
    </>
  );
};

export default ClubApply;
const TitleWrapper = styled.div`
  width: 100%;
  height: 54px;
  padding: 16px 20px;
  gap: 8px;
  border-bottom: 1px;
  display: flex;
  border-bottom: 1px solid #0000000d;
`;
const TitleText = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 18px;
  text-align: left;
  color: #101828;
`;
const TitleEvent = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ff6330;
`;
const EntireContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 20px 0px;
  gap: 24px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 114px;
  gap: 12px;
  display: flex;
  flex-direction: column;
  opacity: 0px;
`;
const Question = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #1d2939;
`;
const Answer = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ff6330;
  resize: none;
`;
