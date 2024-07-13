import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid rgba(221, 221, 221, 0.5); /* 50% 투명도 */
  padding: 16px 0;
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

const NewTag = styled.div`
  background-color: ${({ theme }) => theme.colors.main[500]};
  color: #fff;
  width: 12px;
  height: 12px;
  padding: 2px 2px;
  font-size: 10px;
  margin-left: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoticeItem = ({ title, date, isNew }) => {
  return (
    <Container>
      <NoticeTitle>
        {title} {isNew && <NewTag>N</NewTag>}
      </NoticeTitle>
      <NoticeDate>{date}</NoticeDate>
    </Container>
  );
}

export default NoticeItem;
