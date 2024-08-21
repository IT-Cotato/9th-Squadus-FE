import styled from "styled-components";
import NoticeItem from "./notice_components/NoticeItem";
import NoticeCreate from "./NoticeCreate";
import NoticeDetail from "./NoticeDetail";
import { useState, useContext, useEffect } from "react";
import create_icon from "../../../assets/icons/write.svg";
import { GroupContext } from "../Group";
import { getNotices } from "../../../apis/api/notice";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FloatingButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 32px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
`;

const CreateIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${create_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const NoticeList = styled.div`
  height: 100%;
  overflow: auto;
`;

const Notice = () => {
  const { selectedClubId } = useContext(GroupContext);
  const [noticesData, setNoticesData] = useState([]);
  const [showNoticeCreate, setShowNoticeCreate] = useState(false);
  const [showNoticeDetail, setShowNoticeDetail] = useState(false);
  const [selectedNoticeId, setSelectedNoticeId] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken"); // 저장된 accessToken 가져오기
        if (accessToken && selectedClubId) {
          const notices = await getNotices(accessToken, selectedClubId);
          setNoticesData(notices.clubPosts || []);
        }
      } catch (error) {
        console.error("공지사항 가져오는 중 오류 발생:", error);
      }
    };

    fetchNotices();
  }, [selectedClubId]);

  const handleNoticeClick = (id) => {
    setSelectedNoticeId(id);
    setShowNoticeDetail(true);
  };

  // const noticeData = [
  //   { id: "1", title: "공지사항1", date: "2024.05.30" },
  //   { id: "2", title: "공지사항임", date: "2024.05.30" },
  //   { id: "3", title: "공지사항~~", date: "2024.05.30" },
  //   { id: "4", title: "공지사항", date: "2024.05.30" },
  // ];

  return (
    <Container>
      <NoticeList>
        {noticesData.length > 0 ? (
          noticesData.map((notice) => (
            <NoticeItem
              key={notice.postId}
              title={notice.title}
              date={notice.createdAt}
              onClick={() => handleNoticeClick(notice.postId)}
            />
          ))
        ) : (
          <p>해당 동아리의 공지사항이 없습니다.</p>
        )}
      </NoticeList>

      <FloatingButton
        onClick={() => {
          setShowNoticeCreate(true);
        }}
      >
        <CreateIcon />
      </FloatingButton>

      {showNoticeCreate && (
        <NoticeCreate
          closeNoticeCreate={() => setShowNoticeCreate(false)}
        />
      )}

      {showNoticeDetail && (
        <NoticeDetail 
          closeNoticeDetail={() => setShowNoticeDetail(false)} 
          noticeId={selectedNoticeId}
        />
      )}
    </Container>
  );
};

export default Notice;
