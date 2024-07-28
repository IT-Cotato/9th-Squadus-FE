import styled from "styled-components";
import MainScheduleItem from "./home_components/MainScheduleItem";
import SectionHeader from "./home_components/SectionHeader";

const Container = styled.div`
  min-height: 20%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MainSchedule = () => (
  <Container>
    <SectionHeader></SectionHeader>
    <ScheduleContainer>
      <MainScheduleItem></MainScheduleItem>
      <MainScheduleItem></MainScheduleItem>
    </ScheduleContainer>
  </Container>
);

export default MainSchedule;
