import styled from 'styled-components';
import { CalenderContainer, GroupCalendar } from './group_components/Calendar';
import { useState } from 'react';
import ScheduleItem, {
  AddSchedule,
  PlusIcon,
} from './group_components/ScheduleItem';

const BaseContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 16px 20px;

  display: flex;

  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
`;
const ScheduleList = styled.div`
  width: 100%;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 26px 26px 0px 0px;
  box-shadow: 0px -2px 12px 0px #555ba021;
  box-sizing: border-box;
`;
const ScheduleTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: #344054;
`;
const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
  const onChange = (newDate) => {
    setDate(newDate);
  };

  const formatShortWeekday = (locale, date) => {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return weekdays[date.getDay()];
  };
  const onClickDay = () => {};
  return (
    <BaseContainer>
      <CalenderContainer>
        <GroupCalendar
          value={date}
          onChange={onChange}
          onClickDay={onClickDay}
          formatDay={(locale, date) => date.getDate()}
          navigationLabel={({ date, view }) => `${date.getMonth() + 1}월`}
          formatShortWeekday={formatShortWeekday}
        />
      </CalenderContainer>
      <ScheduleList>
        <ScheduleTitle>{formattedDate}</ScheduleTitle>
        <ScheduleItem
          startTime={'17:00'}
          endTime={'19:00'}
          eventName={'정기 훈련'}
          Location={'홍익대학교 체육관'}
          id={1}
        />
        <ScheduleItem
          startTime={'19:00'}
          endTime={'21:00'}
          eventName={'정기 매치'}
          Location={'홍익대학교 체육관'}
          id={2}
        />
        <AddSchedule>
          <PlusIcon>+</PlusIcon> 새로운 일정 추가하기
        </AddSchedule>
      </ScheduleList>
    </BaseContainer>
  );
};

export default Schedule;
