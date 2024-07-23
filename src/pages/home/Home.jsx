import MainBanner from "./MainBanners";
import MainCalendar from "./Calendar";
import MainSchedule from "./MainSchedule";
import MainNotice from "./MainNotice";
import MainArticle from "./MainArticle";
import EventManager from "../../components/EventManager";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <MainBanner></MainBanner>
      <Container>
        <MainCalendar></MainCalendar>
        <MainSchedule></MainSchedule>
        <MainNotice></MainNotice>
        <MainArticle></MainArticle>
      </Container>
      <EventManager></EventManager>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 16px;
  gap: 32px;
`;
