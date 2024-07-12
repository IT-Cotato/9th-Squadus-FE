import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTitle = styled.div``;

const HeaderMore = styled.div``;

const SectionHeader = () => (
  <Container>
    <HeaderTitle>HeaderTitle</HeaderTitle>
    <HeaderMore>see more</HeaderMore>
  </Container>
);

export default SectionHeader;
