import React from "react";
import styled from "styled-components";
import ArticleDetailList from "./ArticleDetailList";
import arrow_left_button from "../../assets/icons/arrow-left.svg"

const ArticleModal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderContainer>
              <CloseButton onClick={closeModal} />
              <HeaderTitle>아티클</HeaderTitle>
            </HeaderContainer>
            <ContentContainer>
              <ArticleDetailList></ArticleDetailList>
            </ContentContainer>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default ArticleModal;

const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10000;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
  gap: 4px;
  border-bottom: 1px solid #dcdcdc;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${arrow_left_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
