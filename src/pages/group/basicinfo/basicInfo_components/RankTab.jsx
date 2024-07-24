import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 45px;
  padding: 12px 20px;
`;

const TabItem = styled.div`
  z-index: 10;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-align: center;
  position: relative;
  width: 168.5px;
  height: 27px;
  margin: 0 10px;
  cursor: pointer;

  &::after {
    content: '';
    display: ${({ $active }) => ($active ? 'block' : 'none')};
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 2px;
    background: #ff6330;
    width: 100%;
  }
`;

const RankTab = ({ activeTab, setActiveTab }) => {
  return (
    <Container>
      <TabItem
        $active={activeTab === 'monthly'}
        onClick={() => setActiveTab('monthly')}
      >
        Monthly
      </TabItem>
      <TabItem
        $active={activeTab === 'all-time'}
        onClick={() => setActiveTab('all-time')}
      >
        All time
      </TabItem>
    </Container>
  );
};

export default RankTab;
