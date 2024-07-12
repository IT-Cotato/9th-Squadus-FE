import MainBanner from "./MainBanners";
import MainCalendar from "./Calendar";
import MainSchedule from "./MainSchedule";
import MainNotice from "./MainNotice";
import MainArticle from "./MainArticle";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 32px;
`;

const Home = () => {
  return (
    <Container>
      <MainBanner></MainBanner>
      <MainCalendar></MainCalendar>
      <MainSchedule></MainSchedule>
      <MainNotice></MainNotice>
      <MainArticle></MainArticle>
    </Container>
  );
};

export default Home;
