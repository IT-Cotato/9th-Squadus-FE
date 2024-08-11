import styled from "styled-components";
import CommentItem from "./notice_components/CommentItem";

const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10000;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-color: white;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #dcdcdc;
  background-color: white;
`;

const PreviousButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: blue;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: 700;
`;

const MoreButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: red;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const NoticeContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: white;
`;

const NoticeTitle = styled.h1`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0;
  border-bottom: 1px solid #dcdcdc;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const NoticeContent = styled.p`
  width: 100%;
  box-sizing: border-box;
  padding: 16px 0;
  padding-bottom: 200px;
  border-bottom: 1px solid #dcdcdc;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const CommentContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: white;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 8px 16px;
  box-sizing: border-box;
  border-top: 1px solid #dcdcdc;
  background-color: white;
`;

const InputContainer = styled.div`
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  border-radius: 8px;
  border-bottom: 1px solid #dcdcdc;
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.main[500]};
  }
`;

const NoticeDetail = ({ closeNoticeDetail }) => {
  const noticeData = {
    title: "이건 공지 제목",
    content: "이건 공지 내용",
    image: "",
    date: "2024.07.22",
    views: "0",
    likes: "0" 
  };

  const commentsData = [
    { id: "1", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
    { id: "2", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
    { id: "3", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
    { id: "4", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
    { id: "5", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
    { id: "6", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
  ];

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <PreviousButton onClick={closeNoticeDetail} />
          <HeaderTitle>공지사항</HeaderTitle>
          <MoreButton />
        </HeaderContainer>
        <ContentContainer>
          <NoticeContainer>
            <NoticeTitle>{noticeData.title}</NoticeTitle>
            <NoticeContent>{noticeData.content}</NoticeContent>
          </NoticeContainer>
          <CommentContainer>
            {commentsData.map(comment => (
              <CommentItem
                key={comment.id}
                name={comment.name}
                comment={comment.comment}
                date={comment.date}
              />
            ))}
          </CommentContainer>
        </ContentContainer>
        <FooterContainer>
          <InputContainer>
            <Input placeholder="댓글을 입력하세요." />
          </InputContainer>
        </FooterContainer>
      </Container>
    </WrapperContainer>
  );
};

export default NoticeDetail;
