import styled from 'styled-components';
import FeeInfoCard from './fee_components/FeeInfoCard';
import ExpenseItem from './fee_components/ExpenseItem';
// import FeeStatus from './FeeStatus';
import FeeDetail from './FeeDetail';
import FeeCreate from './FeeCreate';
import ExpenseCreate from './ExpenseCreate';
import { GroupContext } from "../Group";
import { useState, useContext, useEffect } from "react";
import { getFees } from '../../../apis/api/fee';

const Container = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  height: 100vh;
  overflow: auto;
`;

const CardContainer = styled.div`
  padding: 16px;
  background: linear-gradient(90deg, #FF6330 0%, #FF3F00 100%);
  border-radius: 20px 20px 0 0;
  box-shadow: 0px 0px 8px rgba(148.28, 152.75, 204.10, 0.23);
`;

const TotalBalanceText = styled.div`
  color: white;
  padding: 72px 28px 40px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  border-radius: 20px 20px 0 0;
`;

const FeeCreateButton = styled.div`
  width: 100%;
  text-align: center;
  padding: 12px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main[200]};
  cursor: pointer;
  margin: 12px 0;
`;

const ExpenseContainer = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 0px 8px rgba(148.28, 152.75, 204.10, 0.23);
`;

const ExpenseContainerTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const EmptyFeeStateMessage = styled.div`
  color: ${({ theme }) => theme.colors.main[100]};
  font-weight: 600;
  padding: 12px 12px;
  text-align: center;
`;

const Fee = () => {
  const { selectedClubId } = useContext(GroupContext);
  const [feesData, setFeesData] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [showFeeDetail, setShowFeeDetail] = useState(false);
  const [selectedFeeId, setSelectedFeeId] = useState(null);
  const [showFeeCreate, setShowFeeCreate] = useState(false);
  const [showExpenseCreate, setShowExpenseCreate] = useState(false);
  const selectedFeeInfo = feesData.find(fee => fee.feeTypeId === selectedFeeId);


  const fetchFees = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && selectedClubId) {
      getFees(accessToken, selectedClubId)
        .then((fees) => {
          setFeesData(fees.clubFeeSummaryResponseList || []);
          setTotalBalance(fees.totalBalance || 0);
        })
        .catch((error) => {
          console.error("공지사항 가져오는 중 오류 발생:", error);
        });
    }
  };

  useEffect(() => {
    fetchFees();
  }, [selectedClubId]);

  const handleFeeClick = (id) => {
    setSelectedFeeId(id);
    setShowFeeDetail(true);
  };

  // const feesData = [
  //   { id: "1", label: "1학기 회비", amount: "3만원", dueDate: "~06.30" },
  //   { id: "2", label: "대회참여비용", amount: "2만원", dueDate: "~07.10" }
  // ];

  const expenseData = [
    { id: "1", date: "06.30", description: "체육관 사용료", amount: "120,000원" },
    { id: "2", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" },
    { id: "3", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" },
    { id: "4", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" }
  ];
  


  return (
    <Container>
      <CardContainer>
        <TotalBalanceText>{totalBalance}원</TotalBalanceText>
        {feesData.length > 0 ? (
          feesData.map((fee) => (
            <FeeInfoCard
              key={fee.feeTypeId}
              label={fee.feeTypeName}
              amount={fee.price}
              dueDate={fee.endDate}
              onClick={() => handleFeeClick(fee.feeTypeId)}
            />
          ))
        ) : (
          <EmptyFeeStateMessage>해당 동아리의 회비 내용이 없습니다!</EmptyFeeStateMessage>
        )}

        <FeeCreateButton onClick={() => { setShowFeeCreate(true); }}>회비 등록하기 +</FeeCreateButton>
      </CardContainer>
      <ExpenseContainer>
        <ExpenseContainerTitle>회비 사용 내역</ExpenseContainerTitle>
        {expenseData.map(expense => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            description={expense.description}
            amount={expense.amount}
          />
        ))}
      </ExpenseContainer>

      {showFeeDetail && (
        <FeeDetail 
          closeFeeDetail={() => setShowFeeDetail(false)} 
          feeId={selectedFeeId}
          feeInfo={selectedFeeInfo}
        />
      )}

      {showFeeCreate && <FeeCreate closeFeeCreate={() => setShowFeeCreate(false)} />}
      {showExpenseCreate && <ExpenseCreate closeExpenseCreate={() => setShowExpenseCreate(false)}/>}
      
    </Container>
  );
}

export default Fee;
