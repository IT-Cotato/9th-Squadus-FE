import { useContext } from "react";
import ScheduleItem from "../../group/schedule/schedule_components/ScheduleItem";
import { scheduleContext } from "../Home";
const MainScheduleItem = () => {
  const today = new Date();

  const clubSchedule = useContext(scheduleContext);
  const todaySchedule = clubSchedule.filter(
    (item) =>
      new Date(item.date).getFullYear() === today.getFullYear() &&
      new Date(item.date).getMonth() === today.getMonth() &&
      new Date(item.date).getDate() === today.getDate()
  );

  console.log(todaySchedule);

  return (
    <>
      {todaySchedule.length !== 0 ? (
        todaySchedule.map((item, index) => (
          <ScheduleItem
            key={index}
            startTime={item.startTime}
            endTime={item.endTime}
            eventName={item.eventName}
            Location={item.location}
            id={index + 1}
          />
        ))
      ) : (
        <h1>오늘의 일정은 없습니다!</h1>
      )}
    </>
  );
};

export default MainScheduleItem;
