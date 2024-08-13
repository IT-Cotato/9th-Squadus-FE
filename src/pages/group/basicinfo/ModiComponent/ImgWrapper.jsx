import React from 'react';
import styled from 'styled-components';
const ImgWrapper = () => {
  return (
    <ImgContainer>
      <ImgModify>이미지 변경하기</ImgModify>
    </ImgContainer>
  );
};

export default ImgWrapper;
const ImgContainer = styled.div`
  width: 100%;
  height: 180.12px;
  border-radius: 8px;
  background-color: black;
  display: flex;
  align-items: self-end;
  justify-content: center;
  padding: 10px;
`;

const ImgModify = styled.div`
  width: 80%;
  height: 40px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px 0px #555ba03b;
  background: #ffffff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;
