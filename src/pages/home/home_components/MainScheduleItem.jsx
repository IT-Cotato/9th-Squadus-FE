import styled from "styled-components";

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: row;
  padding: 20px 16px;
  border-radius: 16px;
  background-color: #00a3ff;
  box-shadow: 0px 0px 7px #555ba021;
  gap: 28px;
`;

const ScheduleTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const StartTime = styled.div`
  height: 22px;
  font-size: 20px;
  color: white;
`;

const EndTime = styled.div`
  font-size: 16px;
  color: #c2c6ff;
`;

const ScheduleDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ScheduleTitle = styled.div`
  height: 22px;
  font-size: 20px;
  color: white;
`;

const ScheduleContent = styled.div`
  font-size: 16px;
  color: #c2c6ff;
`;

const MainScheduleItem = () => (
  <Container>
    <ScheduleTime>
      <StartTime>00:00</StartTime>
      <EndTime>~00:00</EndTime>
    </ScheduleTime>
    <ScheduleDetail>
      <ScheduleTitle>Schedule Title</ScheduleTitle>
      <ScheduleContent>Schedule Content</ScheduleContent>
    </ScheduleDetail>
  </Container>
);

export default MainScheduleItem;
