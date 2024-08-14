import React from 'react';
import styled from 'styled-components';
import default_profile_image from '../../assets/default_profile_image.svg'

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.neutral[800]};
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
  const isUniversityVerified = true;

  return (
    <>
      <FixedContainer>
        프로필
      </FixedContainer>
      <ContentContainer>
        <ProfileSection>
          <ProfileImage></ProfileImage>
          <UserName>안유진</UserName>
          {isUniversityVerified && (
            <UniversityName>서울대학교</UniversityName>
          )}
          <AuthMessage $isVerified={isUniversityVerified}>
            {isUniversityVerified ? '인증 완료' : '인증 미완료'}
          </AuthMessage>
        </ProfileSection>
        <AccountSection>
          <AccountHeader>계정</AccountHeader>
          <MenuContainer>로그아웃</MenuContainer>
          <MenuContainer>회원 탈퇴</MenuContainer>
        </AccountSection>
      </ContentContainer>

      
    </>
  );
}

export default MyPage;
