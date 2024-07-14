import React, { useState } from 'react';
import styled from 'styled-components';
import FeeMemberItem from './group_components/FeeMemberItem';

const Container = styled.div`
  padding: 0 20px;
`;

const PreviewContainer = styled.div`
  text-align: center;
  margin: 36px 0;
`;

const Title = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const Amount = styled.div`
  margin-bottom: 12px;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

const Description = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

const FilterContainer = styled.div`
  display: flex;
  margin: 12px 0;
`;

const FilterButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 16px;
  background-color: ${({ theme, $active }) => ($active ? theme.colors.neutral[700] : theme.colors.neutral[50])};
  color: ${({ theme, $active }) => ($active ? theme.colors.neutral[50] : theme.colors.neutral[500])};
  font-size: 14px;
  font-weight: 500;
`;

const FeeStatus = () => {
  const members = [
    { name: '이름(본인)', isPaid: true },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: false },
    { name: '이름', isPaid: true },
  ];

  const [filter, setFilter] = useState('전체');

  const handleFilterChange = (newFilter) => {
    console.log(`Filter 변경: ${newFilter}`);
    setFilter(newFilter);
  };

  const filteredMembers = members.filter(member => {
    if (filter === '납부') return member.isPaid;
    if (filter === '미납부') return !member.isPaid;
    return true;
  });

  console.log("현재 필터: ", filter);
  console.log("필터된 멤버들: ", filteredMembers);

  return (
    <Container>
      <PreviewContainer>
        <Title>정기대회</Title>
        <Amount>140,000원</Amount>
        <Description>6.30일까지, 3만원씩</Description>
      </PreviewContainer>
      <FilterContainer>
        <FilterButton $active={filter === '전체'} onClick={() => handleFilterChange('전체')}>전체</FilterButton>
        <FilterButton $active={filter === '납부'} onClick={() => handleFilterChange('납부')}>납부</FilterButton>
        <FilterButton $active={filter === '미납부'} onClick={() => handleFilterChange('미납부')}>미납부</FilterButton>
      </FilterContainer>
      {filteredMembers.map((member, index) => (
        <FeeMemberItem key={index} name={member.name} isPaid={member.isPaid} />
      ))}
    </Container>
  );
};

export default FeeStatus;
