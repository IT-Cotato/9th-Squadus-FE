import styled from 'styled-components';
import FeeInfoCard from './fee_components/FeeInfoCard';
import ExpenseItem from './fee_components/ExpenseItem';
import FeeStatus from './FeeStatus';
import FeeCreate from './FeeCreate';
import ExpenseCreate from './ExpenseCreate';
import { useState } from 'react';

const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  height: 100vh;
  overflow: auto;
`;

const CardContainer = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.main[500]};
  border-radius: 20px 20px 0 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FeeText = styled.div`
  color: white;
  padding: 72px 28px 40px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  border-radius: 20px 20px 0 0;
`;

const FeeCreateButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.main[500]};
  color: ${({ theme }) => theme.colors.main[200]};
  cursor: pointer;
  margin: 12px 0;
`;

const ExpenseContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ExpenseContainerTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const ExpenseCreateButton = styled.button`
  width: 100%;
  margin: 12px 0;
  padding: 16px;
  background-color: white;
  color: ${({ theme }) => theme.colors.main[600]};
  border: 1px solid ${({ theme }) => theme.colors.main[600]};;
  border-radius: 8px;
  font-size: 16px;
`;

const Fee = () => {
  const [showFeeStatus, setShowFeeStatus] = useState(false);
  const [showFeeCreate, setShowFeeCreate] = useState(false);
  const [showExpenseCreate, setShowExpenseCreate] = useState(false);

  const feeInfoData = [
    { id: "1", label: "1학기 회비", amount: "3만원", dueDate: "~06.30" },
    { id: "2", label: "대회참여비용", amount: "2만원", dueDate: "~07.10" }
  ];

  const expenseData = [
    { id: "1", date: "06.30", description: "체육관 사용료", amount: "120,000원" },
    { id: "2", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" },
    { id: "3", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" },
    { id: "4", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" }
  ];


  return (
    <Container>
      <CardContainer>
        <FeeText>1,023,130원</FeeText>
        {feeInfoData.map(fee => (
          <FeeInfoCard
            key={fee.id}
            label={fee.label}
            amount={fee.amount}
            dueDate={fee.dueDate}
            onClick={() => setShowFeeStatus(true)}
          />
        ))}
        <FeeCreateButton onClick={() => { setShowFeeCreate(true); }}>회비 등록하기 +</FeeCreateButton>
      </CardContainer>
      <ExpenseContainer>
        <ExpenseContainerTitle>회비 사용 내역</ExpenseContainerTitle>
        <ExpenseCreateButton onClick={() => { setShowExpenseCreate(true); }}>사용 내역 추가 +</ExpenseCreateButton>
        {expenseData.map(expense => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            description={expense.description}
            amount={expense.amount}
          />
        ))}
      </ExpenseContainer>

      {showFeeStatus && <FeeStatus closeFeeStatus={() => setShowFeeStatus(false)} />}
      {showFeeCreate && <FeeCreate closeFeeCreate={() => setShowFeeCreate(false)} />}
      {showExpenseCreate && <ExpenseCreate closeExpenseCreate={() => setShowExpenseCreate(false)}/>}
      
    </Container>
  );
}

export default Fee;
