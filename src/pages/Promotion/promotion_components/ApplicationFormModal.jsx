import styled from "styled-components";
import { WrapperContainer, Container, CloseButton } from "./ModalStyled";
import { ReactComponent as ProfileImg } from "../../../assets/icons/promotion/profileImg.svg";
import api from "../../../apis/utils/api";
const ApplicationFormModal = ({ item, isOpen, closeModal, clubId }) => {
  // { item
  //     applicationId: 0,
  //     recruitingPostId: 0,
  //     memberClubApplicationInfo: {
  //       memberIdx: 0,
  //       username: "김도현",
  //       university: "충북대학교",
  //     },
  //   };

  const memberInfo = item.memberClubApplicationInfo;
  const approval = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubId}/admin/approval/${item.applicationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            access: `${localStorage.getItem("accessToken")}`,
          },
          params: {
            applicationId: item.applicationId,
          },
        }
      );
      console.log("동아리 가입신청 승인", response);
      closeModal();
      alert("동아리 가입신청을 승인하였습니다!");
    } catch (err) {
      console.error("동아리 가입신청 에러 발생:", err);
    }
  };
  const refusal = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubId}/admin/approval/${item.applicationId}`,
        {
          headers: {
            "Content-Type": "application/json",
            access: `${localStorage.getItem("accessToken")}`,
          },
          params: {
            applicationId: item.applicationId,
          },
        }
      );
      console.log("동아리 가입신청 거절", response);
      closeModal();
      alert("동아리 가입신청을 거절하였습니다!");
    } catch (err) {
      console.error("동아리 가입신청 에러 발생:", err);
    }
  };
  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderContainer>
              <CloseButton onClick={closeModal} />
              <HeaderTitle>지원서 검토하기</HeaderTitle>
              <div style={{ width: "24px", height: "24px" }}></div>
            </HeaderContainer>
            <UserInfoContainer>
              <ProfileImg></ProfileImg>
              <UserInfoName>{memberInfo.username}</UserInfoName>
              <UserInfoSchool>{memberInfo.university}</UserInfoSchool>
            </UserInfoContainer>
            <EntireContainer>
              <Wrapper>
                <Question>1. 자신을 소개해주세요.</Question>
                <Answer></Answer>
              </Wrapper>
              <Wrapper>
                <Question>2. 지원 동기가 무엇인가요?</Question>
                <Answer></Answer>
              </Wrapper>
              <Wrapper>
                <Question>3. 동아리를 통해 이루고싶은 목표가 있나요?</Question>
                <Answer></Answer>
              </Wrapper>
            </EntireContainer>
            <Footer>
              <NOButton
                onClick={() => {
                  refusal();
                }}
              >
                반려
              </NOButton>
              <YESButton
                onClick={() => {
                  approval();
                }}
              >
                승인
              </YESButton>
            </Footer>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default ApplicationFormModal;

const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  align-items: center;
`;
const HeaderTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  color: #1d2939;
`;

const UserInfoContainer = styled.div`
  width: 100%;
  height: 212px;
  padding: 0px 20px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInfoName = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 27px;
  text-align: center;
  color: #000000;
`;
const UserInfoSchool = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: #667085;
`;

const Footer = styled.div`
  width: 100%;
  height: 85px;
  padding: 4px 14px 32px 14px;
  gap: 8px;
  display: flex;
`;

const NOButton = styled.div`
  width: 100%;
  height: 49px;
  padding: 12px 8px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667085;
`;
const YESButton = styled.div`
  width: 100%;
  height: 49px;
  padding: 12px 8px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #d0d5dd;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
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
