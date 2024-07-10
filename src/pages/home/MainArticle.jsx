import styled from "styled-components";
import MainArticleItem from "./home_components/MainArticleItem";

const Container = styled.div`
  width: 100%;
  min-height: 20%;
  border: 1px solid;
`;

const MainArticle = () => (
  <Container>
    <MainArticleItem></MainArticleItem>
  </Container>
);

export default MainArticle;
