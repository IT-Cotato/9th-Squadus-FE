import styled from "styled-components";
import { ChooseRegion } from "../../../components/FilterBar";

export const CreatePage1 = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 1</HeaderStep>
        <HeaderText>동아리의 이름을 알려주세요.</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ContentTitle>동아리 이름</ContentTitle>
        <InputStyled placeholder="동아리명을 입력하세요" />
      </ContentContainer>
    </>
  );
};

export const CreatePage2 = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 2</HeaderStep>
        <HeaderText>동아리의 구분과 활동 지역을 </HeaderText>
        <HeaderText>알려주세요.</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ContentTitle>동아리 구분</ContentTitle>

        <CheckedWrapper>
          <CheckedContainer>
            <CheckBoxStyled type="checkbox" />
            <CheckedTitle>교내</CheckedTitle>
          </CheckedContainer>

          <CheckedContainer>
            <CheckBoxStyled type="checkbox" />
            <CheckedTitle>연합</CheckedTitle>
          </CheckedContainer>
        </CheckedWrapper>
      </ContentContainer>
      <ContentContainer>
        <InputTitle>소속대학</InputTitle>
        <InputStyled />
      </ContentContainer>
      <ContentContainer>
        <ContentTitle>활동 지역</ContentTitle>
        <ChooseRegion />
      </ContentContainer>
    </>
  );
};
export const CreatePage3 = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 3</HeaderStep>
        <HeaderText>어떤 종목의 동아리인가요?</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <InputTitle>직접 입력하기</InputTitle>
        <InputStyled />
      </ContentContainer>
    </>
  );
};
export const CreatePage4 = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 4</HeaderStep>
        <HeaderText>거의 다 왔어요!</HeaderText>
        <HeaderText>동아리의 키워드와 </HeaderText>
        <HeaderText>최대 인원수를 선택해주세요.</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ContentTitle>성격</ContentTitle>
      </ContentContainer>
      <ContentContainer>
        <ContentTitle>최대 인원수</ContentTitle>
      </ContentContainer>
    </>
  );
};
export const CreatePage5 = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 5</HeaderStep>
        <HeaderText>마지막이에요!</HeaderText>
        <HeaderText>동아리 한마디와 </HeaderText>
        <HeaderText>대표이미지를 설정해주세요.</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ContentTitle>동아리 한마디</ContentTitle>
        <InputStyled />
      </ContentContainer>
      <ContentContainer>
        <ContentTitle>대표 이미지 설정</ContentTitle>
      </ContentContainer>
    </>
  );
};
const HeaderContainer = styled.div`
  width: 393px;
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const HeaderStep = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #98a2b3;
`;

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #1d2939;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const ContentTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #1d2939;
`;

const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #98a2b3;
`;
const InputStyled = styled.input`
  width: 100%;
  height: 46px;
  padding: 12px 0px;
  border: 0px;
  border-bottom: 1px solid #d0d5dd;
  outline: none;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #98a2b3;
`;

const CheckBoxStyled = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 50%;
  border: 2px solid #d0d5dd;
  position: relative;
  transition: all 0.3s;

  &:checked {
    background-color: #ff6330;
    border: 1px solid #ff6330;
  }

  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border: 3px solid white;
    border-radius: 50%;
    background-color: transparent;
    transform: translate(-50%, -50%);
  }
`;

const CheckedWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const CheckedContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const CheckedTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #1d2939;
`;
