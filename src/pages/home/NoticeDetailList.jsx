import React from "react";
import styled from "styled-components";
import NoticeItem from "../group/notice/notice_components/NoticeItem";

const NoticeDetailList = () => {
  const noticeData = [
    {
      id: "1",
      group: "동아리 이름 1",
      notice: [
        { id: "1", title: "공지사항", date: "날짜" },
        { id: "2", title: "공지사항", date: "날짜" },
        { id: "3", title: "공지사항", date: "날짜" },
        { id: "4", title: "공지사항", date: "날짜" },
      ],
    },
    {
      id: "2",
      group: "동아리 이름 2",
      notice: [
        { id: "5", title: "공지사항", date: "날짜" },
        { id: "6", title: "공지사항", date: "날짜" },
        { id: "7", title: "공지사항", date: "날짜" },
      ],
    },
    {
      id: "3",
      group: "동아리 이름 3",
      notice: [
        { id: "8", title: "공지사항", date: "날짜" },
        { id: "9", title: "공지사항", date: "날짜" },
        { id: "10", title: "공지사항", date: "날짜" },
      ],
    },
  ];

  const onClickHandler = (id) => {
    //id 를 이용한 routing
  };

  return (
    <Container>
      {noticeData.map((groupData) => (
        <NoticeContainer key={groupData.id}>
          <NoticeGroupTitle>{groupData.group}</NoticeGroupTitle>
          {groupData.notice.map((noticeDetail) => (
            <NoticeItem
              key={noticeDetail.id}
              title={noticeDetail.title}
              date={noticeDetail.date}
              isNew={false}
              onClick={() => onClickHandler(noticeDetail.id)}
            />
          ))}
        </NoticeContainer>
      ))}
    </Container>
  );
};

export default NoticeDetailList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const NoticeContainer = styled.div``;

const NoticeGroupTitle = styled.div`
  color: #ff6330;
  background-color: white;
  padding: 12px 20px 0 20px;
`;
