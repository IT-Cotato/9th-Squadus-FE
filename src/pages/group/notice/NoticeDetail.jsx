import styled from "styled-components";
import CommentItem from "./notice_components/CommentItem";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
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
  return (
    <Container>
      <HeaderContainer>
        <PreviousButton onClick={closeNoticeDetail} />
        <HeaderTitle>공지사항</HeaderTitle>
        <MoreButton />
      </HeaderContainer>
      <ContentContainer>
        <NoticeContainer>
          <NoticeTitle>이건 공지 제목</NoticeTitle>
          <NoticeContent>이건 공지 내용</NoticeContent>
        </NoticeContainer>
        <CommentContainer>
          <CommentItem
            name="다인"
            comment="댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글댓글1댓글댓글"
            date="2024.07.23"
          />
          <CommentItem name="다인" comment="댓글2" date="2024.07.23" />
          <CommentItem name="다인" comment="댓글3" date="2024.07.23" />
          <CommentItem name="다인" comment="댓글1" date="2024.07.23" />
          <CommentItem name="다인" comment="댓글1" date="2024.07.23" />
          <CommentItem name="다인" comment="댓글1" date="2024.07.23" />
          <CommentItem name="다인" comment="댓글1" date="2024.07.23" />
        </CommentContainer>
      </ContentContainer>
      <FooterContainer>
        <InputContainer>
          <Input placeholder="댓글을 입력하세요." />
        </InputContainer>
      </FooterContainer>
    </Container>
  );
};

export default NoticeDetail;
