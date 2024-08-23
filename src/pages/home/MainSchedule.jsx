import styled from "styled-components";
import MainScheduleItem from "./home_components/MainScheduleItem";

const MainSchedule = ({ onClick }) => (
  <Container>
    <ScheduleHeader>
      <ColorHeader>오늘</ColorHeader>의 주요 일정
    </ScheduleHeader>
    <ScheduleContainer>
      <MainScheduleItem onClick={onClick}></MainScheduleItem>
    </ScheduleContainer>
  </Container>
);

export default MainSchedule;

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

const ScheduleHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  display: flex;
  color: #101828;
`;
const ColorHeader = styled.div`
  color: #ff6330;
`;
