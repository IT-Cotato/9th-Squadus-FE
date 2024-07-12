import styled from "styled-components";
import MainNoticeItem from "./home_components/MainNoticeItem";
import SectionHeader from "./home_components/SectionHeader";

const Container = styled.div`
  width: 100%;
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

const MainNotice = () => (
  <Container>
    <SectionHeader></SectionHeader>
    <NoticeContainer>
      <MainNoticeItem></MainNoticeItem>
      <MainNoticeItem></MainNoticeItem>
    </NoticeContainer>
  </Container>
);

export default MainNotice;
