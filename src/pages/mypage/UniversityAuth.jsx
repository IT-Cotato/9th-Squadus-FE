import React, { useState } from 'react';
import styled from 'styled-components';
import close_icon from '../../assets/icons/close.svg';
import EmailSendModal from './EmailSendModal';
import AuthSuccessPage from './AuthSuccessPage';
import api from '../../apis/utils/api';
import useAuthStore from '../../stores/useAuthStore';


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
  justify-content: flex-start;
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
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 24px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  padding: 2px 8px;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  color: ${({ emailSent }) => emailSent ? '#666' : 'inherit'};
`;

const InfoText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.main[600]};
  padding: 4px 8px;
`;

const FooterContainer = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  background-color: white;
  padding-bottom: 32px;
`;

const SubmitButton = styled.div`
  width: 100%;
  margin: 0px 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.main[600]};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const VerificationSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CodeInput = styled.input`
  flex-grow: 1;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`;

const ResendButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.neutral[600]};
  border-radius: 8px;
  color: white;
`;


const UniversityAuth = ({ closeUniversityAuth }) => {
  const { fetchAndStoreUserData } = useAuthStore();
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isAuthSuccessful, setIsAuthSuccessful] = useState(null);
  const [showEmailSentModal, setShowEmailSentModal] = useState(false);
  const [showAuthSuccessPage, setShowAuthSuccessPage] = useState(false);

  // 이메일 보내는 함수
  const handleSendEmail = async () => {
    await api.post('/v1/api/email/signup', {
      email: email
    })
    .then((response) => {
      console.log(response);
      setEmailSent(true);
      setShowEmailSentModal(true);
      console.log('이메일 전송 완료');
    })
    .catch((error) => {
      console.error('이메일 전송 오류', error);
    });
  };

  // 인증코드 확인하는 함수
  const handleVerify = async () => {
    const accessToken = localStorage.getItem("accessToken");

    await api.post('/v1/api/email/signup/emailAuth', {
      email: email,
      authNum: verificationCode
    }, {
      headers: {
        'Content-Type': 'application/json',
        access: `${accessToken}`
      }
    })
    .then((response) => {
      console.log(response);
      setIsAuthSuccessful(true);
      console.log('인증코드 확인 성공');

      fetchAndStoreUserData();
      setShowAuthSuccessPage(true);
    })
    .catch((error) => {
      setIsAuthSuccessful(false);
      console.error('인증코드 확인 오류', error);
    });
  };

  const closeAuthSuccessPage = () => {
    setShowAuthSuccessPage(false);
    closeUniversityAuth(); // AuthSuccessPage 닫을 때 전체 모달도 닫기
  };

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeUniversityAuth} />
          <HeaderTitle>학교 인증</HeaderTitle>
        </HeaderContainer>
        <ContentContainer>
          <InputContainer>
            <Label>학교 이메일</Label>
            <EmailInput
              type="email"
              placeholder="학교 이메일을 입력하세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={emailSent}
              emailSent={emailSent}
            />
          <InfoText>학교에서 발급받은 메일을 통해서만 인증이 가능합니다.</InfoText>
          </InputContainer>
          {emailSent && (
            <InputContainer>
              <Label>인증번호</Label>
              <VerificationSection>
                <CodeInput
                  type="text"
                  placeholder="인증번호를 입력하세요."
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                />
                <ResendButton onClick={handleSendEmail}>재전송</ResendButton>
              </VerificationSection>
            </InputContainer>
          )}
        </ContentContainer>
        <FooterContainer>
          <SubmitButton onClick={emailSent ? handleVerify : handleSendEmail}>
            {emailSent ? '인증하기' : '인증 메일 보내기'}
          </SubmitButton>
        </FooterContainer>
      </Container>

      {showEmailSentModal && (
        <EmailSendModal
          closeEmailSendModal={() => setShowEmailSentModal(false)}
        />
      )}

      {isAuthSuccessful === true && (
        <AuthSuccessPage closeAuthSuccessPage={closeAuthSuccessPage} />
      )}
      {/* {isAuthSuccessful === false && <WarningModal />} */}
    </WrapperContainer>
  );
};

export default UniversityAuth;
