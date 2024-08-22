import HomeHeader from "./home_components/HomeHeader";
import MainBanner from "./MainBanners";
import MainCalendar from "./Calendar";
import MainSchedule from "./MainSchedule";
import MainNotice from "./MainNotice";
import MainArticle from "./MainArticle";
import styled from "styled-components";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { getUserClubs, getUserInfo } from "../../apis/api/user";
import CalendarModal from "./CalendarModal";

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
export const groupDataContext = createContext();
const Home = () => {
  const [groupData, setGroupData] = useState([]); //유저가 속한 동아리 데이터

  const [clubSchedule, setClubSchedule] = useState([]);
  const getClubSchedule = async ({ clubId }) => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubId}/schedules`
      )
      .then((res) => {
        console.log(res.data);
        setClubSchedule((prevSchedules) => [
          ...prevSchedules,
          ...res.data.schedules,
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchGroup = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      const fetchUserClubs = await getUserClubs(accessToken);
      console.log("User Clubs:", fetchUserClubs);
      setGroupData(fetchUserClubs.memberClubResponseList);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchGroup();
  }, []);

  useEffect(() => {
    if (groupData.length > 0) {
      groupData.forEach((clubId) => {
        getClubSchedule(clubId);
      });
    }
  }, [groupData]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);

    console.log(isModalOpen);
  };
  return (
    <>
      <FixedContainer>
        <HomeHeader />
      </FixedContainer>
      <ContentContainer>
        <MainBanner></MainBanner>
        <Container>
          <scheduleContext.Provider value={clubSchedule}>
            <MainCalendar onClick={openModal}></MainCalendar>
            <MainSchedule onClick={openModal}></MainSchedule>
            <CalendarModal
              isOpen={isModalOpen}
              closeModal={closeModal}
            ></CalendarModal>
          </scheduleContext.Provider>
          <groupDataContext.Provider value={groupData}>
            <MainNotice></MainNotice>
            <MainArticle></MainArticle>
          </groupDataContext.Provider>
        </Container>
      </ContentContainer>
    </>
  );
};

export default Home;
