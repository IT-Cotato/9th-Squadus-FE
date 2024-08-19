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
} from "./CreatePages";

const GroupCreate = ({ closeGroupCreate }) => {
  const [step, setStep] = useState(1);

  const NextStep = () => {
    setStep((prevStep) => prevStep + 1); // 다음 단계로 전환
  };
  const BeforeStep = () => {
    setStep((prevStep) => prevStep - 1); // 다음 단계로 전환
  };

  const [clubName, setClubName] = useState("");
  const [clubCategory, setClubCategory] = useState("");
  const [sportsCategory, setSportsCategory] = useState("");
  const [maxMembers, setMaxMembers] = useState(0);
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  // const accessToken = useAuthStore((state) => state.accessToken);

  // const handleSubmit = async () => {
  //   await api
  //     .post(
  //       "/v1/api/clubs",
  //       {
  //         clubName: clubName,
  //         university: university,
  //         sportsCategory: sportsCategory,
  //         logo: logo,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           access: `${accessToken}`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response);
  //       console.log("Response:", response.data);
  //       alert("동아리가 성공적으로 생성되었습니다.");
  //       closeGroupCreate();
  //     })
  //     .catch((error) => {
  //       console.error("동아리 생성 요청 실패:", error);
  //       alert("동아리 생성 요청 실패");
  //     });
  // };

  const pages = {
    1: <CreatePage1 />,
    2: <CreatePage2 />,
    3: <CreatePage3 />,
    4: <CreatePage4 />,
    5: <CreatePage5 />,
  };
  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          {step === 1 ? (
            <CloseButton onClick={closeGroupCreate} />
          ) : (
            <BackStepButton onClick={BeforeStep} />
          )}
          <HeaderTitle>동아리 생성</HeaderTitle>
        </HeaderContainer>

        <Progress step={step} />
        {pages[step]}

        {step === 5 ? (
          <BottomContainer>
            <NextStepButton>완료</NextStepButton>
          </BottomContainer>
        ) : (
          <BottomContainer>
            <NextStepButton onClick={NextStep}>다음</NextStepButton>
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
  justify-content: center;
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

const NextStepButton = styled.button`
  width: 100%;
  height: 62px;
  padding: 20px 0px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: #ff6330;
  color: white;
`;

const BottomContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 8px 10px 30px 10px;
  border-radius: 20px;
  position: fixed;
  bottom: 0;
  background-color: white;
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
