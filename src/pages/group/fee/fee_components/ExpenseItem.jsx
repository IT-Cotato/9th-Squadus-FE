import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 12px 0;
//   border-bottom: 1px solid #ddd;
  align-items: center;
  &:last-child {
    border-bottom: none;
  }
`;

const ExpenseDate = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

const ExpenseDescription = styled.div`
  font-size: 16px;
  margin-left: 16px;
  color: ${({ theme }) => theme.colors.neutral[800]};
  flex: 1;
`;

const ExpenseAmount = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.main[500]};
  margin-left: auto;
`;

const ExpenseItem = ({ date, description, amount }) => (
  <Container>
    <ExpenseDate>{date}</ExpenseDate>
    <ExpenseDescription>{description}</ExpenseDescription>
    <ExpenseAmount>{amount}</ExpenseAmount>
  </Container>
);

export default ExpenseItem;
