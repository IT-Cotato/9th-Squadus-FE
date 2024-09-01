import React, { useState } from 'react';
import styled from 'styled-components';
import close_icon from '../../../assets/icons/close.svg';
import camera_grey_icon from '../../../assets/icons/camera-grey.svg';
import delete_img_button from '../../../assets/icons/delete-img-button.svg';
import { postNotice } from '../../../apis/api/notice';


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
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SaveButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0;
  margin-bottom: 16px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid #dcdcdc;
  font-size: 16px;
  font-weight: 600;
  &:focus {
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.main[500]};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  font-weight: 500;
  resize: none;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 12px;
  &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.main[500]};
  }
`;


const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-top: 1px solid #dcdcdc;
`;

const CameraButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${camera_grey_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ImagePreviewContainer = styled.div`
  width: 100px;
  height: 100px;
  display: inline-block;
  margin-top: 20px;
  position: relative;
`;

const ImagePreview = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 12px;
`;

const DeleteButton = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  height: 32px;
  width: 32px;
  background-image: url(${delete_img_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;


const NoticeCreate = ({ closeNoticeCreate, clubId, refreshNotices }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleImageDelete = () => {
    setImagePreviewUrl(null);
    setSelectedFile(null);
  };

  const handleSave = () => {
    const accessToken = localStorage.getItem("accessToken");
    const noticeData = {
      title,
      content,
      hasVote: false,
      isImportant: false,
    };

    postNotice(accessToken, clubId, noticeData, selectedFile)
      .then((response) => {
        console.log("공지 생성 성공:", response);
        // refreshNotices();
        closeNoticeCreate();
      })
      .catch((error) => {
        console.error("공지 생성 실패:", error);
      });
  };

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeNoticeCreate} />
          <HeaderTitle>공지 작성하기</HeaderTitle>
          <SaveButton onClick={handleSave}>등록</SaveButton>
        </HeaderContainer>
        <ContentContainer>
          <Input 
            type="text" 
            placeholder="제목" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea 
            placeholder="내용을 입력하세요." 
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          {imagePreviewUrl && (
            <ImagePreviewContainer>
              <ImagePreview src={imagePreviewUrl} alt="Preview" />
              <DeleteButton onClick={handleImageDelete} />
            </ImagePreviewContainer>
          )}
        </ContentContainer>
        <FooterContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CameraButton onClick={handleCameraClick} />
            <HiddenFileInput 
              id="fileInput"
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
            />
          </div>
        </FooterContainer>
      </Container>
    </WrapperContainer>
  );
};

export default NoticeCreate;
