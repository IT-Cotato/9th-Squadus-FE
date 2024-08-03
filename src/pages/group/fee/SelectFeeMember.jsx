import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: pink;
`;


const SelectFeeMember = ({ closeSelectFeeMember }) => {
  return (
    <Container>
      멤버 선택
    </Container>
  );
};

export default SelectFeeMember;
