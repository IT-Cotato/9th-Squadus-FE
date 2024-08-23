import styled from "styled-components";
import { ChooseRegion } from "../../../components/FilterBar";
import Character from "../basicinfo/ModiComponent/CharacterWrapper";
import MaxPeople from "../basicinfo/ModiComponent/MaxPeople";
import ImgWrapper from "../basicinfo/ModiComponent/ImgWrapper";
import { ReactComponent as ComplteIcon } from "../../../assets/icons/complete-icon.svg";
import { useState } from "react";
export const CreatePage1 = ({ input, setInput }) => {
  const onChange = (e) => {
    setInput((prev) => ({
      ...prev,
      clubName: e.target.value,
    }));
  };
  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 1</HeaderStep>
        <HeaderText>동아리의 이름을 알려주세요.</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ContentTitle>동아리 이름</ContentTitle>
        <InputStyled onChange={onChange} placeholder="동아리명을 입력하세요" />
      </ContentContainer>
    </>
  );
};
export const CreatePage2 = ({ input, setInput }) => {
  const [selectedClubType, setSelectedClubType] = useState(
    input.clubCategory || ""
  );

  const handleCheck = (clubType) => {
    setSelectedClubType(clubType);
    setInput((prev) => ({
      ...prev,
      clubCategory: clubType,
    }));
  };

  const handleRegionChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 2</HeaderStep>
        <HeaderText>동아리의 구분과 활동 지역을 </HeaderText>
        <HeaderText>알려주세요.</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ContentTitle>동아리 구분</ContentTitle>

        <CheckedWrapper>
          <CheckedContainer>
            <CheckBoxStyled
              type="checkbox"
              checked={selectedClubType === "SCHOOL"}
              onChange={() => handleCheck("SCHOOL")}
            />
            <CheckedTitle>교내</CheckedTitle>
          </CheckedContainer>

          <CheckedContainer>
            <CheckBoxStyled
              type="checkbox"
              checked={selectedClubType === "UNION"}
              onChange={() => handleCheck("UNION")}
            />
            <CheckedTitle>연합</CheckedTitle>
          </CheckedContainer>
        </CheckedWrapper>
      </ContentContainer>
      <ContentContainer>
        <InputTitle>소속대학</InputTitle>
        <InputStyled
          value={input.university || ""}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, university: e.target.value }))
          }
        />
      </ContentContainer>
      <ContentContainer>
        <ContentTitle>활동 지역</ContentTitle>
        <ChooseRegion
          value={{ city: input.city, district: input.district }}
          onChange={handleRegionChange}
        />
      </ContentContainer>
    </>
  );
};

export const CreatePage3 = ({ input, setInput }) => {
  const [selectedTag, setSelectedTag] = useState(input.sportsCategory || ""); // 초기값 설정
  const [customTag, setCustomTag] = useState("");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setCustomTag(""); // 태그 클릭 시 직접 입력 필드 비움
    setInput((prev) => ({
      ...prev,
      sportsCategory: tag,
    }));
  };

  const handleCustomTagChange = (e) => {
    setCustomTag(e.target.value);
    setSelectedTag(""); // 직접 입력 클릭 시 선택된 태그 해제
    setInput((prev) => ({
      ...prev,
      sportsCategory: e.target.value,
    }));
  };

  const tags = {
    구기: ["축구", "농구", "배구", "야구"],
    라켓: ["배드민턴", "테니스", "탁구"],
    격투: ["태권도", "유도", "검도"],
    육상: ["러닝", "크로스핏", "사이클"],
    수상: ["수영", "서핑", "요트"],
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderStep>STEP 3</HeaderStep>
        <HeaderText>어떤 종목의 동아리인가요?</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        {Object.keys(tags).map((category) => (
          <div key={category}>
            <EventTitle>{category}</EventTitle>
            <EventWrapper>
              {tags[category].map((tag) => (
                <EventTag
                  key={tag}
                  isSelected={selectedTag === tag}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </EventTag>
              ))}
            </EventWrapper>
          </div>
        ))}
      </ContentContainer>
      <ContentContainer>
        <InputTitle>직접 입력하기</InputTitle>
        <InputStyled
          value={customTag}
          onChange={handleCustomTagChange}
          placeholder="직접 입력하세요"
        />
      </ContentContainer>
    </MainContainer>
  );
};

export const CreatePage4 = ({ input, setInput }) => {
  const [maxPeople, setMaxPeople] = useState(input.maxMembers || 0);
  const [selectedTags, setSelectedTags] = useState(input.tags || []);

  const handleIncrease = () => {
    setMaxPeople((prevCount) => {
      const newCount = prevCount + 1;
      setInput((prev) => ({
        ...prev,
        maxMembers: newCount,
      }));
      return newCount;
    });
  };

  const handleDecrease = () => {
    setMaxPeople((prevCount) => {
      const newCount = Math.max(prevCount - 1, 0);
      setInput((prev) => ({
        ...prev,
        maxMembers: newCount,
      }));
      return newCount;
    });
  };

  const handleTagClick = (tag) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newTags);
    setInput((prev) => ({
      ...prev,
      tags: newTags,
    }));
  };

  const tags = [];

  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 4</HeaderStep>
        <HeaderText>거의 다 왔어요!</HeaderText>
        <HeaderText>동아리의 키워드와 </HeaderText>
        <HeaderText>최대 인원수를 선택해주세요.</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <Character
          tags={tags}
          selectedTags={selectedTags}
          onClick={handleTagClick}
        />
      </ContentContainer>
      <ContentContainer>
        <MaxPeople
          maxPeople={maxPeople}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      </ContentContainer>
    </>
  );
};

export const CreatePage5 = ({ input, setInput, handleImageUpload }) => {
  const handleClubMessageChange = (e) => {
    setInput((prev) => ({
      ...prev,
      clubMessage: e.target.value,
    }));
  };

  return (
    <>
      <HeaderContainer>
        <HeaderStep>STEP 5</HeaderStep>
        <HeaderText>마지막이에요!</HeaderText>
        <HeaderText>동아리 한마디와 </HeaderText>
        <HeaderText>대표이미지를 설정해주세요.</HeaderText>
      </HeaderContainer>
      <ContentContainer>
        <ContentTitle>동아리 한마디</ContentTitle>
        <InputStyled
          value={input.clubMessage || ""}
          onChange={handleClubMessageChange}
          placeholder="동아리 한마디를 입력하세요"
        />
      </ContentContainer>
      <ContentContainer>
        <ContentTitle>대표 이미지 설정</ContentTitle>
        <ImgWrapper setInput={setInput} handleImageUpload={handleImageUpload} />
      </ContentContainer>
    </>
  );
};
export const CreatePage6 = (closeGroupCreate) => {
  return (
    <>
      <CompleteContainer>
        <CompleteIconWrapper>
          <ComplteIcon></ComplteIcon>
        </CompleteIconWrapper>
        <CompleteTextBold onClick={closeGroupCreate}>
          동아리 등록이 완료되었어요
        </CompleteTextBold>
        <CompleteTextSmall> 동아리 정보 확인하러가기</CompleteTextSmall>
      </CompleteContainer>
    </>
  );
};

const CompleteContainer = styled.div`
  width: 100%;
  height: 90%;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;
const CompleteIconWrapper = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CompleteTextBold = styled.div`
  width: 100%;
  height: 22px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  color: #1d2939;
`;
const CompleteTextSmall = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
  color: #ff6330;
`;

const MainContainer = styled.div`
  height: 75vh;
  overflow-y: auto;
`;
const HeaderContainer = styled.div`
  width: 393px;
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const HeaderStep = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #98a2b3;
`;

const HeaderText = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #1d2939;
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 16px 20px;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;
const ContentTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #1d2939;
`;

const InputTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #98a2b3;
`;
const InputStyled = styled.input`
  width: 100%;
  height: 46px;
  padding: 12px 0px;
  border: 0px;
  border-bottom: 1px solid #d0d5dd;
  outline: none;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #98a2b3;
`;

const CheckBoxStyled = styled.input`
  width: 20px;
  height: 20px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 50%;
  border: 2px solid #d0d5dd;
  position: relative;
  transition: all 0.3s;

  &:checked {
    background-color: #ff6330;
    border: 1px solid #ff6330;
  }

  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border: 3px solid white;
    border-radius: 50%;
    background-color: transparent;
    transform: translate(-50%, -50%);
  }
`;

const CheckedWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const CheckedContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
const CheckedTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  color: #1d2939;
`;
const EventTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
  color: #475467;
`;

const EventWrapper = styled.div`
  width: 100%;
  height: 40px;
  gap: 4px;
  display: flex;
`;
// const EventTag = styled.div`
//   min-width: 60px;
//   height: 38px;
//   padding: 8px 16px;
//   border-radius: 12px;
//   border: 1px solid #d0d5dd;
//   white-space: nowrap;
// `;
const EventTag = styled.div`
  padding: 8px 16px;
  border-radius: 12px;
  border: 1px solid #e4e7ec;
  background: ${(props) =>
    props.isSelected
      ? `linear-gradient(90deg, #FF6330 0%, #FF3F00 100%)`
      : "#f0f0f0"};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #d3d3d3;
  }
`;
