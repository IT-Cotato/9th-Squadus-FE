import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import FeeMemberEditItem from './fee_components/FeeMemberEditItem';
import close_icon from '../../../assets/icons/close.svg'
import { getFeeStatus } from '../../../apis/api/fee';
import { GroupContext } from "../Group";

const WrapperContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 10000;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 649px;
  justify-content: center;
  background-color: white;
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
  position: relative;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SubmitButton = styled.div`
    color: ${({ theme }) => theme.colors.main[500]};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`;

const ContentContainer = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;


const FeeStatusMemberEdit = ({ closeFeeStatusMemberEdit, feeId }) => {
  const { selectedClubId } = useContext(GroupContext);
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


  return (
    <WrapperContainer>
        <Container>
          <HeaderContainer>
            <CloseButton onClick={() => closeFeeStatusMemberEdit(true)} />
            <HeaderTitle>입금현황 편집</HeaderTitle>
            <SubmitButton>완료</SubmitButton> {/* TODO: 백에서 현황 편집하는 API가 잘 되는지 확인해봐야함 */}
          </HeaderContainer>
          <ContentContainer>
            {statusData.map((member, index) => (
              <FeeMemberEditItem
                key={index}
                name={member.name}
                isPaid={member.isPaid}
                profileImage={member.profileImage}
              />
            ))}
          </ContentContainer>
        </Container>
    </WrapperContainer>
  );
};

export default FeeStatusMemberEdit;
