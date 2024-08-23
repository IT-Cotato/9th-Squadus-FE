import styled from "styled-components";

const ScheduleContainer = styled.div`
  width: 100%;
  padding: 20px 16px 20px 16px;
  gap: 28px;
  display: flex;
  border-radius: 16px;
  background: ${({ id }) => {
    switch (id) {
      case 1:
        return "linear-gradient(90deg, #FF6330 0%, #FF3F00 100%)";
      case 2:
        return "linear-gradient(90deg, #FF760A 0%, #FF6B00 100%)";
      default:
        return "linear-gradient(90deg, #FF9532 0%, #FF7B00 100%)";
    }
  }};

  box-sizing: border-box;
`;

const TimeWrapper = styled.div``;
const NameWrapper = styled.div``;

const MainText = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #ffffff;
`;

const SubText = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  color: #ffd9a5;
`;

const ScheduleItem = ({ startTime, endTime, title, Location, id }) => {
  return (
    <ScheduleContainer id={id}>
      <TimeWrapper>
        <MainText>{startTime}</MainText>
        <SubText>~{endTime}</SubText>
      </TimeWrapper>
      <NameWrapper>
        <MainText>{title}</MainText>
        <SubText>{Location}</SubText>
      </NameWrapper>
    </ScheduleContainer>
  );
};

export default ScheduleItem;

const PlusIcon = styled.div`
  font-size: 40px;
  font-weight: 200;
  line-height: 16px;
`;
const AddScheduleStyled = styled.div`
  border: 1px solid #ff6330;
  width: 100%;
  padding: 30px 16px 30px 18px;
  display: flex;
  gap: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  color: #ff6330;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
  cursor: pointer;
`;

export const AddSchedule = ({ onClick }) => {
  return (
    <AddScheduleStyled onClick={onClick}>
      <PlusIcon>+</PlusIcon> 새로운 일정 추가하기
    </AddScheduleStyled>
  );
};
