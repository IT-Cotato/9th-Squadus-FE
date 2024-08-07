import React, { useState } from 'react';
import styled from 'styled-components';
import FeeMemberSelectItem from './fee_components/FeeMemberSelectItem';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
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
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: blue;
  border: none;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SaveButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const SelectAllButton = styled.button`
  width: auto;
  margin: 12px 0;
  padding: 4px;
  font-size: 14px;
  border: none;
  color: ${({ $allSelected, theme }) => $allSelected ? theme.colors.main[500] : theme.colors.neutral[500]};
  background-color: white;
`;

const ContentContainer = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  align-items: flex-start;
`;

const FeeMemberSelect = ({ closeFeeMemberSelect, updateSelection, selectedMemberIds }) => {
  const MemberData = [
    { id: "1", name: "이름1", img: "" },
    { id: "2", name: "이름2", img: "" },
    { id: "3", name: "이름3", img: "" },
    { id: "4", name: "이름4", img: "" },
  ];

  const [members, setMembers] = useState(MemberData.map(member => ({
    ...member,
    isSelected: selectedMemberIds.includes(member.id)
  })));

  const allSelected = members.every(member => member.isSelected);

  // 전체 멤버 선택
  const toggleAllSelection = () => {
    setMembers(members.map(member => ({
      ...member,
      isSelected: !allSelected
    })));
  }

  // 특정 멤버 선택
  const toggleMemberSelection = id => {
    setMembers(members.map(member => 
      member.id === id ? { ...member, isSelected: !member.isSelected } : member
    ));
  }

  const handleComplete = () => {
    const selectedIds = members.filter(member => member.isSelected).map(member => member.id);
    updateSelection(selectedIds);
    closeFeeMemberSelect();
  };

  return (
    <Container>
      <HeaderContainer>
        <CloseButton onClick={closeFeeMemberSelect} />
        <HeaderTitle>회비 납부 인원 선택</HeaderTitle>
        <SaveButton onClick={handleComplete}>완료</SaveButton>
      </HeaderContainer>
      <ContentContainer>
        <SelectAllButton onClick={toggleAllSelection} $allSelected={allSelected}>모두 선택</SelectAllButton>
        {members.map(member => (
          <FeeMemberSelectItem 
          key={member.id} 
          img={member.img} 
          name={member.name}
          isSelected={member.isSelected}
          toggleCheck={() => toggleMemberSelection(member.id)}
           />
        ))}
      </ContentContainer>
    </Container>
  );
};

export default FeeMemberSelect;
