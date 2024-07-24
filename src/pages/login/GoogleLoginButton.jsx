import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import useAuthStore from '../../store/authStore';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

const clientId = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID;

const GoogleLoginButton = () => {
  const login = useAuthStore((state) => state.login);

  // 성공 시 처리
  const onSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;

      /////////////////////////
      // 테스트 
      console.log(credentialResponse);
      console.log(credential);
      const decodedToken = jwtDecode(credential);
      console.log(decodedToken);
      /////////////////////////

      // 서버로 사용자 정보 전달하고 받아오는 과정
      const response = await axios.post('', {token: credential});  // TODO: 백엔드 url 넣어주기
      const { user, accessToken, refreshToken } = response.data;   // TODO: 받아오고 수정해주기

      // zustand 상태 및 로컬 스토리지에 사용자 정보와 액세스토큰을 저장
      login(user, accessToken);

      // 리프레시토큰을 HTTP-only 쿠키로 설정
      document.cookie = `refreshToken=${refreshToken}; path=/; httpOnly`;   // TODO: 수정하기
      
    } catch (error) {
      console.log("구글 로그인 에러: ", error);
    }
  }

  // 에러 시 처리
  const onError = () => {
    console.log("구글 로그인 에러");
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onError}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;