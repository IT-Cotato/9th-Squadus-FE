import styled from 'styled-components';
import default_profile_image from "../../../../assets/default_profile_image.svg"

const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  &:last-child {
    border-bottom: none;
  }
`;

// const ProfileImage = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   background-color: pink;
//   margin-right: 8px;
// `;
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

const Name = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[700]};
  flex: 1;
`;

const Status = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ $isPaid }) => ($isPaid ? '#04CD6D' : '#FF735E')};
`;

const FeeMemberItem = ({ name, isPaid, profileImage }) => {
  const displayProfileImage = profileImage === "default profile img" ? default_profile_image : profileImage;

  return (
    <MemberContainer>
      <ProfileImage profileImage={displayProfileImage} />
      <Name>{name}</Name>
      <Status $isPaid={isPaid}>{isPaid ? '납부' : '미납부'}</Status>
    </MemberContainer>
  );
};

export default FeeMemberItem;
