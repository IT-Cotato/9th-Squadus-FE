import styled from "styled-components";
import NotificationHeader from "./notification_components/NotificationHeader";
import NotificationItem from "./notification_components/NotificationItem";

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
  return (
    <Container>
      <NotificationHeader />
      <NotificationList>
        <NotificationItem mainTitle="중앙가르드-새로운 공지사항" subTitle="5월 활동 일정 안내" isNew={true} />
        <NotificationItem mainTitle="중앙가르드-새로운 공지사항" subTitle="5월 활동 일정 안내" isNew={true} />
        <NotificationItem mainTitle="중앙가르드-새로운 공지사항" subTitle="5월 활동 일정 안내" isNew={true} />
        <NotificationItem mainTitle="중앙가르드-새로운 공지사항" subTitle="5월 활동 일정 안내" isNew={true} />
        <NotificationItem mainTitle="중앙가르드-새로운 공지사항" subTitle="5월 활동 일정 안내" isNew={false} />
        <NotificationItem mainTitle="중앙가르드-새로운 공지사항" subTitle="5월 활동 일정 안내" isNew={false} />
        <NotificationItem mainTitle="중앙가르드-새로운 공지사항" subTitle="5월 활동 일정 안내" isNew={false} />
        <NotificationItem mainTitle="중앙가르드-새로운 공지사항" subTitle="5월 활동 일정 안내" isNew={false} />
      </NotificationList>
    </Container>
  );
};

export default Notification;
