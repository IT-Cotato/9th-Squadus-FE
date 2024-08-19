import { useState } from "react";
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
import axios from "axios";

const ModifyInfo = ({ isOpen, onClose }) => {
  const [params, setParams] = useState({
    logo: "",
    clubMessage: "",
  });
  const postModify = async () => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/1`)
      .then((res) => {
        console.log("정보 수정 완료");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
