import React, { useContext, useEffect, useState } from "react";
import {
  WrapperContainer,
  Container,
  HeaderWrapperContainer,
  HeaderContainer,
  CloseButton,
  HeaderTitle,
} from "./home_components/ModalStyled";
import { groupDataContext } from "./Home";
import axios from "axios";
import styled from "styled-components";
import NotificationItem from "./home_components/ModalNoticeItem";

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
            <HeaderWrapperContainer>
              <HeaderContainer>
                <CloseButton onClick={closeModal} />
                <HeaderTitle>동아리 공지사항</HeaderTitle>
              </HeaderContainer>
            </HeaderWrapperContainer>

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
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default NoticeModal;

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
