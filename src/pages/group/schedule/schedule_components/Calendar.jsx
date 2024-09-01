import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
export const CalenderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  padding: 16px 20px;
  border-radius: 16px;

  //기본 캘린더 css속성
  .react-calendar {
    border: 0px;
    width: 100%;
    line-height: 36px;
    color: #475467;
  }

  //연도 버튼 제거
  .react-calendar__navigation button:nth-child(1),
  .react-calendar__navigation button:nth-child(5) {
    display: none;
  }

  .react-calendar__navigation button {
    color: #475467;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    border-radius: 20px;


    &:focus {
      background-color: ${({ theme }) => theme.colors.neutral[100]}; /* 포커스 상태의 배경색 유지 */
      outline: none; /* 기본 포커스 테두리 제거 */
    }
  }

  .react-calendar__navigation button:enabled:focus{
    width: 15px;
    background: white;
    outline: none;
  }

  //요일 밑줄 제거
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
    font-weight: 800;
  }

  //주말 글씨 빨간색 해제
  .react-calendar__month-view__days__day--weekend {
    color: #000000;
  }

  //이웃 달 글씨 연하게
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #98a2b3;
  }

  .react-calendar__tile {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px; /* padding 제거 */
    position: relative;
    border-radius: 60px;
    abbr {
      color: ${({ theme }) => theme.colors.neutral[700]};
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
    }
  }

  .react-calendar__tile--now {
    border: 2px solid #ff6330;
    background-color: #ffffff;
    border-radius: 60px;
  }

  .react-calendar__tile--active {
    background-color: #ff6330;
    border-radius: 60px;
    abbr {
      color: white;
    }
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #ff6330;
  }

  .react-calendar__tile--active {
    background: #ff6330;
    color: white;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #ff6330;
  }
`;

export const GroupCalendar = styled(Calendar)``;

export const StyledDot = styled.div`
  background-color: #0bde7a;
  border-radius: 50%;
  width: 5.49px;
  height: 5.49px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
`;
