import React from "react";
import {
  AddButton,
  EntireContainer,
  CloseButtonStyled,
  ModalNavi,
  ModalTitle,
  Container,
} from "../group_components/ModalHeader";
import ImgWrapper from "./ModiComponent/ImgWrapper";
import Region from "./ModiComponent/RegionWrapper";
import Character from "./ModiComponent/CharacterWrapper";
import Comment from "./ModiComponent/Comment";
import MaxPeople from "./ModiComponent/MaxPeople";

const ModifyInfo = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Container>
          <ModalNavi>
            <CloseButtonStyled onClick={onClose}>X</CloseButtonStyled>
            <ModalTitle>기본 정보 수정</ModalTitle>
            <AddButton>완료</AddButton>
          </ModalNavi>
          <EntireContainer>
            <ImgWrapper />
            <Region />
            <Character />
            <MaxPeople />
            <Comment />
          </EntireContainer>
        </Container>
      )}
    </>
  );
};

export default ModifyInfo;
