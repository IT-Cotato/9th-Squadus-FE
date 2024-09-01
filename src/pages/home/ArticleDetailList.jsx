import React, { useEffect, useState } from "react";
import {
  MainArticleItem,
  MainArticleItemMinimal,
} from "./home_components/MainArticleItem";
import styled from "styled-components";
import ArticleEachModal from "./ArticleEachModal";
import axios from "axios";

const ArticleDetailList = () => {
  const [articleList, setArticleList] = useState([]);

  const getAllArticle = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/v1/api/articles/allData`)
      .then((res) => {
        console.log("아티클 요청 결과 DetailList", res.data.articles);
        setArticleList(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllArticle();
  }, []);
  const [isEachModalOpen, setIsEachModalOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const openEachModal = (articleId) => {
    setSelectedArticleId(articleId);
    setIsEachModalOpen(true);
  };

  const closeEachModal = () => {
    setIsEachModalOpen(false);
    setSelectedArticleId(null);
  };
  const FirstList = articleList.filter((item) => item.type === "운동 가이드");
  const SecondList = articleList.filter((item) => item.type === "동아리 소개");
  const ThirdList = articleList.filter((item) => item.type === "운동 팁");
  return (
    <Container>
      <ArticleBox>
        <ArticleCategoryTitle>운동 가이드</ArticleCategoryTitle>
        <ArticleContainerRow>
          {FirstList.map((item) => (
            <MainArticleItem
              key={item.articleId}
              articleId={item.articleId}
              title={item.title}
              subtitle={item.subtitle}
              img={item.imageUrl}
              onClick={openEachModal}
            ></MainArticleItem>
          ))}
        </ArticleContainerRow>
      </ArticleBox>
      <ArticleBox>
        <ArticleCategoryTitle>동아리 소개</ArticleCategoryTitle>
        <ArticleContainerCol>
          {SecondList.map((item) => (
            <MainArticleItemMinimal
              key={item.articleId}
              articleId={item.articleId}
              title={item.title}
              subtitle={item.subtitle}
              img={item.imageUrl}
              onClick={openEachModal}
            ></MainArticleItemMinimal>
          ))}
        </ArticleContainerCol>
      </ArticleBox>
      <ArticleBox>
        <ArticleCategoryTitle>운동 팁</ArticleCategoryTitle>
        <ArticleContainerRow>
          {ThirdList.map((item) => (
            <MainArticleItem
              key={item.articleId}
              articleId={item.articleId}
              title={item.title}
              subtitle={item.subtitle}
              img={item.imageUrl}
              onClick={openEachModal}
            ></MainArticleItem>
          ))}
        </ArticleContainerRow>
      </ArticleBox>
      <ArticleEachModal
        isOpen={isEachModalOpen}
        closeModal={closeEachModal}
        articleId={selectedArticleId}
      />
    </Container>
  );
};

export default ArticleDetailList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 32px;
`;

const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
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
