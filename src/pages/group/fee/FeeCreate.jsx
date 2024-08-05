import React, { useState } from 'react';
import styled from 'styled-components';
import FeeMemberSelect from './FeeMemberSelect';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  background-color: white;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: blue;
  border: none;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SaveButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  position: relative;
`;

const Label = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.neutral[400]};
  width: 40%;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 16px;
  /* input 타입이 number일 때 스타일 */
  &[type='number'] {
    appearance: none;
    -moz-appearance: textfield; /* 파이어폭스에서 스피너 제거 */
    -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; /* 크롬, 사파리에서 스피너 제거 */
    margin: 0;
  }
`;

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


const FeeCreate = ({ closeFeeCreate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);

  const [showSelectFeeMember, setShowSelectFeeMember] = useState(false);
  const [selectedMemberIds, setSelectedMemberIds] = useState([]);
  const updateSelection = (selectedIds) => {
    setSelectedMemberIds(selectedIds);
  };

  return (
    <Container>
      <HeaderContainer>
        <CloseButton onClick={closeFeeCreate}/>
        <HeaderTitle>회비 등록</HeaderTitle>
        <SaveButton>완료</SaveButton>
      </HeaderContainer>
      <ContentContainer>
        <FieldContainer>
          <Label>회비명</Label>
          <Input type="text" />
        </FieldContainer>
        <FieldContainer>
          <Label>금액 (원)</Label>
          <Input
            type="number"
            min="0"  // 최소값을 0으로 설정
            placeholder="숫자로 입력하세요"
            onChange={e => {
              if (!Number(e.target.value) && e.target.value !== '') {
                e.target.value = e.target.value.slice(0, -1);
              }
            }}
          />
        </FieldContainer>
        <FieldContainer>
          <Label>회비 구분</Label>
          <Input type="text" />
        </FieldContainer>
        <FieldContainer>
          <Label>회비 납부 시작일</Label>
          <Input
            readOnly
            value={startDate ? startDate.toLocaleDateString() : "날짜 선택"}
            onClick={() => setShowStartCalendar(!showStartCalendar)}
          />
          {showStartCalendar && (
            <CalendarContainer>
              <StyledCalendar
                onChange={(date) => {
                  setStartDate(date);
                  setShowStartCalendar(!showStartCalendar)
                }}
                value={startDate}
                formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
              />
            </CalendarContainer>
          )}
        </FieldContainer>

        <FieldContainer>
          <Label>회비 납부 마감일</Label>
          <Input
            readOnly
            value={endDate ? endDate.toLocaleDateString() : "날짜 선택"}
            onClick={() => setShowEndCalendar(!showEndCalendar)}
          />
          {showEndCalendar && (
            <CalendarContainer>
              <StyledCalendar
                onChange={(date) => {
                  setEndDate(date);
                  setShowEndCalendar(!showEndCalendar)
                }}
                value={endDate}
                formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
              />
            </CalendarContainer>
          )}
        </FieldContainer>

        <FieldContainer onClick={() => setShowSelectFeeMember(true)}>
          <Label>회비 납부 인원</Label>
          <Input readOnly value={`${selectedMemberIds.length}명`} />
        </FieldContainer>
        <FieldContainer>
          <Label>메모</Label>
          <Input type="text" />
        </FieldContainer>
      </ContentContainer>

      {
        showSelectFeeMember &&
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: '649px',
              height: '100%',
              backgroundColor: 'white',
            }}>
            <FeeMemberSelect 
              closeFeeMemberSelect={() => setShowSelectFeeMember(false)} 
              updateSelection={updateSelection}
              selectedMemberIds={selectedMemberIds}
            />
          </div>
        </div>
      }
    </Container>
  );
};

export default FeeCreate;
