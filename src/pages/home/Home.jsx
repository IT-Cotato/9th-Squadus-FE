import MainBanner from "./MainBanners";
import MainCalendar from "./Calendar";
import MainSchedule from "./MainSchedule";
import MainNotice from "./MainNotice";
import MainArticle from "./MainArticle";

const Home = () => {
  return (
    <>
      <MainBanner></MainBanner>
      <MainCalendar></MainCalendar>
      <MainSchedule></MainSchedule>
      <MainNotice></MainNotice>
      <MainArticle></MainArticle>
    </>
  );
};

export default Home;
