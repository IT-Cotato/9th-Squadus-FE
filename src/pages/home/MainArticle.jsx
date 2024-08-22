import styled from "styled-components";
import { MainArticleItem } from "./home_components/MainArticleItem";
import SectionHeader from "./home_components/SectionHeader";
import { useState } from "react";
import ArticleModal from "./ArticleModal";
import ArticleEachModal from "./ArticleEachModal";

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

const MainArticle = () => {
  const [articleList, setArticleList] = useState([
    {
      articleId: 0,
      title: "이달의 동아리소개",
      subtitle: "아티클 내용",
      type: "",
      tag: "",
      content: "",
      views: 0,
      imageUrl: "",
      createdAt: "2024-08-21T05:17:34.346Z",
      modifiedAt: "2024-08-21T05:17:34.347Z",
    },
    {
      articleId: 1,
      title: "8월 대학생 리스트 소개",
      subtitle: "아티클 내용",
      type: "",
      tag: "",
      content: "",
      views: 0,
      imageUrl: "",
      createdAt: "2024-08-21T05:17:34.346Z",
      modifiedAt: "2024-08-21T05:17:34.347Z",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };

  const [isEachModalOpen, setIsEachModalOpen] = useState(false);
  const openEachModal = () => {
    setIsEachModalOpen(true);
  };

  const closeEachModal = () => {
    setIsEachModalOpen(false);
  };

  return (
    <>
      <Container>
        <SectionHeader title={"아티클"} onClick={openModal}></SectionHeader>
        <ArticleContainer>
          {articleList.map((item) => (
            <MainArticleItem
              title={item.title}
              img={item.img}
              subtitle={item.subtitle}
              onClick={openEachModal}
            ></MainArticleItem>
          ))}

          <MainArticleItem></MainArticleItem>
          <MainArticleItem></MainArticleItem>
        </ArticleContainer>
      </Container>
      <ArticleModal isOpen={isModalOpen} closeModal={closeModal} />
      <ArticleEachModal isOpen={isEachModalOpen} closeModal={closeEachModal} />
    </>
  );
};

export default MainArticle;
