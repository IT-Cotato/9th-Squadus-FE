import styled from "styled-components";
import { ReactComponent as MemoIcon } from "../../../assets/icons/group/memo.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/group/location.svg";
import { ReactComponent as LinkIcon } from "../../../assets/icons/group/link.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/group/clock.svg";
import { ReactComponent as AlarmIcon } from "../../../assets/icons/group/alarm.svg";

import {
  ToggleSwitch,
  ToggleSlider,
  CheckBox,
} from "./schedule_components/ToggleButton";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GroupContext } from "../Group";

const BaseContainer = styled.div`
  max-width: 649px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  z-index: 10001;
  padding: 4px 20px;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px -2px 87px 0px #475467;
  box-sizing: border-box;
  background-color: #ffffff;
`;
const ModalNavi = styled.div`
  width: 100%;
  height: 78px;
  padding: 20px 0px 36px 0px;
  border-radius: 8px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
`;
const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  color: #101828;
`;
const AddButton = styled.button`
  color: #ff6330;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
`;

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const AddWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 12px 0px;

  border: 1px solid #f9fafb;
`;
const AddInput = styled.input`
  outline: none;
  border: 0px;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  text-align: right;
`;
const AddDateInput = styled.input`
  outline: none;
  border: 0px;
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  text-align: right;
  width: 20px;
`;
const AddTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 12px 6px;
  gap: 8px;
  border: 1px solid F9FAFB;
`;
const TiTlePoint = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 17px;
  background: #ff6330;
  margin-right: 8px;
`;

const TiTleText = styled.input`
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.03em;
  color: #101828;
  outline: none;
  border: 0px;
`;

const ScheduleAdd = ({ isOpen, onClose }) => {
  const [isAllday, setIsAllday] = useState(false);
  const [data, setData] = useState({
    title: "",
    scheduleCategory: "string",
    content: "string",
    authorId: 0,
    location: "",
    equipment: "string",
    date: "2024-08-22",
    startTime: "10:00",
    endTime: "10:00",
  });

  // const { selectedClubId } = useContext(GroupContext);
  // const postScheduleAdd = async () => {
  //   console.log(data);
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${clubid}/schedules`,
  //       data
  //     );
  //     console.log("일정 추가 완료", response.data);
  //   } catch (err) {
  //     console.error("에러 발생:", err);
  //   }
  // };
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "allDay") {
      const dateObj = new Date(value);
      const DATE = `${dateObj.getFullYear()}-${String(
        dateObj.getMonth() + 1
      ).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}`;
      setData({
        ...data,
        date: DATE,
        startTime: "00:00",
        endTime: "24:00",
      });
    } else {
      if (name === "startTime" || name === "endTime") {
        const dateObj = new Date(value);
        const DATE = `${dateObj.getFullYear()}-${String(
          dateObj.getMonth() + 1
        ).padStart(2, "0")}-${String(dateObj.getDate()).padStart(2, "0")}`;

        const formattedTime = `${dateObj.getHours()}:${dateObj.getMinutes()}`;

        setData({
          ...data,
          date: DATE,
          [name]: formattedTime,
        });
      } else {
        setData({
          ...data,
          [name]: value,
        });
      }
    }
    console.log("변경사항", data);
  };

  return (
    <>
      {isOpen && (
        <BaseContainer>
          <ModalNavi>
            <CloseButton onClick={onClose}>취소</CloseButton>
            <AddButton>추가</AddButton>
          </ModalNavi>
          <AddContainer>
            <AddTitle>
              <TiTlePoint />
              <TiTleText
                onChange={onChangeInput}
                name="title"
                placeholder={"제목"}
              />
            </AddTitle>
            <AddWrapper>
              <LocationIcon />
              <AddInput
                name="location"
                onChange={onChangeInput}
                placeholder={"위치"}
              />
            </AddWrapper>
            <AddWrapper>
              <p>하루종일</p>
              <ToggleSwitch>
                <CheckBox
                  type="checkbox"
                  checked={isAllday}
                  onChange={() => setIsAllday(!isAllday)}
                />
                <ToggleSlider />
              </ToggleSwitch>
            </AddWrapper>

            <AddWrapper>
              <ClockIcon />
              {!isAllday ? (
                <>
                  <AddDateInput
                    name="startTime"
                    onChange={onChangeInput}
                    type="datetime-local"
                  />
                  <AddDateInput
                    name="endTime"
                    onChange={onChangeInput}
                    type="datetime-local"
                  />
                </>
              ) : (
                <AddDateInput
                  type="date"
                  name="allDay"
                  onChange={onChangeInput}
                />
              )}
            </AddWrapper>
            <AddWrapper>
              <AlarmIcon /> <p>알람</p>
            </AddWrapper>
            <AddWrapper>
              <LinkIcon /> <AddInput placeholder={"URL"} />
            </AddWrapper>
            <AddWrapper>
              <MemoIcon />{" "}
              <AddInput
                name="content"
                onChange={onChangeInput}
                placeholder={"메모"}
              />
            </AddWrapper>
          </AddContainer>
        </BaseContainer>
      )}
    </>
  );
};

export default ScheduleAdd;
