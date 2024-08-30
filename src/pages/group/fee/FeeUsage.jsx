import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  /* height: auto; */
  display: flex;
  flex-direction: column;
  /* max-width: 649px; */
  /* justify-content: center; */
  background-color: white;
  padding: 0 20px;
`;


const FeeUsage = () => {

  return (
    <Container>
      <div>사용내역임</div>
    </Container>
  );
};

export default FeeUsage;
