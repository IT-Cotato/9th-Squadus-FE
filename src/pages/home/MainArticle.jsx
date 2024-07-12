import styled from "styled-components";
import MainArticleItem from "./home_components/MainArticleItem";
import SectionHeader from "./home_components/SectionHeader";

const Container = styled.div`
  width: 100%;
  min-height: 20%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainArticle = () => (
  <Container>
    <SectionHeader></SectionHeader>
    <MainArticleItem></MainArticleItem>
  </Container>
);

export default MainArticle;
