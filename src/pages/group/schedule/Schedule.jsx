import styled from "styled-components";
import {
  CalenderContainer,
  GroupCalendar,
  StyledDot,
} from "./schedule_components/Calendar";
import { useState, useEffect, useCallback, useMemo } from "react";
import ScheduleItem, {
  AddSchedule,
  PlusIcon,
} from "./schedule_components/ScheduleItem";
import ScheduleAdd from "./ScheduleAdd";
import axios from "axios";
const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
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
  const [clubSchedule, setClubSchedule] = useState([]);
  const getClubSchedule = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/1/schedules`)
      .then((res) => {
        console.log(res.data);
        setClubSchedule(res.data.schedules);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getClubSchedule();
  }, []);

  const [date, setDate] = useState(new Date());
  const [selectedSchedule, setSelectedSchedule] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const formattedDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;

  const filterSchedule = useCallback(
    (newDate) => {
      return clubSchedule.filter(
        (item) =>
          new Date(item.date).getFullYear() === newDate.getFullYear() &&
          new Date(item.date).getMonth() === newDate.getMonth() &&
          new Date(item.date).getDate() === newDate.getDate()
      );
    },
    [clubSchedule]
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
    const weekdays = ["S", "M", "T", "W", "T", "F", "S"];
    return weekdays[date.getDay()];
  };

  const onClickDay = (value) => {
    onChange(value);
  };
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const isScheduled = clubSchedule.some(
        (item) =>
          new Date(item.date).getFullYear() === date.getFullYear() &&
          new Date(item.date).getMonth() === date.getMonth() &&
          new Date(item.date).getDate() === date.getDate()
      );

      if (isScheduled) {
        return <StyledDot />;
      }
    }
    return null;
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
          tileContent={tileContent}
        />
      </CalenderContainer>
      <ScheduleList>
        <ScheduleTitle>{formattedDate}</ScheduleTitle>
        {selectedSchedule.map((item, index) => (
          <ScheduleItem
            key={index}
            startTime={item.startTime}
            endTime={item.endTime}
            title={item.title}
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
