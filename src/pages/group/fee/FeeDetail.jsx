import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import FeeMemberItem from './fee_components/FeeMemberItem';
import more_icon from '../../../assets/icons/more.svg';
import close_icon from '../../../assets/icons/close.svg'
import FeeDetailMore from './fee_components/FeeDetailMore';
import FeeStatus from './FeeStatus';
import FeeUsage from './FeeUsage';
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

const MoreButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${more_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`;

const TabItem = styled.div`
  padding: 6px 0px;
  color: ${({ $isActive, theme }) => $isActive ? `${theme.colors.neutral[900]}` : `${theme.colors.neutral[400]}`};
  font-size: 18px;
  font-weight: 500;
  border-bottom: ${({ $isActive, theme }) => $isActive ? `2px solid ${theme.colors.neutral[900]}` : "none"};
  cursor: pointer;
`;

const PreviewContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 28px 0 36px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

const Balance = styled.div`
  margin: 4px 0;
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[700]};
`;

const Price = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main[600]};
`;

const FeeDetail = ({ closeFeeDetail, feeId, feeInfo }) => {
  const { selectedClubId } = useContext(GroupContext);
  const [showFeeDetailMore, setShowFeeDetailMore] = useState(false);
  const [activeTab, setActiveTab] = useState('feeStatus');
  const [showFeeStatus, setShowFeeStatus] = useState(true);
  const [showFeeUsage, setShowFeeUsage] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    if (tab === 'feeStatus') {
      setShowFeeStatus(true);
      setShowFeeUsage(false);
    } else if (tab === 'feeUsage') {
      setShowFeeStatus(false);
      setShowFeeUsage(true);
    }
  };

  return (
    <WrapperContainer>
      <Container>
        <HeaderContainer>
          <CloseButton onClick={closeFeeDetail} />
          <HeaderTitle>회비 상세 내역</HeaderTitle>
          <MoreButton onClick={(e) => {
            setShowFeeDetailMore(!showFeeDetailMore);
          }} />
          {
            showFeeDetailMore && 
            <FeeDetailMore feeId={feeId}/>
          }
        </HeaderContainer>
        <TabContainer>
            <TabItem onClick={() => handleTabClick('feeStatus')} $isActive={activeTab === 'feeStatus'}>입금현황</TabItem>
            <TabItem onClick={() => handleTabClick('feeUsage')} $isActive={activeTab === 'feeUsage'}>사용내역</TabItem>
          </TabContainer>
        <ContentContainer>
        <PreviewContainer>
          {
            showFeeStatus && (
              <>
                <Title>{feeInfo.feeTypeName}</Title>
                <SubTitle>{`마감일: ${feeInfo.endDate}`}</SubTitle>
                <Balance>{`${parseInt(feeInfo.balance, 10).toLocaleString('ko-KR')}원`}</Balance>
                <Price>{`1인당 ${parseInt(feeInfo.price, 10).toLocaleString('ko-KR')}원씩`}</Price>
              </>
            )
          }
          {
            showFeeUsage && (
              <>
                <SubTitle>잔여금액</SubTitle>
                <Balance>{`${parseInt(feeInfo.balance, 10).toLocaleString('ko-KR')}원`}</Balance>
              </>
            )
          }
        </PreviewContainer>
          {
            showFeeStatus && 
            <FeeStatus feeId={feeId} />
          }

          {
            showFeeUsage && 
            <FeeUsage />
          }
        </ContentContainer>
      </Container>
    </WrapperContainer>
  );
};

export default FeeDetail;
