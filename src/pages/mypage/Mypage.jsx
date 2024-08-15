import React, { useState } from 'react';
import styled from 'styled-components';
import write_icon from '../../assets/icons/write.svg';
import default_profile_image from '../../assets/default_profile_image.svg';
import arrow_right_icon from '../../assets/icons/arrow-right-orange.svg';
import UniversityAuth from './UniversityAuth';
import ImageEdit from './ImageEdit';

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

const Spacer = styled.div`
  width: 32px;
  height: 32px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const EditIcon = styled.div`
  height: 32px;
  width: 32px;
  background-image: url(${write_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  background-image: url(${default_profile_image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-top: 12px;
`;

const UniversityName = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[400]};
  margin-top: 8px;
`;

const AuthMessage = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ $isVerified, theme }) => ($isVerified ? theme.colors.secondary[600] : theme.colors.main[600])};
  margin-top: 12px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: -4px;
`;

const ArrowIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${arrow_right_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const AccountSection = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
`;

const AccountHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const MenuContainer = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 12px 0px;
`;

const MyPage = () => {
  const [showUniversityAuth, setShowUniversityAuth] = useState(false);
  const [showImageEdit, setShowImageEdit] = useState(false);

  const isUniversityVerified = false;

  return (
    <>
      <FixedContainer>
        <Spacer></Spacer>
        <Title>프로필</Title>
        <EditIcon onClick={() => setShowImageEdit(true)}></EditIcon>
      </FixedContainer>
      <ContentContainer>
        <ProfileSection>
          <ProfileImage></ProfileImage>
          <UserName>안유진</UserName>
          {isUniversityVerified && (
            <UniversityName>서울대학교</UniversityName>
          )}
          <AuthMessage $isVerified={isUniversityVerified} onClick={() => setShowUniversityAuth(true)}>
            {isUniversityVerified ? '학교 인증 완료' : '학교 인증이 필요합니다'}
            {!isUniversityVerified && <ArrowIcon />}
          </AuthMessage>
        </ProfileSection>
        <AccountSection>
          <AccountHeader>계정</AccountHeader>
          <MenuContainer>로그아웃</MenuContainer>
          <MenuContainer>회원 탈퇴</MenuContainer>
        </AccountSection>
      </ContentContainer>

      {
        showUniversityAuth && 
        <UniversityAuth
          closeUniversityAuth={() => setShowUniversityAuth(false)}
        />
      }

      {
        showImageEdit &&
        <ImageEdit 
          closeImageEdit={() => setShowImageEdit(false)}
        />
      }

    </>
  );
}

export default MyPage;
