import React, { useState } from "react";
import {
  MainArticleItem,
  MainArticleItemMinimal,
} from "./home_components/MainArticleItem";
import styled from "styled-components";
import ArticleEachModal from "./ArticleEachModal";

const ArticleDetailList = () => {
  const articleData = [
    {
      id: "1",
      group: "분류 1",
      articleList: [
        { img: "", id: "1", title: "아티클 제목", subTitle: "아티클 소제목" },
        { img: "", id: "2", title: "아티클 제목", subTitle: "아티클 소제목" },
        { img: "", id: "3", title: "아티클 제목", subTitle: "아티클 소제목" },
        { img: "", id: "4", title: "아티클 제목", subTitle: "아티클 소제목" },
      ],
    },
    {
      id: "2",
      group: "분류 2",
      articleList: [
        { img: "", id: "5", title: "아티클 제목", subTitle: "아티클 소제목" },
        { img: "", id: "6", title: "아티클 제목", subTitle: "아티클 소제목" },
      ],
    },
    {
      id: "3",
      group: "분류 3",
      articleList: [
        { img: "", id: "8", title: "아티클 제목", subTitle: "아티클 소제목" },
        { img: "", id: "9", title: "아티클 제목", subTitle: "아티클 소제목" },
        { img: "", id: "10", title: "아티클 제목", subTitle: "아티클 소제목" },
      ],
    },
  ];
  const [isEachModalOpen, setIsEachModalOpen] = useState(false);
  const openEachModal = () => {
    setIsEachModalOpen(true);
  };

  const closeEachModal = () => {
    setIsEachModalOpen(false);
  };
  return (
    <Container>
      <ArticleCategoryTitle>{articleData[0].group}</ArticleCategoryTitle>
      <ArticleContainerRow>
        {articleData[0].articleList.map((article) => (
          <MainArticleItem
            key={article.id}
            img={article.img}
            title={article.title}
            subtitle={article.subTitle}
            onClick={openEachModal}
          ></MainArticleItem>
        ))}
      </ArticleContainerRow>
      <ArticleCategoryTitle>{articleData[1].group}</ArticleCategoryTitle>
      <ArticleContainerCol>
        {articleData[1].articleList.map((article) => (
          <MainArticleItemMinimal
            key={article.id}
            img={article.img}
            title={article.title}
            subtitle={article.subTitle}
            onClick={openEachModal}
          ></MainArticleItemMinimal>
        ))}
      </ArticleContainerCol>
      <ArticleCategoryTitle>{articleData[2].group}</ArticleCategoryTitle>
      <ArticleContainerRow>
        {articleData[2].articleList.map((article) => (
          <MainArticleItem
            key={article.id}
            img={article.img}
            title={article.title}
            subtitle={article.subTitle}
            onClick={openEachModal}
          ></MainArticleItem>
        ))}
      </ArticleContainerRow>
      <ArticleEachModal isOpen={isEachModalOpen} closeModal={closeEachModal} />
    </Container>
  );
};

export default ArticleDetailList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
`;

const ArticleCategoryTitle = styled.div`
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  color: #101828;
`;

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
