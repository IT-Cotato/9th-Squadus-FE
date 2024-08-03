import styled from 'styled-components';
import FeeInfoCard from './fee_components/FeeInfoCard';
import ExpenseItem from './fee_components/ExpenseItem';
import FeeStatus from './FeeStatus';
import FeeCreate from './FeeCreate';
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

const RegisterButton = styled.button`
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

const ExpenseContainerTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Fee = () => {
  const [showFeeStatus, setShowFeeStatus] = useState(false);
  const [showFeeCreate, setShowFeeCreate] = useState(false);

  return (
    <Container>
      <CardContainer>
        <FeeText>1,023,130원</FeeText>
        <FeeInfoCard
          label="1학기 회비"
          amount="3만원"
          dueDate="~06.30"
          onClick={() => {
            setShowFeeStatus(true);
          }}

        />
        <FeeInfoCard
          label="대회참여비용"
          amount="2만원"
          dueDate="~07.10"
          onClick={() => {
            setShowFeeStatus(true);
          }}

        />
        <FeeInfoCard
          label="대회참여비용"
          amount="2만원"
          dueDate="~07.10"
          onClick={() => {
            setShowFeeStatus(true);
          }}

        />
        <RegisterButton onClick={() => { setShowFeeCreate(true); }}>회비 등록하기 +</RegisterButton>
      </CardContainer>
      <ExpenseContainer>
        <ExpenseContainerTitle>회비 사용 내역</ExpenseContainerTitle>
        <ExpenseItem date="06.30" description="체육관 사용료" amount="120,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />
        <ExpenseItem date="06.28" description="대회 뒷풀이" amount="310,000원" />

      </ExpenseContainer>

      {
        showFeeStatus &&
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: '649px',
              height: '100%',
              backgroundColor: 'white',
            }}>
            <FeeStatus closeFeeStatus={() => setShowFeeStatus(false)} />
          </div>
        </div>
      }

      {
        showFeeCreate &&
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            zIndex: 10000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <div
            style={{
              width: '100%',
              maxWidth: '649px',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              position: 'relative'
            }}>
            <FeeCreate closeFeeCreate={() => setShowFeeCreate(false)} />
          </div>
        </div>
      }
    </Container>
  );
}

export default Fee;
