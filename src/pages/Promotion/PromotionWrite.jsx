import { useState } from "react";
import {
  WrapperContainer,
  Container,
  HeaderWrapperContainer,
  HeaderContainer,
  CloseButton,
  HeaderTitle,
  SubmitButton,
} from "./promotion_components/ModalStyled";
import styled from "styled-components";
const AddQuestionInput = styled.input`
  width: 100%;
  height: 46px;
  padding: 12px;
  border-radius: 4px;
  border: 1px;
  border: 1px solid ${({ $isClicked }) => ($isClicked ? "#ff6330" : "#98a2b3")};

  color: ${($isClicked) => ($isClicked ? "#1d2939" : "#98a2b3")};
`;
const PromotionWrite = ({ isOpen, closeModal }) => {
  const [questionList, setQuestionList] = useState([]);
  const [count, setCount] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const addQuestion = () => {
    setQuestionList(
      questionList.concat(
        <AddQuestionInput
          key={count}
          $isClicked={isClicked}
          onClick={() => {
            console.log("isClicked:", isClicked);
            setIsClicked(true);
          }}
          placeholder={`${count}. 지원서 문항을 입력해주세요`}
        />
      )
    );
    setCount(count + 1);
  };

  const today = `${new Date().getFullYear()}-${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`;

  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderWrapperContainer>
              <HeaderContainer>
                <CloseButton onClick={closeModal} />
                <HeaderTitle>모집글 작성하기</HeaderTitle>
                <SubmitButton>등록</SubmitButton>
              </HeaderContainer>
            </HeaderWrapperContainer>
            <Title placeholder="제목" />
            <Line />
            <EntireContainer>
              <Wrapper>
                <WrapperTitle>홍보 동아리</WrapperTitle>
                <ChooseClub></ChooseClub>
              </Wrapper>
              <Wrapper>
                <WrapperTitle>모집 기간</WrapperTitle>
                <SmallWrapper>
                  <WrapperSmallTitle>모집 시작일</WrapperSmallTitle>
                  <ChooseDate type="date" value={today}></ChooseDate>
                </SmallWrapper>
                <SmallWrapper>
                  <WrapperSmallTitle>모집 마감일</WrapperSmallTitle>
                  <ChooseDate type="date" value={today}></ChooseDate>
                </SmallWrapper>
              </Wrapper>
              <Wrapper>
                <WrapperTitle>지원서 문항</WrapperTitle>
                <QuestionList>{questionList}</QuestionList>
                <AddQuestionButton onClick={addQuestion}>
                  <AddButtonPlus>+</AddButtonPlus>
                  <AddButtonText>문항 추가하기</AddButtonText>
                </AddQuestionButton>
              </Wrapper>
            </EntireContainer>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default PromotionWrite;
const EntireContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 24px;
  overflow-y: auto;
`;
const Title = styled.input`
  width: 100%;
  height: 54px;
  padding: 16px 20px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #98a2b3;
`;
const Line = styled.div`
  border-bottom: 1px solid #0000000d;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const WrapperTitle = styled.div`
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #1d2939;
`;
const SmallWrapper = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: column;
`;
const WrapperSmallTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #98a2b3;
`;

const ChooseClub = styled.select`
  width: 100%;
  height: 46px;
  padding: 12px;
  border-radius: 4px;
  justify-content: space-between;
  border: 1px solid #ff6330;
  outline: none;
`;

const ChooseDate = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px;
  border-radius: 4px;
  border: 1px;

  border: 1px solid #ff6330;
  outline: none;
`;

const QuestionList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddQuestionButton = styled.div`
  width: 100%;
  height: 65px;
  padding: 0px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

const AddButtonText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #98a2b3;
`;
const AddButtonPlus = styled.div`
  font-size: 40px;
  font-weight: 300;
  line-height: 30px;
  color: #98a2b3;
`;
