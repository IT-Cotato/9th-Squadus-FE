import styled from "styled-components";
import MainArticleItem from "./home_components/MainArticleItem";
import SectionHeader from "./home_components/SectionHeader";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ArticleContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  gap: 12px;
`;

const MainArticle = () => (
  <Container>
    <SectionHeader></SectionHeader>
    <ArticleContainer>
      <MainArticleItem></MainArticleItem>
      <MainArticleItem></MainArticleItem>
      <MainArticleItem></MainArticleItem>
      <MainArticleItem></MainArticleItem>
      <MainArticleItem></MainArticleItem>
    </ArticleContainer>
  </Container>
);

export default MainArticle;
