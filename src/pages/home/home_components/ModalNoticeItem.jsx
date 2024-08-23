import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 72px;
  padding: 12px 20px;
  border-bottom: 1px solid #0000000d;
  background: #ffffff;
`;

const MainTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #101828;
`;
const NoticeContent = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #98a2b3;
`;

const NotificationItem = ({ mainTitle, createdAt, isNew }) => {
  useEffect(() => {
    console.log(createdAt);
  }, []);
  return (
    <Container $isNew={isNew}>
      <MainTitle>{mainTitle}</MainTitle>
      <NoticeContent>{createdAt.slice(0, 10)}</NoticeContent>
    </Container>
  );
};

export default NotificationItem;
