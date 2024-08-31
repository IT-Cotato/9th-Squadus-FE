import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid rgba(221, 221, 221, 0.5);
  background-color: white;
  padding: 16px 20px;
  cursor: pointer;
`;

const NoticeTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[700]};
  display: flex;
  align-items: center;
`;

const NoticeDate = styled.div`
  font-size: 12px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

const NoticeItem = ({ title, date, onClick }) => {
  return (
    <Container onClick={onClick}>
      <NoticeTitle>
        {title}
      </NoticeTitle>
      <NoticeDate>{date}</NoticeDate>
    </Container>
  );
}

export default NoticeItem;
