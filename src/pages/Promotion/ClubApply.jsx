import React, { useState } from "react";
import styled from "styled-components";
// import {
//   WrapperContainer,
//   Container,
//   HeaderWrapperContainer,
//   HeaderContainer,
//   CloseButton,
//   HeaderTitle,
//   SubmitButton,
// } from "./promotion_components/ModalStyled";
import api from "../../apis/utils/api";
import close_icon from "../../assets/icons/close.svg"


const ClubApply = ({
  isOpen,
  closeModal,
  clubId,
  clubName,
  sportsCategory,
  recruitingPostId,
}) => {
  const accessToken = localStorage.getItem("accessToken");
  const [input, setInput] = useState({
    1: "",
    2: "",
    3: "",
  });
  const postClubApply = async () => {
    try {
      const requestBody = {
        recruitingPostId: recruitingPostId,
        answers: {
          1: input["1"],
          2: input["2"],
          3: input["3"],
        },
      };
      console.log("requestBody 테스트", requestBody);
      const response = await api.post(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubId}`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
            access: `${accessToken}`,
          },
          params: {
            clubMemberId: clubId,
          },
        }
      );
      console.log("동아리 가입신청 완료", response.data);
      closeModal();
      alert("동아리 가입신청이 완료되었습니다!");
    } catch (err) {
      console.error("에러 발생:", err);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
    console.log("변경사항", input);
  };
  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderContainer>
              <CloseButton onClick={closeModal} />
              <HeaderTitle>동아리 지원</HeaderTitle>
              <SubmitButton onClick={postClubApply}>지원</SubmitButton>
            </HeaderContainer>
            <ContentContainer>
              <TitleWrapper>
                <TitleText>{clubName}</TitleText>
                <TitleEvent>{sportsCategory}</TitleEvent>
              </TitleWrapper>
              <EntireContainer>
                <Wrapper>
                  <Question>1. 자신을 소개해주세요.</Question>
                  <Answer
                    placeholder="답변을 입력하세요"
                    name="1"
                    onChange={onChangeInput}
                  ></Answer>
                </Wrapper>
                <Wrapper>
                  <Question>2. 지원 동기가 무엇인가요?</Question>
                  <Answer
                    placeholder="답변을 입력하세요"
                    name="2"
                    onChange={onChangeInput}
                  ></Answer>
                </Wrapper>
                <Wrapper>
                  <Question>3. 동아리를 통해 이루고싶은 목표가 있나요?</Question>
                  <Answer
                    placeholder="답변을 입력하세요"
                    name="3"
                    onChange={onChangeInput}
                  ></Answer>
                </Wrapper>
              </EntireContainer>
            </ContentContainer>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default ClubApply;


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
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  gap: 4px;
  border-bottom: 1px solid #dcdcdc;
  justify-content: space-between;
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
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: 600;
`;

const SubmitButton = styled.div`
  color: ${({ theme }) => theme.colors.main[600]};
  font-size: 20px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;



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

  padding: 20px 20px;
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
  font-family: Pretendard;
  width: 100%;
  height: 80px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ff6330;
  resize: none;
`;
