import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import FeeMemberSelectItem from './fee_components/FeeMemberSelectItem';
import close_icon from '../../../assets/icons/close.svg';
import { GroupContext } from "../Group";
import { getClubMembers } from '../../../apis/api/fee';

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
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
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
  const { selectedClubId } = useContext(GroupContext);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchMembers = async() => {
      if (accessToken && selectedClubId) {
        try {
          const data = await getClubMembers(accessToken, selectedClubId);
          setMembers(data.clubMemberInfoResponseList.map(member => ({
            ...member,
            isSelected: selectedMemberIds.includes(member.id)
          })))
        } catch (error) {
          console.log("동아리 회원 리스트 불러오는 중 오류")
        }
      }
    }
    
    fetchMembers();

  }, [selectedClubId, selectedMemberIds])


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

  // 클릭 이벤트가 부모 컴포넌트로 전파되는 것을 방지
  const handleModalClick = (e) => {
    e.stopPropagation();
  }

  return (
    <WrapperContainer>
      <Container onClick={handleModalClick}> 
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
              name={member.name}
              isSelected={member.isSelected}
              profileImage={member.profileImg}
              toggleCheck={() => toggleMemberSelection(member.id)}
            />
          ))}
        </ContentContainer>
      </Container>
    </WrapperContainer>
  );
};

export default FeeMemberSelect;
