import { useState } from 'react';
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

const StatusButton = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: white;
  background-color: ${({ $isPaid }) => ($isPaid ? '#04CD6D' : '#E4E7EC')};
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
`;

const FeeMemberEditItem = ({ name, isPaid: initialIsPaid, profileImage }) => {
  const displayProfileImage = profileImage === "default profile img" ? default_profile_image : profileImage;
  const [isPaid, setIsPaid] = useState(initialIsPaid);

  // 회비 납부 상태 토글
  const togglePaymentStatus = () => {
    setIsPaid((prevIsPaid) => !prevIsPaid);
  };

  return (
    <MemberContainer>
      <ProfileImage profileImage={displayProfileImage} />
      <Name>{name}</Name>
      <StatusButton $isPaid={isPaid} onClick={togglePaymentStatus}>
        납부
      </StatusButton>
    </MemberContainer>
  );
};

export default FeeMemberEditItem;
