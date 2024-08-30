import React, { useState } from 'react';
import styled from 'styled-components';
import plus_icon from '../../../assets/icons/plus-orange.svg'
import ExpenseCreate from './ExpenseCreate';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 20px;
`;

const TitleContainer = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.neutral[500]};
  padding: 20px 0;
`;

const AddButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.main[600]};
  border: 1px solid ${({ theme }) => theme.colors.main[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  gap: 4px;
`;

const PlusIcon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${plus_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HistoryContainer = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DaySectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: 14px;
  font-weight: 400;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 0;
  justify-content: space-between;
`;

const Description = styled.div`
  color: ${({ theme }) => theme.colors.neutral[800]};
  font-size: 18px;
  font-weight: 500;
`;

const Price = styled.div`
  color: ${({ theme }) => theme.colors.main[600]};
  font-size: 20px;
  font-weight: 600;
`;

const EmptyUsageStateMessage = styled.div`
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-weight: 600;
  padding: 80px 12px;
  text-align: center;
`;

const FeeUsage = () => {
  const [showExpenseCreate, setShowExpenseCreate] = useState(false);

  const feeUsagesData = [
    {
      date: "2024-08-30",
      usages: [
        {
          feeTypeId: 1,
          feeUsageId: 101,
          usedAt: "2024-08-30",
          description: "체육관 대관료",
          price: 150000
        },
        {
          feeTypeId: 1,
          feeUsageId: 102,
          usedAt: "2024-08-30",
          description: "강사 비용",
          price: 50000
        }
      ]
    },
    {
      date: "2024-08-29",
      usages: [
        {
          feeTypeId: 2,
          feeUsageId: 201,
          usedAt: "2024-08-29",
          description: "운동 장비 구입",
          price: 200000
        }
      ]
    },
    {
      date: "2024-08-28",
      usages: [
        {
          feeTypeId: 3,
          feeUsageId: 301,
          usedAt: "2024-08-28",
          description: "행사 준비 물품",
          price: 80000
        },
        {
          feeTypeId: 3,
          feeUsageId: 302,
          usedAt: "2024-08-28",
          description: "간식 구매",
          price: 30000
        }
      ]
    }
  ];
  

  return (
    <Container>
      <TitleContainer>회비 사용내역</TitleContainer>
      <AddButton onClick={() => setShowExpenseCreate(true)}>
        사용내역 추가 
        <PlusIcon></PlusIcon>
      </AddButton>
      <HistoryContainer>
        {feeUsagesData.length > 0 ? (
          feeUsagesData.map((day) => (
            <DaySectionContainer key={day.date}>
              <LabelContainer>{day.date}</LabelContainer>
              {day.usages.map((usage) => (
                <ItemContainer key={usage.feeUsageId}>
                  <Description>{usage.description}</Description>
                  <Price>{`${usage.price.toLocaleString('ko-KR')}원`}</Price>
                </ItemContainer>
              ))}
            </ DaySectionContainer>
          ))
        ) : (
          <EmptyUsageStateMessage>해당 회비의 사용내역이 없습니다.</EmptyUsageStateMessage>
        )}
      </HistoryContainer>

      {showExpenseCreate && <ExpenseCreate closeExpenseCreate={() => setShowExpenseCreate(false)}/>}
    </Container>
  );
};

export default FeeUsage;
