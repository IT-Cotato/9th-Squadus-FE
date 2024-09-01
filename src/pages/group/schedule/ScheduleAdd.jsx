import styled from "styled-components";
import { ReactComponent as MemoIcon } from "../../../assets/icons/group/memo.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/group/location.svg";
import { ReactComponent as LinkIcon } from "../../../assets/icons/group/link.svg";
import { ReactComponent as ClockIcon } from "../../../assets/icons/group/clock.svg";
import { ReactComponent as AlarmIcon } from "../../../assets/icons/group/alarm.svg";
import { ReactComponent as CalendarIcon } from "../../../assets/icons/match/calendar-grey.svg"
import api from "../../../apis/utils/api";

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
  border-radius: 16px 16px 0px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const DateHeader = styled.div`
  width: 100%;
  padding: 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[600]};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[100]};;
  padding: 20px;
`;

const ModalNavi = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[100]};
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
  gap: 30px;
  padding: 0px 20px;
`;

const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const AddWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8px;
  justify-content: space-between;
`;


const AddInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  color: #101828;
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  padding: 12px;
  border-radius: 12px;
`;

const AddHourInput = styled.input`
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
  padding: 16px 0px;
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

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 16px;
  font-weight: 500;
`;

const Label = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 16px;
  font-weight: 500;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Select = styled.select`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.main[500]};
  }
`;

const ScheduleAdd = ({ date, isOpen, onClose, isAccessHome }) => {

  // const [isAllday, setIsAllday] = useState(false);
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [endHour, setEndHour] = useState("");
  const [endMinute, setEndMinute] = useState("");

  const initialDate = new Date(date); 
  const formattedDate = `${initialDate.getFullYear()}-${String(
    initialDate.getMonth() + 1
  ).padStart(2, "0")}-${String(initialDate.getDate()).padStart(2, "0")}`;


  const [data, setData] = useState({
    title: "",
    scheduleCategory: "MEETING",
    content: "",
    authorId: 0,
    location: "",
    equipment: "",
    date: formattedDate,
    startTime: "10:00",
    endTime: "10:00",
  });

  console.log(formattedDate);

  // 기본값을 포함하여 context 사용
  const context = useContext(GroupContext) || {
    groupData: [{ clubId: null }],
    chooseClubId: 0,
  };
  
  // 안전한 접근을 위해 기본값 설정
  let selectedClubId = context.groupData[context.chooseClubId]?.clubId || null;
  const checkClubId = () => {
    if (isAccessHome) {
      setData((prevData) => ({
        ...prevData,
        authorId: isAccessHome.clubMemberIdx,
      }));
      selectedClubId = isAccessHome.clubId;
    } 
  };

  useEffect(() => {
    checkClubId();
  }, [isAccessHome, selectedClubId]);

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      date: formattedDate, // date가 변경되면 다시 설정
    }));
  }, [date]); 

  const postScheduleAdd = async () => {
    console.log("일정 등록 데이터:", data);
    console.log("일정 등록 요청 주소:", selectedClubId);
    checkClubId();
    try {
      const response = await api.post(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${selectedClubId}/schedules`,
        data
      );
      console.log("일정 추가 완료", response.data);
      alert("일정 등록을 완료하였습니다!");
      onClose();
    } catch (err) {
      console.error("에러 발생:", err);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onTimeChange = (type, time) => {
    setData((prevData) => ({
      ...prevData,
      [type]: time,
    }));
  };

  const handleStartTimeChange = () => {
    const startTime = `${String(startHour).padStart(2, "0")}:${String(startMinute).padStart(2, "0")}`;
    onTimeChange("startTime", startTime);
  };

  const handleEndTimeChange = () => {
    const endTime = `${String(endHour).padStart(2, "0")}:${String(endMinute).padStart(2, "0")}`;
    onTimeChange("endTime", endTime);
  };

  useEffect(() => {
    handleStartTimeChange();
  }, [startHour, startMinute]);

  useEffect(() => {
    handleEndTimeChange();
  }, [endHour, endMinute]);

  const showDate = `${initialDate.getFullYear()}년 ${
    initialDate.getMonth() + 1
  }월 ${initialDate.getDate()}일`;


  return (
    <>
      {isOpen && (
        <BaseContainer>
          <ModalNavi>
            <CloseButton onClick={onClose}>취소</CloseButton>
            <AddButton onClick={postScheduleAdd}>추가</AddButton>
          </ModalNavi>
          <DateHeader>{showDate}</DateHeader>
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
              <LabelContainer>
                <LocationIcon /> 
                <Label>위치</Label>
              </LabelContainer>
              <AddInput
                name="location"
                onChange={onChangeInput}
                placeholder={"장소를 입력하세요"}
              />
            </AddWrapper>
            <AddWrapperRow>
              <LabelContainer>
                <ClockIcon /> 
                <Label>시작 시간</Label>
              </LabelContainer>
              <SelectContainer>
                <Select
                  value={startHour}
                  onChange={(e) => setStartHour(e.target.value)}
                >
                  <option value="">시</option>
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}시
                    </option>
                  ))}
                </Select>
                <Select
                  value={startMinute}
                  onChange={(e) => setStartMinute(e.target.value)}
                >
                  <option value="">분</option>
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}분
                    </option>
                  ))}
                </Select>
              </SelectContainer>
            </AddWrapperRow>
            <AddWrapperRow>
              <LabelContainer>
                <ClockIcon />
                <Label>끝나는 시간</Label>
              </LabelContainer>
              <SelectContainer>
                <Select
                  value={endHour}
                  onChange={(e) => setEndHour(e.target.value)}
                >
                  <option value="">시</option>
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}시
                    </option>
                  ))}
                </Select>
                <Select
                  value={endMinute}
                  onChange={(e) => setEndMinute(e.target.value)}
                >
                  <option value="">분</option>
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}분
                    </option>
                  ))}
                </Select>
              </SelectContainer>
            </AddWrapperRow>
            <AddWrapper>
              <LabelContainer>
                <MemoIcon />
                <Label>준비물</Label>
              </LabelContainer>
              <AddInput
                name="equipment"
                onChange={onChangeInput}
                placeholder={"준비물을 입력하세요"}
              />
            </AddWrapper>
          </AddContainer>
        </BaseContainer>
      )}
    </>
  );
};

export default ScheduleAdd;
