import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid rgba(221, 221, 221, 0.5);
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  margin-right: 8px;
  background-color: pink;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[700]};
  margin-bottom: 4px;
`;

const CommentText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[700]};
  margin-bottom: 4px;
`;

const CommentDate = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.neutral[300]};
`;

const MoreButton = styled.button`
  width: 16px;
  height: 16px;
  background: blue;
  border: none;
  cursor: pointer;
`;


// TODO: 프로필이미지도 props로 보내야함
const CommentItem = ({ name, comment, date }) => {
  return (
    <Container>
      <ProfileImage />
      <ContentContainer>
        <Name>{name}</Name>
        <CommentText>{comment}</CommentText>
        <CommentDate>{date}</CommentDate>
      </ContentContainer>
      <MoreButton />
    </Container>
  );
}

export default CommentItem;
