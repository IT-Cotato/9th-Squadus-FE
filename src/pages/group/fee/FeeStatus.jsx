import React, { useState } from 'react';
import styled from 'styled-components';
import FeeMemberItem from './fee_components/FeeMemberItem';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000; 
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px; 
  border-bottom: 1px solid #dcdcdc;  
`;

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: blue;
  border: none;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const ContentContainer = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
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

const FeeStatus = ({ closeFeeStatus }) => {
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
      <HeaderContainer>
        <CloseButton onClick={closeFeeStatus} />
        <HeaderTitle>회비 입금 현황</HeaderTitle>
      </HeaderContainer>
      <ContentContainer>
        <PreviewContainer>
          <Title>정기대회</Title>
          <Amount>140,000원</Amount>
          <Description>6.30일까지, 3만원씩</Description>
        </PreviewContainer>
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
      </ContentContainer>
    </Container>
  );
};

export default FeeStatus;
