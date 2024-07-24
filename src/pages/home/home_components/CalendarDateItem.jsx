import styled from 'styled-components';

const DateWrapper = styled.div`
  width: 100%;
  max-height: 41.49;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
`;
const DatItem = styled.div`
  width: 36px;
  height: 36px;
  /* font-family: Poppins; */
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: ${({ isToday, isOtherMonth }) => {
    if (isToday) return '#FF6330';
    if (isOtherMonth) return 'blue';
    return '#344054';
  }};
`;

const CalendarDateItem = ({ week, today, currentMonth }) => {
  return (
    <DateWrapper>
      {week.map((day) => {
        const isToday =
          day.getDate() === today && day.getMonth() + 1 === currentMonth;
        const isOtherMonth = day.getMonth() + 1 !== currentMonth;

        return (
          <DatItem
            key={day.toDateString()}
            isToday={isToday}
            isOtherMonth={isOtherMonth}
          >
            {day.getDate()}
          </DatItem>
        );
      })}
    </DateWrapper>
  );
};

export default CalendarDateItem;
