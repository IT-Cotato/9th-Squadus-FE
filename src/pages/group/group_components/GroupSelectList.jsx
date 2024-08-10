import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 40px;
  left: 80px;
  padding: 12px; 
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

const GroupCreate = styled.div`
  color: #101828; 
  font-size: 14px; 
  line-height: 19px; 
  word-wrap: break-word;
  border-top: 1px solid #dcdcdc;
  padding-top: 8px;
`;


function GroupSelectList() {
  const groupData = [
    { id: "1", name: "중앙가르드"},
    { id: "2", name: "코테이토" },
    { id: "3", name: "하하"}
  ];

  return (
    <Container>
      {groupData.map(group => (
        <GroupItem key={group.id}>
          {group.name}
        </GroupItem>
      ))}
      <GroupCreate>+ 동아리 생성</GroupCreate>
    </Container>
  );
}

export default GroupSelectList;
