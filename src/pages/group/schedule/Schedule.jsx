import styled from 'styled-components';
import {
  CalenderContainer,
  GroupCalendar,
} from './schedule_components/Calendar';
import { useState, useEffect, useCallback, useMemo } from 'react';
import ScheduleItem, {
  AddSchedule,
  PlusIcon,
} from './schedule_components/ScheduleItem';
import ScheduleAdd from './ScheduleAdd';

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
  const [selectedSchedule, setSelectedSchedule] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  const mockData = useMemo(
    () => [
      {
        scheduleDate: new Date(2024, 6, 25),
        startTime: '17:00',
        endTime: '19:00',
        eventName: '정기 훈련',
        location: '홍익대학교 체육관',
      },
      {
        scheduleDate: new Date(2024, 6, 25),
        startTime: '19:00',
        endTime: '21:00',
        eventName: '정기 매치',
        location: '홍익대학교 체육관',
      },
    ],
    []
  );

  const filterSchedule = useCallback(
    (newDate) => {
      return mockData.filter(
        (item) =>
          item.scheduleDate.getFullYear() === newDate.getFullYear() &&
          item.scheduleDate.getMonth() === newDate.getMonth() &&
          item.scheduleDate.getDate() === newDate.getDate()
      );
    },
    [mockData]
  );

  const onChange = (newDate) => {
    setDate(newDate);
    const filteredSchedule = filterSchedule(newDate);
    setSelectedSchedule(filteredSchedule);
  };

  useEffect(() => {
    const filteredSchedule = filterSchedule(date);
    setSelectedSchedule(filteredSchedule);
  }, [date, filterSchedule]);

  const formatShortWeekday = (locale, date) => {
    const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    return weekdays[date.getDay()];
  };

  const onClickDay = (value) => {
    onChange(value);
  };
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
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
        {selectedSchedule.map((item, index) => (
          <ScheduleItem
            key={index}
            startTime={item.startTime}
            endTime={item.endTime}
            eventName={item.eventName}
            Location={item.location}
            id={index + 1}
          />
        ))}
        <AddSchedule onClick={toggleModal}>
          <PlusIcon>+</PlusIcon> 새로운 일정 추가하기
        </AddSchedule>
      </ScheduleList>
      <ScheduleAdd isOpen={isModalOpen} onClose={closeModal} />
    </BaseContainer>
  );
};

export default Schedule;
