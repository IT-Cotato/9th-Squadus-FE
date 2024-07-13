import styled from "styled-components";
import MainBannerItem from "./home_components/MainBannerItem";

const Container = styled.div`
  min-height: 20%;
  height: auto;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
`;

const MainBanner = () => (
  <Container>
    <MainBannerItem></MainBannerItem>
  </Container>
);

export default MainBanner;
