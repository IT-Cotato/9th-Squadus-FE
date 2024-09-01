import React, { useState } from 'react';
import styled from 'styled-components';
import close_icon from '../../assets/icons/close.svg';
import useAuthStore from '../../stores/useAuthStore';
import default_profile_image from '../../assets/default_profile_image.svg';
import api from '../../apis/utils/api';


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
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  position: relative;
  box-sizing: border-box;
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
  position: relative;
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
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SubmitButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  gap: 4px;
`;

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 4px;
  padding: 20px;
  align-items: center;
`;

const ProfileImage = styled.div`
  height: 146px;
  width: 146px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 12px;
`;

const MenuSection = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
`;

const MenuContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 12px 0px;
`;

const FileInput = styled.input`
  display: none;
`;

const ImageEdit = ({ closeImageEdit }) => {
  const { userData, fetchAndStoreUserData } = useAuthStore();
  const [selectedFile, setSelectedFile] = useState(null);

  // 기존 프로필 이미지 또는 기본 프로필 이미지를 설정
  const initialProfileImage = userData.profileImage === "default profile img"
    ? default_profile_image
    : userData?.profileImage;

    const [previewUrl, setPreviewUrl] = useState(initialProfileImage);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    const previewUrl = URL.createObjectURL(file);
    setPreviewUrl(previewUrl);
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', selectedFile);

    const accessToken = localStorage.getItem("accessToken");

    api.post('/v1/api/members/profile-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        access: `${accessToken}`
      },
    })
    .then((response) => {
      console.log('이미지 업로드 성공:', response.data);

      if (response.data.profileImage) {
        setPreviewUrl(response.data.profileImage);
      }

      fetchAndStoreUserData();
      closeImageEdit();
    })
    .catch((error) => {
      console.error('이미지 업로드 실패:', error);
    });
  };

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeImageEdit} />
          <HeaderTitle>프로필 편집</HeaderTitle>
          <SubmitButton onClick={handleSubmit}>완료</SubmitButton>
        </HeaderContainer>
        <ContentContainer>
          <ProfileSection>
            <ProfileImage
              style={{
                backgroundImage: `url(${previewUrl})`
              }}
            />
            <UserName>{userData ? userData.memberName : ''}</UserName>
          </ProfileSection>
          <MenuSection>
            <MenuContainer onClick={() => document.getElementById('fileInput').click()}>
              프로필 사진 변경
            </MenuContainer>
            <MenuContainer>프로필 사진 삭제</MenuContainer>
            <FileInput
              id="fileInput"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </MenuSection>
        </ContentContainer>
        
      </Container>
    </WrapperContainer>
  );
};

export default ImageEdit;
