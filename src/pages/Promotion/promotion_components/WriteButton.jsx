import create_icon from "../../../assets/icons/write.svg";
import styled from "styled-components";

import React from "react";

const WriteButton = ({ onClick }) => {
  return (
    <FloatingButton onClick={onClick}>
      <CreateIcon />
    </FloatingButton>
  );
};

export default WriteButton;

const FloatingButton = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
  color: black;
  font-size: 32px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 100;
`;
const CreateIcon = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${create_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
