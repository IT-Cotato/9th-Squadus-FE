import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as FilterIcon } from "../assets/icons/filter.svg";

const FilterBar = () => {
  const [selectedCity, setSelectedCity] = useState("지역");
  const [counties, setCounties] = useState(CountyOptions["지역"]);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    setCounties(CountyOptions[selectedCity]);
  };

  const onClear = () => {
    setSelectedCity("지역");
    setCounties(CountyOptions["지역"]);
    setSelectedEvent("");
    setSelectedTier("");
    setSelectedCategory("");
  };

  return (
    <Container>
      <FilterIconStyled onClick={onClear} />
      {/* 종목 */}
      <FilterBox
        value={selectedEvent}
        onChange={(e) => setSelectedEvent(e.target.value)}
        options={Event}
      />

      {/* 지역 필터 */}
      <FilterContainer value={selectedCity} onChange={handleCityChange}>
        {CityOptions.map((city) => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </FilterContainer>
      {selectedCity !== "지역" && (
        <FilterContainer value={counties[0]} onChange={(e) => {}}>
          {counties.map((county) => (
            <option key={county} value={county}>
              {county}
            </option>
          ))}
        </FilterContainer>
      )}

      {/* 티어 */}
      <FilterBox
        value={selectedTier}
        onChange={(e) => setSelectedTier(e.target.value)}
        options={Tier}
      />
      {/* 카테고리 */}
      <FilterBox
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        options={Category}
      />
    </Container>
  );
};

export default FilterBar;

const FilterBox = ({ value, onChange, options }) => (
  <FilterContainer value={value} onChange={onChange}>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.name}
      </option>
    ))}
  </FilterContainer>
);

const FilterIconStyled = styled(FilterIcon)`
  flex-shrink: 0;
`;
const Container = styled.div`
  height: 40px;
  gap: 4px;
  display: flex;
  margin: 12px 20px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterContainer = styled.select`
  height: 38px;
  padding: 8px 16px;
  border-radius: 24px;
  border: 1px;
  &:hover {
    border: 1px solid #ff3f00;
  }
`;

const Event = [
  { value: "", name: "종목" },
  { value: "2", name: "2" },
  { value: "3", name: "3" },
];
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
  광주: ["지역( 시/ 군)", "광산구", "남구", "동구", "북구", "서구"],
  대전: ["지역( 시/ 군)", "대덕구", "동구", "서구", "유성구", "중구"],
  울산: ["지역( 시/ 군)", "남구", "동구", "북구", "중구", "울주군"],
  경기: [
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
    "지역( 시/ 군)",
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
  제주: ["지역( 시/ 군)", "서귀포시", "제주시", "남제주군", "북제주군"],
};
const Tier = [
  { value: "Tier", name: "티어" },
  { value: "bronze", name: "bronze" },
  { value: "silver", name: "silver" },
  { value: "gold", name: "gold" },
];

const Category = [
  { value: "", name: "카테고리" },
  { value: "1", name: "1" },
  { value: "2", name: "2" },
  { value: "3", name: "3" },
];
