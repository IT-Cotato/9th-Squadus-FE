import styled from 'styled-components';

const DayWrapper = styled.div`
  width: 100%;
  max-height: 38px;
  padding: 10px 20px 0px 20px;
  display: flex;
  justify-content: space-between;
`;
const DayItem = styled.div`
  width: 36px;
  height: 28px;
  padding: 2px 0px;

  /* font-family: Poppins; */
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
  color: #667085;
`;
const CalendarDayItem = () => (
  <DayWrapper>
    <DayItem>M</DayItem>
    <DayItem>T</DayItem>
    <DayItem>W</DayItem>
    <DayItem>T</DayItem>
    <DayItem>F</DayItem>
    <DayItem>S</DayItem>
    <DayItem>S</DayItem>
  </DayWrapper>
);

export default CalendarDayItem;
