import { useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import CommentItem from "./notice_components/CommentItem";
import close_icon from "../../../assets/icons/close.svg";
import more_icon from "../../../assets/icons/more.svg";
import heart_fill_icon from "../../../assets/icons/group/heart-fill.svg";
import heart_stroke_icon from "../../../assets/icons/group/heart-stroke.svg";
import { getNotice, getNoticeComments } from '../../../apis/api/notice';
import { GroupContext } from "../Group";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; 
  border-bottom: 1px solid #dcdcdc;  
  position: relative;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const MoreButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${more_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const NoticeContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  background-color: white;
`;

const NoticeTitle = styled.h1`
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #dcdcdc;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const NoticeContent = styled.p`
  width: 100%;
  padding: 16px 0;
  padding-bottom: 200px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px 16px;
  gap: 10px;
  border-bottom: 1px solid #dcdcdc;
`;

const HeartContainer = styled.div`
  font-size: 14px;
  color: ${({ theme, like }) => like ? theme.colors.main[600] : theme.colors.neutral[400]};
  display: flex;
  flex-direction: row;
  cursor: pointer;
`;

const HeartIcon = styled.div`
  height: 16px;
  width: 16px;
  margin-right: 4px;
  background-image: url(${({ like }) => like ? heart_fill_icon : heart_stroke_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ViewsContainer = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.neutral[400]};
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

const NoticeDetail = ({ closeNoticeDetail, noticeId }) => {
  const { selectedClubId } = useContext(GroupContext);
  const [noticeData, setNoticeData] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  const [like, setLike] = useState(false);


  useEffect(() => {
    const fetchNoticeData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken"); // 저장된 accessToken 가져오기
        if (accessToken && selectedClubId && noticeId) {
          const notice = await getNotice(accessToken, selectedClubId, noticeId);
          const comments = await getNoticeComments(accessToken, selectedClubId, noticeId);
          setNoticeData(notice || []);
          setCommentsData(comments.clubPostCommentResponseList || []);
        }
      } catch (error) {
        console.error("공지사항 가져오는 중 오류 발생:", error);
      }
    };

    fetchNoticeData();
  }, [selectedClubId]);


  // const noticeData = {
  //   title: "이건 공지 제목",
  //   content: "이건 공지 내용",
  //   image: "",
  //   date: "2024.07.22",
  //   views: "0",
  //   likes: "0" 
  // };

  // const commentsData = [
  //   { id: "1", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
  //   { id: "2", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
  //   { id: "3", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
  //   { id: "4", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
  //   { id: "5", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
  //   { id: "6", name: "다인", comment: "댓글1", date: "2024.07.23", likes: "0" },
  // ];

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeNoticeDetail} />
          <HeaderTitle>공지사항</HeaderTitle>
          <MoreButton />
        </HeaderContainer>
        <ContentContainer>
          <NoticeContainer>
            <NoticeTitle>{noticeData.title}</NoticeTitle>
            <NoticeContent>{noticeData.content}</NoticeContent>
          </NoticeContainer>
          <StatsContainer>
            <HeartContainer like={like} onClick={() => setLike(!like)}>
              <HeartIcon like={like} />
              공감 {noticeData.likes}
            </HeartContainer>
            <ViewsContainer>조회수 {noticeData.view}</ViewsContainer>
          </StatsContainer>
          <CommentContainer>
            {commentsData.map(comment => (
              <CommentItem
                key={comment.id}
                name={comment.clubMemberName}
                comment={comment.content}
                date={comment.createdDate}
                profileImage={comment.profileImage}
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
