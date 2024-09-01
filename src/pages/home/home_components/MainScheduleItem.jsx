import { useContext, useState } from "react";
import ScheduleItem from "../../group/schedule/schedule_components/ScheduleItem";

import { groupDataContext, scheduleContext } from "../Home";
import styled from "styled-components";
import ScheduleAdd from "../../group/schedule/ScheduleAdd";
const MainScheduleItem = ({ onClick }) => {
  const today = new Date();
  const groupData = useContext(groupDataContext);

  const clubSchedule = useContext(scheduleContext);
  const todaySchedule = clubSchedule.filter(
    (item) =>
      new Date(item.date).getFullYear() === today.getFullYear() &&
      new Date(item.date).getMonth() === today.getMonth() &&
      new Date(item.date).getDate() === today.getDate()
  );

  console.log(todaySchedule);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {todaySchedule.length !== 0 ? (
        todaySchedule.map((item, index) => (
          <ScheduleItem
            // onClick={onClick}
            // key={index}
            // startTime={item.startTime}
            // endTime={item.endTime}
            // eventName={item.eventName}
            // Location={item.location}
            // id={index + 1}
            key={index}
            startTime={item.startTime}
            endTime={item.endTime}
            title={item.title}
            Location={item.location}
            id={index + 1}
          />
        ))
      ) : (
        <>
          <EmptyScheduleText>등록된 일정이 없어요</EmptyScheduleText>
        </>
      )}
      {/* <ScheduleAdd
        isOpen={isModalOpen}
        onClose={closeModal}
        isAccessHome={groupData[0]}
      /> */}
    </>
  );
};

export default MainScheduleItem;

const EmptyScheduleText = styled.div`
  padding: 20px 0px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  color: #98a2b3;
`;
