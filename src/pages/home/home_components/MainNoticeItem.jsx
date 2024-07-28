import styled from "styled-components";

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 0px 10px gray;
  gap: 4px;
`;

const NoticeTitle = styled.div`
  height: 22px;
  color: #1d2939;
`;

const NoticeContent = styled.div`
  color: #98a2b3;
`;

const MainNoticeItem = () => (
  <Container>
    <NoticeTitle>Notice Title</NoticeTitle>
    <NoticeContent>Notice Content</NoticeContent>
  </Container>
);

export default MainNoticeItem;
