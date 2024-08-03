import styled from "styled-components";

const MainArticleItem = ({ img, title, subtitle }) => (
  <Container>
    <Image src={img} alt={img}></Image>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default MainArticleItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px; //min으로 해야 안깨지는데 이유를 모르겠음 console
  height: 230px;
  border-radius: 20px;
  box-shadow: 0px 0px 7px gray;
`;

const Image = styled.image`
  min-height: 70%;
  border-radius: 20px 20px 0 0;
  background-color: #e4e7ec;
`;

const Title = styled.div`
  height: auto;
  margin-top: auto;
  font-size: 24px;
  margin: 0 12px;
`;

const Subtitle = styled.div`
  font-size: 14px;
  margin: 8px 12px;
`;
