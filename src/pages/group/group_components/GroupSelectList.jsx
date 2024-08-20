import React, { useContext, useState } from "react";
import styled from "styled-components";
import GroupCreate from "./GroupCreate";
import api from "../../../apis/utils/api";
import { GroupContext } from "../Group";

const Container = styled.div`
  position: absolute;
  width: 100%;
  top: 40px;
  left: 80px;
  padding: 12px 0px;
  background: white;
  box-shadow: 0px 2px 10px rgba(85, 91, 160, 0.43);
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: inline-flex;
  z-index: 1000;
`;

const GroupItem = styled.div`
  color: #101828;
  font-size: 14px;
  line-height: 19px;
  word-wrap: break-word;
`;

const GroupCreateButton = styled.div`
  color: #101828;
  font-size: 14px;
  line-height: 19px;
  word-wrap: break-word;
  border-top: 1px solid #dcdcdc;
  padding-top: 8px;
`;

function GroupSelectList({ groupData }) {
  const { chooseClubId, setChooseClubId } = useContext(GroupContext);

  const [showGroupCreate, setShowGroupCreate] = useState(false);

  return (
    <Container>
      {groupData.length > 0 ? (
        groupData.map((group, index) => {
          //현재 동아리 제외
          return (
            <GroupItem
              key={group.clubId}
              onClick={() => setChooseClubId(index)}
            >
              {group.clubName}
            </GroupItem>
          );
        })
      ) : (
        <p>가입된 동아리가 없습니다.</p>
      )}
      <GroupCreateButton onClick={() => setShowGroupCreate(true)}>
        + 동아리 생성
      </GroupCreateButton>
      {showGroupCreate && (
        <GroupCreate closeGroupCreate={() => setShowGroupCreate(false)} />
      )}
    </Container>
  );
}

export default GroupSelectList;
