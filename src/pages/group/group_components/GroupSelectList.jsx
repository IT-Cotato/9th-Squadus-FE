import React, { useContext, useState } from "react";
import styled from "styled-components";
import GroupCreate from "./GroupCreate";
import api from "../../../apis/utils/api";
import { GroupContext } from "../Group";
import plus_icon from "../../../assets/icons/plus-orange.svg"

const Container = styled.div`
  width: auto;
  position: absolute;
  top: 40px;
  left: 40px;
  padding: 12px;
  background: white;
  box-shadow: 0px 2px 10px rgba(85, 91, 160, 0.43);
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: inline-flex;
  z-index: 1000;
`;

const GroupItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  word-wrap: break-word;
  padding: 6px 0px;
  cursor: pointer;
`;


const GroupCreateButton = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 4px;
  font-size: 16px;
  line-height: 19px;
  margin-top: 6px;
  padding: 8px 12px;
  /* background-color: ${({ theme }) => theme.colors.main[50]}; */
  color: ${({ theme }) => theme.colors.main[600]};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.main[600]};
  cursor: pointer;
`;

const NoGroupsMessage = styled.p`
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: 14px;
  line-height: 19px;
  padding: 8px;
`;

const PlusIcon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${plus_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function GroupSelectList({ groupData, closeSelectList }) {
  const { chooseClubId, setChooseClubId } = useContext(GroupContext);
  const [showGroupCreate, setShowGroupCreate] = useState(false);

  const handleContainerClick = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 차단
  };

  return (
    <Container onClick={handleContainerClick}>
      {groupData.length > 0 ? (
        groupData.map((group, index) => {
          //현재 동아리 제외
          return (
            <GroupItem
              key={group.clubId}
              onClick={() => {
                setChooseClubId(index)
                closeSelectList(); 
              }}
            >
              {group.clubName}
            </GroupItem>
          );
        })
      ) : (
        <NoGroupsMessage>가입된 동아리가 없어요!</NoGroupsMessage>
      )}
      <GroupCreateButton onClick={() => {
        setShowGroupCreate(true)
      }}>
        <PlusIcon></PlusIcon>
        동아리 생성
      </GroupCreateButton>
      {showGroupCreate && (
        <GroupCreate closeGroupCreate={() => {
          setShowGroupCreate(false)
        }} />
      )}
    </Container>
  );
}

export default GroupSelectList;
