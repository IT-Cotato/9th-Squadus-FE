import React, { useState } from 'react';
import styled from 'styled-components';
import close_icon from '../../assets/icons/close.svg'
import location_grey_icon from '../../assets/icons/match/location-grey.svg'
import calendar_grey_icon from '../../assets/icons/match/calendar-grey.svg';
import club_grey_icon from '../../assets/icons/match/club-grey.svg';
import placeoffer_grey_icon from '../../assets/icons/match/placeoffer-grey.svg';

const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10000;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-color: white;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
  position: relative;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SubmitButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  position: absolute;
  right: 20px;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Title = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0;
  margin-bottom: 16px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid #dcdcdc;
  font-size: 16px;
  font-weight: 600;
  &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.main[500]};
  }
`;

const Content = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  resize: none;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 12px;
  padding: 12px;
  &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.main[500]};
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 20px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[400]};
  gap: 8px;
  margin: 8px 0px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-left: 30px;
  gap: 8px;
`;

const ScheduleInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 8px;
`;

const DateInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const TimeInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const LocationIcon = styled(Icon)`
  background-image: url(${location_grey_icon});
`;

const CalendarIcon = styled(Icon)`
  background-image: url(${calendar_grey_icon});
`;

const ClubIcon = styled(Icon)`
  background-image: url(${club_grey_icon});
`;

const PlaceOfferIcon = styled(Icon)`
  background-image: url(${placeoffer_grey_icon});
`;

const Button = styled.button`
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

  &.selected {
    border-color: ${({ theme }) => theme.colors.main[500]};
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    color: ${({ theme }) => theme.colors.main[500]};
  }
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

const MercenaryCreate = ({ closeMercenaryCreate }) => {
  const clubData = [
    { id: "1", name: "중앙가르드"},
    { id: "2", name: "코테이토" },
    { id: "3", name: "하하"}
  ];

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [placeOffer, setPlaceOffer] = useState("");

  // 월에 따른 일수 계산
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const daysInMonth = selectedMonth ? getDaysInMonth(selectedYear, selectedMonth) : 31;

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeMercenaryCreate} />
          <HeaderTitle>용병 글 작성하기</HeaderTitle>
          <SubmitButton>완료</SubmitButton>
        </HeaderContainer>
          <ContentContainer>
            <Title type="text" placeholder="제목" />
            <Content placeholder="내용을 입력하세요." />
            <FormContainer>
              <FieldContainer>
                <Label>
                <LocationIcon />
                지역을 선택해 주세요.
                </Label>
                <InputContainer>
                  <Button>시/도</Button>
                  <Button>군/구</Button>
                </InputContainer>
              </FieldContainer>
              <FieldContainer>
                <Label>
                  <CalendarIcon />
                  날짜와 시간을 선택해 주세요.
                </Label>
                <ScheduleInputContainer>
                  <DateInputContainer>
                    <Select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                    >
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i} value={currentYear + i}>
                          {currentYear + i}년
                        </option>
                      ))}
                    </Select>
                    <Select
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                    >
                      <option value="">월</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}월
                        </option>
                      ))}
                    </Select>
                    <Select
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(e.target.value)}
                    >
                      <option value="">일</option>
                      {Array.from({ length: daysInMonth }, (_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}일
                        </option>
                      ))}
                    </Select>
                  </DateInputContainer>
                  <TimeInputContainer>
                    <Select
                      value={selectedHour}
                      onChange={(e) => setSelectedHour(e.target.value)}
                    >
                      <option value="">시</option>
                      {Array.from({ length: 24 }, (_, i) => (
                        <option key={i} value={i}>
                          {i}시
                        </option>
                      ))}
                    </Select>
                    <Select
                      value={selectedMinute}
                      onChange={(e) => setSelectedMinute(e.target.value)}
                    >
                      <option value="">분</option>
                      {Array.from({ length: 60 }, (_, i) => (
                        <option key={i} value={i}>
                          {i}분
                        </option>
                      ))}
                    </Select>
                  </TimeInputContainer>
                </ScheduleInputContainer>
              </FieldContainer>
              <FieldContainer>
                <Label>
                  <ClubIcon />
                  용병을 구할 동아리를 선택해 주세요.
                </Label>
                <InputContainer>
                  <Select
                    value={selectedClub}
                    onChange={(e) => setSelectedClub(e.target.value)}
                  >
                    {clubData.map((club) => (
                      <option key={club.id} value={club.id}>
                        {club.name}
                      </option>
                    ))}
                  </Select>
                </InputContainer>
              </FieldContainer>
              <FieldContainer>
                <Label>
                <PlaceOfferIcon />
                  장소 제공 여부를 선택해 주세요.
                </Label>
                <InputContainer>
                  <Button
                    onClick={() => setPlaceOffer("Yes")}
                    className={placeOffer === "Yes" ? "selected" : ""}
                  >
                    Yes
                  </Button>
                  <Button
                    onClick={() => setPlaceOffer("No")}
                    className={placeOffer === "No" ? "selected" : ""}
                  >
                    No
                  </Button>
                </InputContainer>
              </FieldContainer>
            </FormContainer>
          </ContentContainer>
      </Container>
    </WrapperContainer>
  );
};

export default MercenaryCreate;
