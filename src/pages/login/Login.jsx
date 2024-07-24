import styled from 'styled-components';
import GoogleLoginButton from './GoogleLoginButton';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: orange;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellow;
`;


const Login = () => {
  return (
    <Container>
      <div>Squadus 로그인 화면!</div>
      <ButtonContainer>
        <GoogleLoginButton />
      </ButtonContainer>
    </Container>
  );
}

export default Login;