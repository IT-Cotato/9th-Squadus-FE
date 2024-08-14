import HomeHeader from "./home_components/HomeHeader";
import MainBanner from "./MainBanners";
import MainCalendar from "./Calendar";
import MainSchedule from "./MainSchedule";
import MainNotice from "./MainNotice";
import MainArticle from "./MainArticle";
import styled from "styled-components";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  gap: 32px;
`;
export const scheduleContext = createContext();
const Home = () => {
  const [clubSchedule, setClubSchedule] = useState([]);
  const getClubSchedule = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/1/schedules`)
      .then((res) => {
        console.log(res.data);
        setClubSchedule(res.data.schedules);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClubSchedule();
  }, []);

  return (
    <>
      <FixedContainer>
        <HomeHeader />
      </FixedContainer>
      <ContentContainer>
        <MainBanner></MainBanner>
        <Container>
          <scheduleContext.Provider value={clubSchedule}>
            <MainCalendar></MainCalendar>
            <MainSchedule></MainSchedule>
          </scheduleContext.Provider>
          <MainNotice></MainNotice>
          <MainArticle></MainArticle>
        </Container>
      </ContentContainer>
    </>
  );
};

export default Home;
