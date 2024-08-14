import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid rgba(221, 221, 221, 0.5);
  background-color: ${({ $isNew }) => $isNew ? '#FFF7EC' : 'white'};
  padding: 16px 20px;
`;

const MainTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[600]};
  display: flex;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[600]};
  display: flex;
`;

const NotificationItem = ({ mainTitle, subTitle, isNew }) => {
  return (
    <Container $isNew={isNew}>
      <MainTitle>
        {mainTitle}
      </MainTitle>
      <SubTitle>
        {subTitle}
      </SubTitle>
    </Container>
  );
}

export default NotificationItem;
