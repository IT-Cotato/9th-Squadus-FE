import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarContainer = styled.div`
  top: 100%;
  position: absolute;
  right: 0;
  z-index: 100;
`;

const StyledCalendar = styled(Calendar)`
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  .react-calendar__navigation {
    span {
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.main[500]};
    }
  }

  .react-calendar__navigation button:enabled:focus{
    width: 15px;
    background: ${({ theme }) => theme.colors.neutral[100]};
  }

  .react-calendar__tile {
    padding: 8px;
    abbr {
      color: ${({ theme }) => theme.colors.neutral[500]};
      text-decoration: none;
    }
  }

  .react-calendar__tile--hasActive {
    background: ${({ theme }) => theme.colors.main[500]};
    border-radius: 12px;

    abbr {
      color: white;
      text-decoration: none;
    }
  }

  .react-calendar__tile--now {
    background: ${({ theme }) => theme.colors.neutral[100]};
    border-radius: 12px;

    abbr {
      color: ${({ theme }) => theme.colors.neutral[500]};
      text-decoration: none;
    }
  }

  .react-calendar__tile--active {
    background: ${({ theme }) => theme.colors.main[500]};
    border-radius: 12px;

    abbr {
      color: white;
      text-decoration: none;
    }
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${({ theme }) => theme.colors.main[100]};
    border-radius: 12px;

    abbr {
      color: ${({ theme }) => theme.colors.neutral[500]};
      text-decoration: none;
    }
  }

  .react-calendar__month-view__weekdays {
    abbr {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.neutral[500]};
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
  