import React, { useState } from "react";
import styled from "styled-components";
import close_icon from "../../../assets/icons/close.svg";
import backStep_icon from "../../../assets/icons/backStep.svg";
import {
  CreatePage1,
  CreatePage2,
  CreatePage3,
  CreatePage4,
  CreatePage5,
  CreatePage6,
} from "./CreatePages";
import axios from "axios";

const GroupCreate = ({ closeGroupCreate }) => {
  const [step, setStep] = useState(1);
  const [input, setInput] = useState({
    clubName: "",
    clubCategory: "",
    sportsCategory: "",
    maxMembers: 0,
    clubMessage: "",
    tags: [],
    city: "",
    district: "",
  });

  // 이미지 파일 저장
  const handleImageUpload = (file) => {
    setInput((prev) => ({
      ...prev,
      imageFile: file, // 파일 자체를 저장
    }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    // JSON 데이터를 FormData에 추가
    const jsonPayload = JSON.stringify({
      clubName: input.clubName,
      clubCategory: input.clubCategory,
      sportsCategory: input.sportsCategory,
      maxMembers: input.maxMembers,
      clubMessage: input.clubMessage,
      tags: input.tags,
      city: input.city,
      district: input.district,
    });

    formData.append("clubCreateRequest", jsonPayload);

    // 이미지 파일을 FormData에 추가
    if (input.imageFile) {
      formData.append("logoImage", input.imageFile);
    }
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // access: `${accessToken}`,
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response:", response.data);
      setStep(6);
    } catch (error) {
      console.error("Error uploading the form data", error);
      setStep(6);
    }
  };

  const pages = {
    1: <CreatePage1 input={input} setInput={setInput} />,
    2: <CreatePage2 input={input} setInput={setInput} />,
    3: <CreatePage3 input={input} setInput={setInput} />,
    4: <CreatePage4 input={input} setInput={setInput} />,
    5: (
      <CreatePage5
        input={input}
        setInput={setInput}
        handleImageUpload={handleImageUpload}
      />
    ), // handleImageUpload 전달
    6: <CreatePage6 closeGroupCreate={closeGroupCreate} />,
  };

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          {step === 1 || step === 6 ? (
            <CloseButton onClick={closeGroupCreate} />
          ) : (
            <BackStepButton onClick={() => setStep(step - 1)} />
          )}
          <HeaderTitle>동아리 생성</HeaderTitle>
          <Spacer></Spacer>
        </HeaderContainer>

        {step !== 6 && <Progress step={step} />}
        {pages[step]}

        {step === 6 ? null : step === 5 ? (
          <BottomContainer>
            <NextStepButton onClick={handleSubmit}>완료</NextStepButton>
          </BottomContainer>
        ) : (
          <BottomContainer>
            <NextStepButton onClick={() => setStep(step + 1)}>
              다음
            </NextStepButton>
          </BottomContainer>
        )}
      </Container>
    </WrapperContainer>
  );
};

export default GroupCreate;

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
  background-color: white;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
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

const BackStepButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${backStep_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const Spacer = styled.div`
  height: 24px;
  width: 24px;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 8px 10px 30px 10px;
  border-radius: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
`;

const NextStepButton = styled.button`
  width: 100%;
  padding: 20px 0px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #ff6330;
  color: white;
  font-size: 20px;
`;

const Progress = ({ step }) => {
  return (
    <ProgressWrapper>
      <ProgressComplite $step={step} />
      <ProgressNotYet $RemainingSteps={5 - step} />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  width: 100%;
  height: 2px;
  display: flex;
`;
const ProgressComplite = styled.div`
  height: 100%;
  flex: ${({ $step }) => $step};
  background-color: #ff6330;
  transition: flex 0.5s ease;
`;
const ProgressNotYet = styled.div`
  height: 100%;
  flex: ${({ $RemainingSteps }) => $RemainingSteps};
  background-color: #e4e7ec;
  transition: flex 0.5s ease;
`;
