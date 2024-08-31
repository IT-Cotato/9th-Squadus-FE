import { useState } from 'react';
import styled from 'styled-components';
import more_grey_icon from '../../../../assets/icons/group/more_grey.svg';
import heart_fill_icon from "../../../../assets/icons/group/heart-fill.svg";
import heart_stroke_icon from "../../../../assets/icons/group/heart-stroke.svg";
import default_profile_image from "../../../../assets/default_profile_image.svg";

const Container = styled.div`
  border-bottom: 1px solid rgba(221, 221, 221, 0.5);
  padding: 16px 0px;
  display: flex;
  flex-direction: row;
`;

const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${({ profileImage }) => profileImage});
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

const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
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

const MoreButton = styled.div`
  height: 16px;
  width: 16px;
  background-image: url(${more_grey_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;


const CommentItem = ({ name, comment, date, profileImage }) => {
  const [like, setLike] = useState(false);
  const displayProfileImage = profileImage ? profileImage : default_profile_image;

  return (
    <Container>
      <ProfileImage profileImage={displayProfileImage} />
      <ContentContainer>
        <Name>{name}</Name>
        <CommentText>{comment}</CommentText>
        <CommentDate>{date}</CommentDate>
      </ContentContainer>
      <SubContainer>
        <HeartContainer like={like} onClick={() => setLike(!like)}>
          <HeartIcon like={like} />
          공감
        </HeartContainer>
        <MoreButton />
      </SubContainer>
    </Container>
  );
}

export default CommentItem;
