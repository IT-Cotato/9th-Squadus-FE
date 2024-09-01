import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarContainer = styled.div`
  top: 100%;
  position: absolute;
  right: 0;
  z-index: 1000;
`;

const StyledCalendar = styled(Calendar)`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: 16px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;

  .react-calendar__navigation {
    span {
      font-size: 18px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.main[600]};
    }

    /* button {
      width: 50px;
      height: 50px;
      font-size: 20px;
      border-radius: 10px;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
    } */
  }

  //연도 버튼 제거
  .react-calendar__navigation button:nth-child(1),
  .react-calendar__navigation button:nth-child(5) {
    display: none;
  }

  .react-calendar__navigation button {
    width: 50px;
    height: 50px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

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

  .react-calendar__month-view__weekdays .react-calendar__month-view__weekdays__weekday {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutral[600]};
    font-weight: 600;
  }

  .react-calendar__tile {
    padding: 8px;
    abbr {
      color: ${({ theme }) => theme.colors.neutral[600]};
      text-decoration: none;
      font-size: 18px;
    }
  }

  .react-calendar__tile--hasActive {
    background: ${({ theme }) => theme.colors.main[600]};
    border-radius: 20px;

    abbr {
      color: white;
      text-decoration: none;
    }
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.colors.neutral[100]};
    border-radius: 20px;

    abbr {
      color: ${({ theme }) => theme.colors.neutral[600]};
      text-decoration: none;
    }
  }

  .react-calendar__tile--active {
    background: ${({ theme }) => theme.colors.main[600]};
    border-radius: 20px;

    abbr {
      color: white;
      text-decoration: none;
    }
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${({ theme }) => theme.colors.main[100]};
    border-radius: 20px;

    abbr {
      color: ${({ theme }) => theme.colors.neutral[600]};
      text-decoration: none;
    }
  }

  .react-calendar__month-view__weekdays {
    abbr {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.neutral[600]};
    }
  }

  /* 저번 달 & 다음 달 일자 */
  .react-calendar__month-view__days__day--neighboringMonth{
    abbr {
      color: ${({ theme }) => theme.colors.neutral[300]};
    }
  }
`;

const CustomCalendar = ({ value, onChange }) => {
    return (
      <CalendarContainer onClick={(e) => e.stopPropagation()}>
        <StyledCalendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => date.toLocaleString("en", { day: "numeric" })}
        />
      </CalendarContainer>
    );
  };
  
  export default CustomCalendar;
  