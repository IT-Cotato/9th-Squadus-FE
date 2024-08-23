import styled from "styled-components";

export const MainArticleItem = ({
  articleId,
  title,
  subtitle,
  img,
  onClick,
}) => {
  return (
    <Container onClick={() => onClick(articleId)}>
      <Image src={img} alt={img}></Image>
      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    </Container>
  );
};
export const MainArticleItemMinimal = ({
  articleId,
  title,
  subtitle,
  img,
  onClick,
}) => {
  return (
    <ContainerMinimal onClick={() => onClick(articleId)}>
      <Image src={img} alt={img}></Image>
      <Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Wrapper>
    </ContainerMinimal>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 230px; //min으로 해야 안깨지는데 이유를 모르겠음 console
  height: 230px;
  border-radius: 8px;

  position: relative;
  box-shadow: 0px 0px 8px 0px #9499cc3b;
`;
const ContainerMinimal = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px; //min으로 해야 안깨지는데 이유를 모르겠음 console
  height: 112px;
  border-radius: 20px;
  box-shadow: 0px 0px 7px gray;
  position: relative;
`;
const Image = styled.img`
  min-height: 70%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  background-color: #e4e7ec;
  background-color: white;
`;
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(16, 24, 40, 0) 41.5%,
    rgba(16, 24, 40, 0.6) 100%
  );
  border-radius: 8px;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const Title = styled.div`
  height: auto;
  margin-top: auto;
  font-size: 24px;
  margin: 0 12px;

  font-weight: 700;
  line-height: 28px;
  color: white;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  margin: 8px 12px;
  color: white;
`;
