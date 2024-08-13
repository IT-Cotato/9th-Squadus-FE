import styled from "styled-components";
import TagItem from "./TagItem";

const ClubImage = styled.img`
  width: 100%;
  height: 192px;
  border-radius: 8px;
  background-color: black;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  height: 100%;
`;
const TagInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;
const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
  color: #475467;
`;
const Detail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: #475467;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
`;
const ClubInfo = ({
  region,
  personality,
  name,
  memRecent,
  memMax,
  establishDate,
  img,
}) => {
  return (
    <Container>
      <ClubImage src={img} alt={"Club Image"} />
      <TagInfo>
        <TagItem content={region} />
        <TagItem content={personality} />
      </TagInfo>
      <Name>{name}</Name>
      <Detail>
        <span>인원수 </span>
        <span>
          {memRecent}/{memMax}
        </span>
      </Detail>
      <Detail>
        <span>설립일 </span>
        <span>{establishDate}</span>
      </Detail>
    </Container>
  );
};

export default ClubInfo;
