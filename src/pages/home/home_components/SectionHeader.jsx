import styled from "styled-components";

const Container = styled.div`
  height: 22px;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
`;

const HeaderMore = styled.div`
  color: #98a2b3;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: right;
`;

const SectionHeader = ({ title, onClick }) => (
  <Container>
    <HeaderTitle>{title}</HeaderTitle>
    <HeaderMore onClick={onClick}>더보기</HeaderMore>
  </Container>
);

export default SectionHeader;
