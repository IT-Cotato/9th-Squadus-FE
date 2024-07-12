import styled from "styled-components";

const Container = styled.div`
  height: 22px;
  padding: 0 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  font-size: 20px;
`;

const HeaderMore = styled.div``;

const SectionHeader = () => (
  <Container>
    <HeaderTitle>HeaderTitle</HeaderTitle>
    <HeaderMore>see more</HeaderMore>
  </Container>
);

export default SectionHeader;
