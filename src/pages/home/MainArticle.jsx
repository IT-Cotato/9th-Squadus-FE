import styled from "styled-components";
import { MainArticleItem } from "./home_components/MainArticleItem";
import SectionHeader from "./home_components/SectionHeader";
import { useEffect, useState } from "react";
import ArticleModal from "./ArticleModal";
import ArticleEachModal from "./ArticleEachModal";
import axios from "axios";

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
  const [articleList, setArticleList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEachModalOpen, setIsEachModalOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const openEachModal = (articleId) => {
    setSelectedArticleId(articleId);
    setIsEachModalOpen(true);
  };

  const closeEachModal = () => {
    setIsEachModalOpen(false);
    setSelectedArticleId(null);
  };
  const getAllArticle = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/v1/api/articles/allData`)
      .then((res) => {
        console.log("아티클 요청 결과", res.data.articles);
        setArticleList(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllArticle();
  }, []);
  return (
    <>
      <Container>
        <SectionHeader title={"아티클"} onClick={openModal}></SectionHeader>
        <ArticleContainer>
          {articleList.map((item) => (
            <MainArticleItem
              key={item.articleId}
              articleId={item.articleId}
              title={item.title}
              subtitle={item.subtitle}
              img={item.imageUrl}
              onClick={openEachModal}
            ></MainArticleItem>
          ))}
        </ArticleContainer>
      </Container>
      <ArticleModal isOpen={isModalOpen} closeModal={closeModal} />
      <ArticleEachModal
        isOpen={isEachModalOpen}
        closeModal={closeEachModal}
        articleId={selectedArticleId}
      />
    </>
  );
};

export default MainArticle;
