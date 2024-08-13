import styled from 'styled-components';
import React from 'react';
import {
  AddButton,
  BaseContainer,
  CloseButton,
  ModalNavi,
} from '../group_components/ModalHeader';
import ImgWrapper from './ModiComponent/ImgWrapper';
import Region from './ModiComponent/RegionWrapper';
import Character from './ModiComponent/CharacterWrapper';
import Comment from './ModiComponent/Comment';
import MaxPeople from './ModiComponent/MaxPeople';

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

const CloseButtonStyled = styled(CloseButton)`
  font-size: 14px;
`;
const ModalTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  color: #475467;
`;

const EntireContainer = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Container = styled(BaseContainer)`
  border-radius: 0px;
`;
