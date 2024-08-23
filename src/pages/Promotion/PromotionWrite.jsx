import { useEffect, useState } from "react";
import arrowdown_icon from "../../assets/icons/group/arrow_down.svg";

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
import { getUserClubs } from "../../apis/api/user";
import axios from "axios";
const AddQuestionInput = styled.input`
  width: 100%;
  height: 46px;
  padding: 12px;
  border-radius: 4px;
  border: 1px;
  border: 1px solid ${({ $isClicked }) => ($isClicked ? "#ff6330" : "#98a2b3")};
  font-family: Pretendard;

  color: ${($isClicked) => ($isClicked ? "#1d2939" : "#98a2b3")};
`;
const PromotionWrite = ({ isOpen, closeModal }) => {
  const today = `${new Date().getFullYear()}-${String(
    new Date().getMonth() + 1
  ).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`;
  const [showGroupSelectList, setShowGroupSelectList] = useState(false);
  const [recentClubName, setRecentClubName] = useState("동아리를 선택하세요");
  const [questionList, setQuestionList] = useState([]);
  const [count, setCount] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState({
    clubId: 0,
    title: "",
    startDate: `${today}`,
    endDate: `${today}`,
    questions: {},
  });
  const accessToken = localStorage.getItem("accessToken");
  const postPromotionAdd = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/recruitments`,
        input, // input을 request body로 보냄
        {
          headers: {
            "Content-Type": "application/json",
            access: `${accessToken}`,
          },
        }
      );
      console.log("홍보글 추가 완료", response.data);
      alert("동아리 홍보글이 등록되었습니다!");
      closeModal();
    } catch (err) {
      console.error("에러 발생:", err);
    }
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (!isNaN(name)) {
      setInput((prevInput) => ({
        ...prevInput,
        questions: {
          ...prevInput.questions,
          [name]: value,
        },
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
    console.log("변경사항", input);
  };

  const [groupData, setGroupData] = useState([]);
  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        const fetchUserClubs = await getUserClubs(accessToken);
        console.log("User Clubs:", fetchUserClubs.memberClubResponseList);
        setGroupData(fetchUserClubs.memberClubResponseList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, []);
  const addQuestion = () => {
    const propName = `${count}`;
    setQuestionList(
      questionList.concat(
        <AddQuestionInput
          key={count}
          $isClicked={isClicked}
          onClick={() => {
            console.log("isClicked:", isClicked);
            setIsClicked(true);
          }}
          name={propName}
          onChange={onChangeInput}
          placeholder={`${count}. 지원서 문항을 입력해주세요`}
        />
      )
    );
    setCount(count + 1);
  };

  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderWrapperContainer>
              <HeaderContainer>
                <CloseButton onClick={closeModal} />
                <HeaderTitle>모집글 작성하기</HeaderTitle>
                <SubmitButton onClick={postPromotionAdd}>등록</SubmitButton>
              </HeaderContainer>
            </HeaderWrapperContainer>
            <Title name="title" onChange={onChangeInput} placeholder="제목" />
            <Line />
            <EntireContainer>
              <Wrapper>
                <WrapperTitle>홍보 동아리</WrapperTitle>

                <ChooseClub>
                  <TitlePlaceholder $choose={recentClubName}>
                    {recentClubName}
                  </TitlePlaceholder>
                  <ArrowDown
                    onClick={(e) => {
                      setShowGroupSelectList(!showGroupSelectList);
                    }}
                  />
                </ChooseClub>
                {showGroupSelectList && (
                  <GroupItemWrapper>
                    {groupData.map((group, index) => {
                      return (
                        <GroupItem
                          key={group.clubId}
                          onClick={() => {
                            setInput({
                              ...input,
                              clubId: group.clubId,
                            });
                            setRecentClubName(group.clubName);
                            setShowGroupSelectList(!showGroupSelectList);
                          }}
                        >
                          {group.clubName}
                        </GroupItem>
                      );
                    })}
                  </GroupItemWrapper>
                )}
              </Wrapper>
              <Wrapper>
                <WrapperTitle>모집 기간</WrapperTitle>
                <SmallWrapper>
                  <WrapperSmallTitle>모집 시작일</WrapperSmallTitle>
                  <ChooseDate
                    type="date"
                    name="startDate"
                    onChange={onChangeInput}
                    value={input.startDate}
                  ></ChooseDate>
                </SmallWrapper>
                <SmallWrapper>
                  <WrapperSmallTitle>모집 마감일</WrapperSmallTitle>
                  <ChooseDate
                    type="date"
                    name="endDate"
                    onChange={onChangeInput}
                    value={input.endDate}
                  ></ChooseDate>
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
  font-family: Pretendard;
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

const ChooseClub = styled.div`
  display: flex;
  width: 100%;
  height: 46px;
  padding: 12px;
  border-radius: 4px;
  border: 1px;
  justify-content: space-between;
  border: 1px solid #ff6330;
`;

const ChooseDate = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px;
  border-radius: 4px;
  border: 1px;
  font-family: Pretendard;

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
const ArrowDown = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${arrowdown_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const GroupItem = styled.div`
  color: #101828;
  font-size: 16px;
  font-weight: 600;
  line-height: 30px;
  word-wrap: break-word;
  text-align: center;
`;

const GroupItemWrapper = styled.div``;
const TitlePlaceholder = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $choose }) =>
    $choose === "동아리를 선택하세요" ? "#98a2b3" : "#101828"};
`;
