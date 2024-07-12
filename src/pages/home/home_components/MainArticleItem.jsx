import styled from "styled-components";

const Container = styled.div`
  width: 220px;
  height: 230px;
  border: 1px solid gray;
  border-radius: 20px;
`;

const ArticleImg = styled.div`
  height: 70%;
  border-radius: 20px 20px 0 0;
  background-color: #e4e7ec;
`;

const ArticleText = styled.div`
  height: auto;
  border-radius: 0 0 20px 20px;
  background-color: white;
`;

const MainArticleItem = () => (
  <Container>
    <ArticleImg></ArticleImg>
    <ArticleText></ArticleText>
  </Container>
);

export default MainArticleItem;