import React from "react";
import MainArticleItem from "./home_components/MainArticleItem";
import styled from "styled-components";

const ArticleDetailList = () => {
  const articleData = [
    {
      id: "1",
      group: "분류 1",
      articleList: [
        { id: "1", title: "아티클 제목", subTitle: "아티클 소제목" },
        { id: "2", title: "아티클 제목", subTitle: "아티클 소제목" },
        { id: "3", title: "아티클 제목", subTitle: "아티클 소제목" },
        { id: "4", title: "아티클 제목", subTitle: "아티클 소제목" },
      ],
    },
    {
      id: "2",
      group: "분류 2",
      articleList: [
        { id: "5", title: "아티클 제목", subTitle: "아티클 소제목" },
        { id: "6", title: "아티클 제목", subTitle: "아티클 소제목" },
        { id: "7", title: "아티클 제목", subTitle: "아티클 소제목" },
      ],
    },
    {
      id: "3",
      group: "분류 3",
      articleList: [
        { id: "8", title: "아티클 제목", subTitle: "아티클 소제목" },
        { id: "9", title: "아티클 제목", subTitle: "아티클 소제목" },
        { id: "10", title: "아티클 제목", subTitle: "아티클 소제목" },
      ],
    },
  ];

  return (
    <Container>
      <ArticleCategoryTitle>{articleData[0].group}</ArticleCategoryTitle>
      <ArticleContainerRow>
        {articleData[0].articleList.map((article) => (
          <MainArticleItem key={article.id}></MainArticleItem>
        ))}
      </ArticleContainerRow>
      <ArticleCategoryTitle>{articleData[1].group}</ArticleCategoryTitle>
      <ArticleContainerCol>
        {articleData[1].articleList.map((article) => (
          <MainArticleItem key={article.id}></MainArticleItem>
        ))}
      </ArticleContainerCol>
      <ArticleCategoryTitle>{articleData[2].group}</ArticleCategoryTitle>
      <ArticleContainerRow>
        {articleData[2].articleList.map((article) => (
          <MainArticleItem key={article.id}></MainArticleItem>
        ))}
      </ArticleContainerRow>
    </Container>
  );
};

export default ArticleDetailList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleCategoryTitle = styled.div``;

const ArticleContainerRow = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  gap: 12px;
`;

const ArticleContainerCol = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
