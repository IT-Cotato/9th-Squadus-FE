import styled from "styled-components";
import MainScheduleItem from "./home_components/MainScheduleItem";
import SectionHeader from "./home_components/SectionHeader";

const Container = styled.div`
  width: 100%;
  min-height: 20%;
  height: auto;
  border: 1px solid;
`;

const MainSchedule = () => (
  <Container>
    <SectionHeader></SectionHeader>
    <MainScheduleItem></MainScheduleItem>
  </Container>
);

export default MainSchedule;
