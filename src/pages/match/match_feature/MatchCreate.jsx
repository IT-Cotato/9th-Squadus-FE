import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import close_icon from '../../../assets/icons/close.svg'
import location_grey_icon from '../../../assets/icons/match/location-grey.svg'
import calendar_grey_icon from '../../../assets/icons/match/calendar-grey.svg';
import club_grey_icon from '../../../assets/icons/match/club-grey.svg'
import people_grey_icon from '../../../assets/icons/match/people-grey.svg';
import tier_grey_icon from '../../../assets/icons/match/tier-grey.svg';
import placeoffer_grey_icon from '../../../assets/icons/match/placeoffer-grey.svg';
import { getAdminClubs } from '../../../apis/api/user';
import { createMatch } from '../../../apis/api/match';

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
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
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

const PeopleIcon = styled(Icon)`
  background-image: url(${people_grey_icon});
`;

const TierIcon = styled(Icon)`
  background-image: url(${tier_grey_icon});
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

const MatchCreate = ({ closeMatchCreate, onMatchCreate }) => {
  const [clubData, setClubData] = useState([]);   // 사용자가 관리자인 동아리 불러오기

  // const clubData = [
  //   { id: "1", name: "중앙가르드"},
  //   { id: "2", name: "코테이토" },
  //   { id: "3", name: "하하"}
  // ];

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCity, setSelectedCity] = useState("지역");
  const [selectedCounty, setSelectedCounty] = useState("");
  const [counties, setCounties] = useState([]);
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [selectedClub, setSelectedClub] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [placeOffer, setPlaceOffer] = useState("");
  const [numberOfParticipants, setNumberOfParticipants] = useState(5);
  const [selectedClubMemberId, setSelectedClubMemberId] = useState(null);

  // 지역 선택 필드
  const CityOptions = [
    { value: "지역", label: "지역" },
    { value: "서울", label: "서울특별시" },
    { value: "부산", label: "부산광역시" },
    { value: "대구", label: "대구광역시" },
    { value: "인천", label: "인천광역시" },
    { value: "광주", label: "광주광역시" },
    { value: "대전", label: "대전광역시" },
    { value: "울산", label: "울산광역시" },
    { value: "경기", label: "경기도" },
    { value: "강원", label: "강원도" },
    { value: "충북", label: "충청북도" },
    { value: "충남", label: "충청남도" },
    { value: "전북", label: "전라북도" },
    { value: "전남", label: "전라남도" },
    { value: "경북", label: "경상북도" },
    { value: "경남", label: "경상남도" },
    { value: "제주", label: "제주도" },
  ];

  const CountyOptions = {
    지역: ["지역"],
    서울: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
    부산: [
      "강서구",
      "금정구",
      "남구",
      "동구",
      "동래구",
      "부산진구",
      "북구",
      "사상구",
      "사하구",
      "서구",
      "수영구",
      "연제구",
      "영도구",
      "중구",
      "해운대구",
      "기장군",
    ],
    대구: [
      "남구",
      "달서구",
      "동구",
      "북구",
      "서구",
      "수성구",
      "중구",
      "달성군",
    ],
    인천: [
      "계양구",
      "남구",
      "남동구",
      "동구",
      "부평구",
      "서구",
      "연수구",
      "중구",
      "강화군",
      "옹진군",
    ],
    광주: ["광산구", "남구", "동구", "북구", "서구"],
    대전: ["대덕구", "동구", "서구", "유성구", "중구"],
    울산: ["남구", "동구", "북구", "중구", "울주군"],
    경기: [
      "고양시",
      "과천시",
      "광명시",
      "구리시",
      "군포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시",
      "수원시",
      "시흥시",
      "안산시",
      "안양시",
      "오산시",
      "의왕시",
      "의정부시",
      "평택시",
      "하남시",
      "가평군",
      "광주시",
      "김포시",
      "안성시",
      "양주군",
      "양평군",
      "여주군",
      "연천군",
      "용인시",
      "이천군",
      "파주시",
      "포천시",
      "화성시",
    ],
    강원: [
      "강릉시",
      "동해시",
      "삼척시",
      "속초시",
      "원주시",
      "춘천시",
      "태백시",
      "고성군",
      "양구군",
      "양양군",
      "영월군",
      "인제군",
      "정선군",
      "철원군",
      "평창군",
      "홍천군",
      "화천군",
      "황성군",
    ],
    충북: [
      "제천시",
      "청주시",
      "충주시",
      "괴산군",
      "단양군",
      "보은군",
      "영동군",
      "옥천군",
      "음성군",
      "진천군",
      "청원군",
    ],
    충남: [
      "공주시",
      "보령시",
      "서산시",
      "아산시",
      "천안시",
      "금산군",
      "논산군",
      "당진군",
      "부여군",
      "서천군",
      "연기군",
      "예산군",
      "청양군",
      "태안군",
      "홍성군",
    ],
    전북: [
      "군산시",
      "김제시",
      "남원시",
      "익산시",
      "전주시",
      "정읍시",
      "고창군",
      "무주군",
      "부안군",
      "순창군",
      "완주군",
      "임실군",
      "장수군",
      "진안군",
    ],
    전남: [
      "광양시",
      "나주시",
      "목포시",
      "순천시",
      "여수시",
      "여천시",
      "강진군",
      "고흥군",
      "곡성군",
      "구례군",
      "담양군",
      "무안군",
      "보성군",
      "신안군",
      "여천군",
      "영광군",
      "영암군",
      "완도군",
      "장성군",
      "장흥군",
      "진도군",
      "함평군",
      "해남군",
      "화순군",
    ],
    경북: [
      "경산시",
      "경주시",
      "구미시",
      "김천시",
      "문경시",
      "상주시",
      "안동시",
      "영주시",
      "영천시",
      "포항시",
      "고령군",
      "군위군",
      "봉화군",
      "성주군",
      "영덕군",
      "영양군",
      "예천군",
      "울릉군",
      "울진군",
      "의성군",
      "청도군",
      "청송군",
      "칠곡군",
    ],
    경남: [
      "거제시",
      "김해시",
      "마산시",
      "밀양시",
      "사천시",
      "울산시",
      "진주시",
      "진해시",
      "창원시",
      "통영시",
      "거창군",
      "고성군",
      "남해군",
      "산청군",
      "양산시",
      "의령군",
      "창녕군",
      "하동군",
      "함안군",
      "함양군",
      "합천군",
    ],
    제주: ["서귀포시", "제주시", "남제주군", "북제주군"],
  };

  useEffect(() => {
    setCounties(CountyOptions[selectedCity] || []);
    setSelectedCounty(CountyOptions[selectedCity]?.[0] || "");
  }, [selectedCity]);

  // 사용자가 관리자로 속한 동아리 불러오기
  useEffect(() => {
    const fetchAdminClubs = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const clubs = await getAdminClubs(accessToken);
        setClubData(clubs);
      } catch (error) {
        console.error('관리자로 속한 동아리를 가져오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchAdminClubs();
  }, []);

  // 동아리 선택 시 clubMemberId 설정
  useEffect(() => {
    if (selectedClub) {
      const selectedClubData = clubData.find(club => club.clubId === parseInt(selectedClub, 10));
      setSelectedClubMemberId(selectedClubData ? selectedClubData.clubMemberIdx : null);
    }
  }, [selectedClub, clubData]);

  // 완료 버튼 눌렀을 때 실행되는 함수
  const handleSubmit = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      // 날짜와 시간 형식이 두 자리 수를 유지하도록 포맷팅
      const formattedMonth = selectedMonth.toString().padStart(2, '0');
      const formattedDay = selectedDay.toString().padStart(2, '0');
      const formattedHour = selectedHour.toString().padStart(2, '0');
      const formattedMinute = selectedMinute.toString().padStart(2, '0');

      const matchData = {
        homeClubId: parseInt(selectedClub, 10),
        clubMemberId: selectedClubMemberId,
        title: title,
        content: content,
        tier: selectedTier,
        matchPlace: {
          city: selectedCity,
          district: selectedCounty
        },
        placeProvided: placeOffer === "Yes",
        matchStartDate: `${selectedYear}-${formattedMonth}-${formattedDay}`,
        matchStartTime: `${formattedHour}:${formattedMinute}`,
        maxParticipants: parseInt(numberOfParticipants, 10)
      };

      const response = await createMatch(accessToken, matchData);
      onMatchCreate(response);
      closeMatchCreate();
      console.log('매치가 성공적으로 생성되었습니다.', response);
    } catch (error) {
      console.error('매치 생성 중 오류가 발생했습니다:', error);
    }
  };

  // 월에 따른 일수 계산
  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const daysInMonth = selectedMonth ? getDaysInMonth(selectedYear, selectedMonth) : 31;

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeMatchCreate} />
          <HeaderTitle>매치 글 작성하기</HeaderTitle>
          <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
        </HeaderContainer>
          <ContentContainer>
            <Title
              type="text"
              placeholder="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Content
              placeholder="내용을 입력하세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <FormContainer>
              <FieldContainer>
                <Label>
                <LocationIcon />
                지역을 선택해 주세요.
                </Label>
                <InputContainer>
                  <Select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                    {CityOptions.map((city) => (
                      <option key={city.value} value={city.value}>
                        {city.label}
                      </option>
                    ))}
                  </Select>
                  {selectedCity !== "지역" && (
                    <Select value={selectedCounty} onChange={(e) => setSelectedCounty(e.target.value)}>
                      {counties.map((county) => (
                        <option key={county} value={county}>
                          {county}
                        </option>
                      ))}
                    </Select>
                  )}
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
                  매치에 참여할 동아리를 선택해 주세요.
                </Label>
                <InputContainer>
                  <Select
                    value={selectedClub}
                    onChange={(e) => setSelectedClub(e.target.value)}
                  >
                    <option value="">동아리 선택</option>
                    {clubData.map((club) => (
                      <option key={club.clubId} value={club.clubId}>
                        {club.clubName}
                      </option>
                    ))}
                  </Select>
                </InputContainer>
              </FieldContainer>
              <FieldContainer>
                <Label>
                  <PeopleIcon />
                  참여인원을 선택해주세요.
                </Label>
                <InputContainer>
                  <Select
                    value={numberOfParticipants}
                    onChange={(e) => setNumberOfParticipants(e.target.value)}
                  >
                    {Array.from({ length: 51 }, (_, i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </Select>
                </InputContainer>
              </FieldContainer>
              <FieldContainer>
                <Label>
                  <TierIcon />
                  티어를 선택해 주세요.
                </Label>
                <InputContainer>
                  <Select
                    value={selectedTier}
                    onChange={(e) => setSelectedTier(e.target.value)}
                  >
                    <option>GOLD</option>
                    <option>SILVER</option>
                    <option>BRONZE</option>
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

export default MatchCreate;
