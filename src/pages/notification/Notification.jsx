import styled from "styled-components";
import NotificationHeader from "./NotificationHeader";
import NotificationItem from "./NotificationItem";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const NotificationList = styled.div`
  height: 100%;
  overflow: auto;
`;

const Notification = () => {
  const notificationData = [
    { id: "1", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
    { id: "2", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
    { id: "3", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
    { id: "4", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
    { id: "5", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
    { id: "6", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
    { id: "7", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
    { id: "8", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
    { id: "9", mainTitle: "중앙가르드-새로운 공지사항", subTitle: "5월 일정 안내" },
  ];

  return (
    <Container>
      <NotificationHeader />
      <NotificationList>
        {notificationData.map(notification => (
          <NotificationItem
            mainTitle={notification.mainTitle}
            subTitle={notification.subTitle}
          />
        ))}
      </NotificationList>
    </Container>
  );
};

export default Notification;
