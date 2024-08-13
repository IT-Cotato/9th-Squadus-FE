import styled from 'styled-components';

const Comment = ({ content }) => {
  return (
    <Container>
      <Title>동아리 한마디</Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default Comment;
const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 0px #9499cc3b;
  box-sizing: border-box;
`;
const Title = styled.div`
  color: #98a2b3;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;
const Content = styled.input`
  /* outline: none; */
  border: none;
  color: #475420;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  &:focus {
    outline: 1px solid #ff760a;
  }
`;
