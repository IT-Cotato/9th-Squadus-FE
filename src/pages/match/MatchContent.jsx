import React from 'react';
import MatchCard from './MatchCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 16px;
`;

const MatchContent = () => {
  return (
    <Container>
      <MatchCard></MatchCard>
    </Container>
  );
}

export default MatchContent;
