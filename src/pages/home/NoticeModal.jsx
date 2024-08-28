import React, { useContext, useEffect, useState } from "react";
// import {
//   WrapperContainer,
//   Container,
//   HeaderWrapperContainer,
//   HeaderContainer,
//   CloseButton,
//   HeaderTitle,
// } from "./home_components/ModalStyled";
import { groupDataContext } from "./Home";
import axios from "axios";
import styled from "styled-components";
import NotificationItem from "./home_components/ModalNoticeItem";
import arrow_left_button from "../../assets/icons/arrow-left.svg"


const NoticeModal = ({ isOpen, closeModal }) => {
  const groupData = useContext(groupDataContext);

  const [posts, setPosts] = useState([]);
  const getClubAllNotice = async ({ clubId }) => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubId}/posts`)
      .then((res) => {
        // console.log("불러오긴하는거임?????? 공지 전체 res.data :", res.data);
        // console.log("불러오긴하는거임?????? posts :", posts);
        // console.log("불러오긴하는거임?????? groupData :", groupData);
        setPosts((prevPosts) => [...prevPosts, res.data.clubPosts]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (groupData && groupData.length > 0) {
      groupData.forEach((clubId) => {
        getClubAllNotice(clubId);
      });
    }
    console.log("불러오긴하는거임?????? posts :", posts);
    console.log("불러오긴하는거임?????? groupData :", groupData);
  }, [groupData]);
  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderContainer>
              <CloseButton onClick={closeModal} />
              <HeaderTitle>동아리 공지사항</HeaderTitle>
            </HeaderContainer>
            <ContentContainer>
              {groupData.map((item, index) => (
                <React.Fragment key={item.clubId}>
                  <ClubIdHeader>{item.clubName || "클럽 이름 없음"}</ClubIdHeader>
                  <NoticeList>
                    {posts[index]?.map((notice) => (
                      <>
                        <NotificationItem
                          mainTitle={notice.title}
                          createdAt={notice.createdAt}
                        />
                      </>
                    ))}
                  </NoticeList>
                </React.Fragment>
              ))}
            </ContentContainer>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default NoticeModal;


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
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${arrow_left_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
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



const ClubIdHeader = styled.div`
  width: 100%;
  height: 36px;
  padding: 12px 20px 0px 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #ff6330;
`;
const NoticeList = styled.div``;
