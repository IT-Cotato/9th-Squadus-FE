import React, { useState } from 'react';
import styled from 'styled-components';
import FeeStatusMemberEdit from '../FeeStatusMemberEdit';
import FeeEdit from '../FeeEdit';

const Container = styled.div`
  position: absolute;
  top: 40px;
  right: 28px;
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

const TaskItem = styled.div`
  color: #101828; 
  font-size: 14px; 
  line-height: 19px; 
  word-wrap: break-word;
`;


function FeeDetailMore() {
  const [showFeeStatusMemberEdit, setShowFeeStatusMemberEdit] = useState(false);
  const [showFeeEdit, setShowFeeEdit] = useState(false);

  return (
    <Container>
      <TaskItem onClick={() => setShowFeeStatusMemberEdit(true)}>납부 현황 편집</TaskItem>
      <TaskItem onClick={() => setShowFeeEdit(true)}>편집</TaskItem>
      <TaskItem>마감</TaskItem>
      {showFeeStatusMemberEdit && <FeeStatusMemberEdit closeFeeStatusMemberEdit={() => setShowFeeStatusMemberEdit(false)} />}
      {showFeeEdit && <FeeEdit closeFeeEdit={() => setShowFeeEdit(false)} />}
    </Container>
  );
}

export default FeeDetailMore;
