import styled from 'styled-components';
import logo from '../../assets/login_logo.svg';
import google_button from '../../assets/login/google.svg';
import apple_button from '../../assets/login/apple.svg';
import kakao_button from '../../assets/login/kakao.svg';
import api from '../../apis/utils/api';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, #FF6330 0%, #FF3F00 100%);
`;

const Logo = styled.div`
  width: 200px;
  height: 260px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 260px auto 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin: 0px auto;
  gap: 8px;
`;

const GoogleLoginButton = styled.div`
  width: 256px;
  height: 48px;
  background-image: url(${google_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
`

const AppleLoginButton = styled.div`
  width: 256px;
  height: 48px;
  background-image: url(${apple_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
`;

const KakaoLoginButton = styled.div`
  width: 256px;
  height: 48px;
  background-image: url(${kakao_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
`;

// const handleGoogleLogin = () => {
//   window.location.href = `${api.defaults.baseURL}/oauth2/authorization/google`;
// };

// const handleAppleLogin = () => {
//   window.location.href = `${api.defaults.baseURL}/oauth2/authorization/apple`;
// };

const handleKakaoLogin = () => {
  window.location.href = `${api.defaults.baseURL}/oauth2/authorization/kakao`;
};

const Login = () => {

  return (
    <Container>
      <Logo />
      <ButtonContainer>
        <GoogleLoginButton />
        <AppleLoginButton />
        <KakaoLoginButton onClick={handleKakaoLogin} />
      </ButtonContainer>
    </Container>
  );
}


export default Login;