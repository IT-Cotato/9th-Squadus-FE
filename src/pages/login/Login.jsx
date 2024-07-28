import styled from 'styled-components';
import GoogleLoginButton from './GoogleLoginButton';
import logo from '../../assets/login_logo.svg'


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
  /* background-color: yellow; */
  margin-top: 100px;
  margin: 0px auto;

`;


const Login = () => {
  return (
    <Container>
      <Logo />
      <ButtonContainer>
        <GoogleLoginButton />
      </ButtonContainer>
    </Container>
  );
}

export default Login;