import styled from 'styled-components';

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
const Content = styled.div`
  color: #475420;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`;
const ClubComment = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default ClubComment;
