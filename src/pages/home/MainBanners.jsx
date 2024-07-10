import styled from "styled-components";
import MainBannerItem from "./home_components/MainBannerItem";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20%;
  border: 1px solid;
`;

const MainBanner = () => (
  <Container>
    <MainBannerItem></MainBannerItem>
  </Container>
);

export default MainBanner;
