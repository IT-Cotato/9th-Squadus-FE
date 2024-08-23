import React from "react";
import {
  WrapperContainer,
  Container,
  HeaderWrapperContainer,
  HeaderContainer,
  CloseButton,
  HeaderTitle,
} from "./home_components/ModalStyled";
import ArticleDetailList from "./ArticleDetailList";
const ArticleModal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderWrapperContainer>
              <HeaderContainer>
                <CloseButton onClick={closeModal} />
                <HeaderTitle>아티클</HeaderTitle>
              </HeaderContainer>
            </HeaderWrapperContainer>
            <ArticleDetailList></ArticleDetailList>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default ArticleModal;
