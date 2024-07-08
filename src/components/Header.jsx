import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #4876a3;
  color: white;
  text-align: center;
  padding: 1rem 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>헤더임</h1>
    </HeaderContainer>
  );
}

export default Header;
