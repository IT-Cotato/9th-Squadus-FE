import styled from "styled-components";
import MainNoticeItem from "./home_components/MainNoticeItem";

const Container = styled.div`
  width: 100%;
  min-height: 20%;
  height: auto;
  border: 1px solid;
`;

const MainNotice = () => (
  <Container>
    <MainNoticeItem></MainNoticeItem>
  </Container>
);

export default MainNotice;
