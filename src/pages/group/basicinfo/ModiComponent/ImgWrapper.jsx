import React, { useState } from "react";
import styled from "styled-components";

const ImgWrapper = ({ handleImageUpload }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result); // 이미지 미리보기를 위한 상태 업데이트
        handleImageUpload(file); // 파일을 부모 컴포넌트로 전달
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ImgContainer backgroundImage={backgroundImage}>
      <ImgModify>
        이미지 변경하기
        <InputFile type="file" accept="image/*" onChange={handleFileChange} />
      </ImgModify>
    </ImgContainer>
  );
};

export default ImgWrapper;

const ImgContainer = styled.div`
  width: 100%;
  height: 180.12px;
  border-radius: 8px;
  background-color: black;
  background-image: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
`;

const ImgModify = styled.label`
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
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputFile = styled.input`
  display: none;
`;
