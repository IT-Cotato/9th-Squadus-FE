import HomeHeader from './home_components/HomeHeader';
import MainBanner from './MainBanners';
import MainCalendar from './Calendar';
import MainSchedule from './MainSchedule';
import MainNotice from './MainNotice';
import MainArticle from './MainArticle';
import styled from 'styled-components';

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

const Home = () => {
  return (
    <>
      <FixedContainer>
        <HomeHeader />
      </FixedContainer>
      <ContentContainer>
        <MainBanner></MainBanner>
        <Container>
          <MainCalendar></MainCalendar>
          <MainSchedule></MainSchedule>
          <MainNotice></MainNotice>
          <MainArticle></MainArticle>
        </Container>
      </ContentContainer>
    </>
  );
};

export default Home;
