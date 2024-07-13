import styled from "styled-components";

const Container = styled.div`
  min-height: 20%;
  height: auto;
`;

//라이브러리 상용할 것임
const CalendarDiv = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 0px 12px #4a576b1a;
`;

const Calendar = () => (
  <Container>
    <CalendarDiv>i'm calendar</CalendarDiv>
  </Container>
);

export default Calendar;
