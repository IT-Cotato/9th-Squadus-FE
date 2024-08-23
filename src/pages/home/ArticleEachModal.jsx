import React, { useEffect, useState } from "react";
import {
  WrapperContainer,
  Container,
  HeaderWrapperContainer,
  HeaderContainer,
  CloseButton,
  HeaderTitle,
} from "./home_components/ModalStyled";
import styled from "styled-components";
import axios from "axios";
import { ReactComponent as ScrapIcon } from "../../assets/icons/scrap.svg";

const ArticleEachModal = ({ isOpen, closeModal, articleId }) => {
  const [article, setArticle] = useState([]);

  const getArticle = async () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/v1/api/articles/${articleId}`)
      .then((res) => {
        console.log("아티클 요청 결과 개별 모달", res.data);
        setArticle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getArticle();
    console.log("articleId", articleId);
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <>
          <WrapperContainer>
            <Container>
              <HeaderWrapperContainer>
                <HeaderContainer>
                  <CloseButton onClick={closeModal} />
                  <HeaderTitle>아티클</HeaderTitle>
                </HeaderContainer>
              </HeaderWrapperContainer>
              <MainContentWrapper>
                <ArticleTitle>{article.title}</ArticleTitle>
                <CreateAt>{article.createdAt}</CreateAt>
                <ContentText>{article.content}</ContentText>
                <ContentImgWrapper>
                  <ContentImg img={article.imageUrl}></ContentImg>
                </ContentImgWrapper>
                <ScrapIconWrapper>
                  <ScrapIcon />
                </ScrapIconWrapper>
              </MainContentWrapper>
            </Container>
          </WrapperContainer>
        </>
      )}
    </>
  );
};

export default ArticleEachModal;

const ArticleTitle = styled.div`
  width: 100%;
  padding: 20px 0px 8px 0px;
  font-size: 22px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
  color: #1d2939;
`;
const CreateAt = styled.div`
  width: 100%;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 12px;
  text-align: left;
  color: #98a2b3;
`;
const ContentText = styled.div`
  width: 100%;
  padding: 20px 0px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;

  color: #475467;
`;

const ContentImg = styled.div`
  width: 100%;
  height: 370px;

  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
`;
const ContentImgWrapper = styled.div`
  border-radius: 10px;
`;
const MainContentWrapper = styled.div`
  padding: 0px 20px;
`;
const ScrapIconWrapper = styled.div`
  padding: 10px 0px;
`;
