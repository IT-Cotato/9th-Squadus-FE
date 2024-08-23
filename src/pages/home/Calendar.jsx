import styled from "styled-components";
import CalendarDayItem from "./home_components/CalendarDayItem";
import CalendarDateItem from "./home_components/CalendarDateItem";
import { startOfWeek, endOfWeek, addDays } from "date-fns";
const Calendar = ({ onClick }) => {
  const date = new Date();
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];

  const formattedDate = `${date.getMonth() + 1}월 ${date.getDate()}일 (${
    WEEKDAY[date.getDay()]
  })`;
  const week = [];
  let tmpDay = startOfWeek(date, { weekStartsOn: 1 });
  while (tmpDay <= endOfWeek(date, { weekStartsOn: 1 })) {
    week.push(new Date(tmpDay));
    tmpDay = addDays(tmpDay, 1);
  }

  console.log(week);
  return (
    <Container onClick={onClick}>
      <CalendarDiv>
        <NowDate>{formattedDate}</NowDate>
        <CalendarDayItem />
        <CalendarDateItem
          week={week}
          today={date.getDate()}
          currentMonth={date.getMonth() + 1}
        />
      </CalendarDiv>
    </Container>
  );
};

export default Calendar;
const Container = styled.div`
  height: auto;
`;

const CalendarDiv = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  padding: 16px 0;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0px 0px 12px #4a576b1a;
`;

const NowDate = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  color: #ff6330;
`;
