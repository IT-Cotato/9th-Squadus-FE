import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckboxInactiveIcon } from '../../../../assets/icons/group/checkbox_inactive.svg';
import { ReactComponent as CheckboxActiveIcon } from '../../../../assets/icons/group/checkbox_active.svg';

const Container = styled.div`
  width: 100%;
  align-items: center;
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[100]};
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: pink;
  margin-right: 8px;
`;

const Name = styled.div`
  font-size: 20px;
  flex-grow: 1;
`;

const FeeMemberSelectItem = ({ img, name, isSelected, toggleCheck }) => {

  return (
    <Container>
      <ProfileImage src={img} alt={img}></ProfileImage>
      <Name>{name}</Name>
      {isSelected 
        ? <CheckboxActiveIcon onClick={toggleCheck} />
        : <CheckboxInactiveIcon onClick={toggleCheck} />
      }
    </Container>
  );
};

export default FeeMemberSelectItem;
