import styled from "styled-components";
import MainNoticeItem from "./home_components/MainNoticeItem";
import SectionHeader from "./home_components/SectionHeader";
import React, { useContext, useEffect, useState } from "react";
import NoticeModal from "./NoticeModal";
import { groupDataContext } from "./Home";
import axios from "axios";

const Container = styled.div`
  min-height: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NoticeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MainNotice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [maxNotice, setMaxNotice] = useState(0);
  const closeModal = () => {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);

    console.log(isModalOpen);
  };

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
    console.log("qqqqqqqqqqqqq? posts :", posts);
    console.log("불러오긴하는거임?????? groupData :", groupData);
  }, [groupData]);

  //<Notice/>
  return (
    <>
      <Container>
        <SectionHeader title={"중요 공지"} onClick={openModal}></SectionHeader>
        <NoticeContainer>
          {groupData.map((item, index) => (
            <React.Fragment key={item.clubId}>
              {posts[index]?.slice(0, 1).map((notice) => (
                <>
                  <MainNoticeItem
                    key={notice.id}
                    mainTitle={notice.title}
                    clubName={item.clubName}
                    createdAt={notice.createdAt}
                  />
                </>
              ))}
            </React.Fragment>
          ))}
        </NoticeContainer>
      </Container>
      <NoticeModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default MainNotice;
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
const NoticeList = styled.div`
  height: 200px;
`;
