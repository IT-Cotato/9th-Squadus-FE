import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 16px 18px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 0px #9499cc3b;
`;

const NoticeTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #101828;
`;

const NoticeContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #667085;
`;
const ContentWrapper = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  gap: 8px;
`;
const MainNoticeItem = ({ mainTitle, clubName, createdAt }) => {
  return (
    <Container>
      <NoticeTitle>{mainTitle}</NoticeTitle>
      <ContentWrapper>
        <NoticeContent>{clubName}</NoticeContent>
        <NoticeContent>{createdAt.slice(0, 10)}</NoticeContent>
      </ContentWrapper>
    </Container>
  );
};

export default MainNoticeItem;
