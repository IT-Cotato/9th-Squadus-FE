import styled from 'styled-components';
import FeeInfoCard from './fee_components/FeeInfoCard';
// import FeeStatus from './FeeStatus';
import FeeDetail from './FeeDetail';
import FeeCreate from './FeeCreate';
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
  padding: 0px 16px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 0px 8px rgba(148.28, 152.75, 204.10, 0.23);
`;

const ExpenseContainerTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[500]};
  padding: 16px 0;
`;

const HistoryContainer = styled.div`
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
  margin-bottom: 8px;
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

const EmptyFeeStateMessage = styled.div`
  color: ${({ theme }) => theme.colors.main[100]};
  font-weight: 600;
  padding: 12px 12px;
  text-align: center;
`;

const EmptyUsageStateMessage = styled.div`
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-weight: 600;
  padding: 80px 12px;
  text-align: center;
`;

const Fee = () => {
  const { selectedClubId } = useContext(GroupContext);
  const [feesData, setFeesData] = useState([]);
  const [totalBalance, setTotalBalance] = useState(0);
  const [showFeeDetail, setShowFeeDetail] = useState(false);
  const [selectedFeeId, setSelectedFeeId] = useState(null);
  const [showFeeCreate, setShowFeeCreate] = useState(false);
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

  // const expenseData = [
  //   { id: "1", date: "06.30", description: "체육관 사용료", amount: "120,000원" },
  //   { id: "2", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" },
  //   { id: "3", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" },
  //   { id: "4", date: "06.28", description: "대회 뒷풀이", amount: "310,000원" }
  // ];

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
        {/* {expenseData.map(expense => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            description={expense.description}
            amount={expense.amount}
          />
        ))} */}
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
      </ExpenseContainer>

      {showFeeDetail && (
        <FeeDetail 
          closeFeeDetail={() => setShowFeeDetail(false)} 
          feeId={selectedFeeId}
          feeInfo={selectedFeeInfo}
        />
      )}

      {
        showFeeCreate && 
        <FeeCreate
          closeFeeCreate={() => {
            setShowFeeCreate(false);
            fetchFees();
          }}
        />
      }
      
    </Container>
  );
}

export default Fee;
