import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckboxInactiveIcon } from '../../../../assets/icons/group/checkbox_inactive.svg';
import { ReactComponent as CheckboxActiveIcon } from '../../../../assets/icons/group/checkbox_active.svg';
import default_profile_image from "../../../../assets/default_profile_image.svg"


const Container = styled.div`
  width: 100%;
  align-items: center;
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[100]};
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
  flex-grow: 1;
`;

const FeeMemberSelectItem = ({ name, isSelected, profileImage, toggleCheck }) => {
  const displayProfileImage = profileImage === "default profile img" ? default_profile_image : profileImage;

  return (
    <Container>
      <ProfileImage profileImage={displayProfileImage} />
      <Name>{name}</Name>
      {isSelected 
        ? <CheckboxActiveIcon onClick={toggleCheck} />
        : <CheckboxInactiveIcon onClick={toggleCheck} />
      }
    </Container>
  );
};

export default FeeMemberSelectItem;
