import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import FeeMemberItem from './fee_components/FeeMemberItem';
import FeeStatusMemberEdit from './FeeStatusMemberEdit';
import { getFeeStatus } from '../../../apis/api/fee';
import { GroupContext } from "../Group";


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
  align-items: center;
  justify-content: space-between;
`;

const FilterBar = styled.div`
  display: flex;
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

const StatusEditButton = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

const FeeStatus = ({ feeId }) => {
  const { selectedClubId } = useContext(GroupContext);
  const [showFeeStatusMemberEdit, setShowFeeStatusMemberEdit] = useState(false);
  const [statusData, setStatusData] = useState([]);

  const fetchFeeStatus = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && selectedClubId && feeId) {
      getFeeStatus(accessToken, selectedClubId, feeId)
        .then((payment) => {
          setStatusData(payment.clubFeePaymentInfoResponseList || [])
        })
        .catch((error) => {
          console.log("입금 현황 가져오는 중 오류 발생: ", error);
        })
    }
  }

  useEffect(() => {
    fetchFeeStatus();
  }, [selectedClubId, feeId]);


  const [filter, setFilter] = useState('전체');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMembers = statusData.filter(member => {
    if (filter === '납부') return member.isPaid;
    if (filter === '미납부') return !member.isPaid;
    return true;
  });

  return (
    <Container>
      <FilterContainer>
        <FilterBar>
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
        </FilterBar>
        <StatusEditButton onClick={() => setShowFeeStatusMemberEdit(true)}>입금현황 편집</StatusEditButton>
      </FilterContainer>
      {filteredMembers.map((member, index) => (
        <FeeMemberItem
          key={index}
          name={member.name}
          isPaid={member.isPaid}
          profileImage={member.profileImage}
        />
      ))}
      {
        showFeeStatusMemberEdit && 
          <FeeStatusMemberEdit 
            closeFeeStatusMemberEdit={() => setShowFeeStatusMemberEdit(false)}
            feeId={feeId} 
          />
      }
    </Container>
  );
};

export default FeeStatus;
