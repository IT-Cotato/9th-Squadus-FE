import styled from "styled-components";
import { useContext } from "react";
import { scheduleContext } from "../Home";

const CalendarDateItem = ({ week, today, currentMonth }) => {
  const clubSchedule = useContext(scheduleContext);
  return (
    <DateWrapper>
      {week.map((day) => {
        const isToday =
          day.getDate() === today && day.getMonth() + 1 === currentMonth;
        const isOtherMonth = day.getMonth() + 1 !== currentMonth;
        const isScheduled = clubSchedule.some(
          (item) =>
            new Date(item.date).getFullYear() === day.getFullYear() &&
            new Date(item.date).getMonth() === day.getMonth() &&
            new Date(item.date).getDate() === day.getDate()
        );
        return (
          <DateItem
            key={day.toDateString()}
            $isToday={isToday}
            $isOtherMonth={isOtherMonth}
          >
            {day.getDate()}
            {isScheduled && <StyledDot />}
          </DateItem>
        );
      })}
    </DateWrapper>
  );
};

export default CalendarDateItem;
const DateWrapper = styled.div`
  width: 100%;
  max-height: 41.49;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
`;
const DateItem = styled.div`
  width: 36px;
  height: 36px;
  /* font-family: Poppins; */
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: ${(props) => {
    if (props.$isToday) return "#FF6330";
    if (props.$isOtherMonth) return "#98A2B3";

    return "#344054";
  }};
`;
const StyledDot = styled.div`
  background-color: #0bde7a;
  border-radius: 50%;
  width: 5.49px;
  height: 5.49px;
  position: relative;
  top: -80%;
  left: 50%;
  transform: translateX(-50%);
`;
