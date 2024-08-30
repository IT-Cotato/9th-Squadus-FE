import React, { useState } from 'react';
import styled from 'styled-components';
import FeeMemberItem from './fee_components/FeeMemberItem';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 20px;
`;

// const ContentContainer = styled.div`
//   height: 100vh;
//   overflow: auto;
//   display: flex;
//   flex-direction: column;
//   padding: 0 20px;
// `;

const FilterContainer = styled.div`
  display: flex;
  padding: 12px 0;
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 16px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.neutral[700] : theme.colors.neutral[50]};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.neutral[50] : theme.colors.neutral[500]};
  font-size: 14px;
  font-weight: 500;
`;

const FeeStatus = () => {
  const MemberData = [
    { name: '이름(본인)', isPaid: true },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: true },
    { name: '이름', isPaid: true },
    { name: '이름', isPaid: true },
    { name: '이름', isPaid: true },
    { name: '이름', isPaid: true },
    { name: '다인', isPaid: true },
    { name: '예서', isPaid: false },

  ];

  const [filter, setFilter] = useState('전체');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMembers = MemberData.filter(member => {
    if (filter === '납부') return member.isPaid;
    if (filter === '미납부') return !member.isPaid;
    return true;
  });

  return (
    <Container>
      <FilterContainer>
        <FilterButton
          $active={filter === '전체'}
          onClick={() => handleFilterChange('전체')}
        >
          전체
        </FilterButton>
        <FilterButton
          $active={filter === '납부'}
          onClick={() => handleFilterChange('납부')}
        >
          납부
        </FilterButton>
        <FilterButton
          $active={filter === '미납부'}
          onClick={() => handleFilterChange('미납부')}
        >
          미납부
        </FilterButton>
      </FilterContainer>
      {filteredMembers.map((member, index) => (
        <FeeMemberItem
          key={index}
          name={member.name}
          isPaid={member.isPaid}
        />
      ))}
    </Container>
  );
};

export default FeeStatus;
