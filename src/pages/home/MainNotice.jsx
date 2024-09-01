import styled from "styled-components";
import MainNoticeItem from "./home_components/MainNoticeItem";
import SectionHeader from "./home_components/SectionHeader";
import React, { useContext, useEffect, useState } from "react";
import NoticeModal from "./NoticeModal";
import { groupDataContext } from "./Home";
import axios from "axios";

const Container = styled.div`
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

const EmptyStateMessage = styled.div`
  color: #98a2b3;
  font-weight: 500;
  padding: 20px 12px;
  text-align: center;
  font-size: 18px;
`;

const MainNotice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [maxNotice, setMaxNotice] = useState(0);
  const groupData = useContext(groupDataContext);
  const [posts, setPosts] = useState([]);

  const closeModal = () => {
    setIsModalOpen(false);
    console.log(isModalOpen);
  };
  const openModal = () => {
    setIsModalOpen(true);

    console.log(isModalOpen);
  };

  const getClubAllNotice = async (clubId) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubId}/posts`);
      return res.data.clubPosts;
    } catch (err) {
      console.log(err);
      return []; // 요청이 실패하면 빈 배열을 반환
    }
  };

  useEffect(() => {
    const fetchNotices = async () => {
      if (groupData && groupData.length > 0) {
        const results = Array(groupData.length).fill([]); // 각 클럽의 결과를 저장할 배열 초기화

        for (let i = 0; i < groupData.length; i++) {
          const { clubId } = groupData[i];
          const notices = await getClubAllNotice(clubId);
          results[i] = notices;
          setPosts([...results]); // 각 요청이 완료될 때마다 상태 업데이트
        }

        console.log("results: ", results);
      }
    };

    fetchNotices();
  }, [groupData]);

  return (
    <>
      <Container>
        <SectionHeader title={"중요 공지"} onClick={openModal}></SectionHeader>
        <NoticeContainer>
          {posts.length === 0 ? (
            <EmptyStateMessage>아직 공지가 없어요</EmptyStateMessage>
          ) : (
            groupData.map((item, index) => (
              <React.Fragment key={item.clubId}>
                {posts[index]?.slice(0, 1).map((notice) => (
                  <MainNoticeItem
                    key={notice.id}
                    mainTitle={notice.title}
                    clubName={item.clubName}
                    createdAt={notice.createdAt}
                  />
                ))}
              </React.Fragment>
            ))
          )}
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
