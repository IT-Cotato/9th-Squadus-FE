import React, { useState } from 'react';
import styled from 'styled-components';
import FeeMemberSelect from './FeeMemberSelect';
import CustomCalendar from './fee_components/CustomCalendar';
import close_icon from '../../../assets/icons/close.svg';

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
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${close_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: bold;
`;

const SaveButton = styled.div`
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
  padding: 20px;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
  position: relative;
`;

const Label = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.neutral[400]};
  width: 40%;
`;

const Input = styled.input`
  width: 60%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 16px;
  /* input 타입이 number일 때 스타일 */
  &[type='number'] {
    appearance: none;
    -moz-appearance: textfield; /* 파이어폭스에서 스피너 제거 */
    -webkit-appearance: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; /* 크롬, 사파리에서 스피너 제거 */
    margin: 0;
  }
`;


const SelectMemberContainer = styled.div`
  width: 60%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SelectMemberButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
`

const FeeCreate = ({ closeFeeCreate }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [showSelectFeeMember, setShowSelectFeeMember] = useState(false);
  const [selectedMemberIds, setSelectedMemberIds] = useState([]);

  const handleContainerClick = () => {
    if (showStartCalendar) setShowStartCalendar(false);
    if (showEndCalendar) setShowEndCalendar(false);
    if (showSelectFeeMember) setShowSelectFeeMember(false);
  };

  const updateSelection = (selectedIds) => {
    setSelectedMemberIds(selectedIds);
  };

  return (
    <WrapperContainer>
      <Container onClick={handleContainerClick}>
        <HeaderContainer>
          <CloseButton onClick={closeFeeCreate}/>
          <HeaderTitle>회비 등록</HeaderTitle>
          <SaveButton>완료</SaveButton>
        </HeaderContainer>
        <ContentContainer>
          <FieldContainer>
            <Label>회비명</Label>
            <Input type="text" />
          </FieldContainer>
          <FieldContainer>
            <Label>금액 (원)</Label>
            <Input
              type="number"
              min="0"  // 최소값을 0으로 설정
              placeholder="숫자로 입력하세요"
              onChange={e => {
                if (!Number(e.target.value) && e.target.value !== '') {
                  e.target.value = e.target.value.slice(0, -1);
                }
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>회비 구분</Label>
            <Input type="text" />
          </FieldContainer>
          <FieldContainer>
            <Label>회비 납부 시작일</Label>
            <Input
              readOnly
              value={startDate ? startDate.toLocaleDateString() : "날짜 선택"}
              onClick={(e) => {
                e.stopPropagation();
                setShowStartCalendar(!showStartCalendar);
                setShowEndCalendar(false);
              }}
            />
            {showStartCalendar && (
              <CustomCalendar
                value={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setShowStartCalendar(false);
                }}
              />
            )}
          </FieldContainer>
          <FieldContainer>
            <Label>회비 납부 마감일</Label>
            <Input
              readOnly
              value={endDate ? endDate.toLocaleDateString() : "날짜 선택"}
              onClick={(e) => {
                e.stopPropagation();
                setShowEndCalendar(!showEndCalendar);
                setShowStartCalendar(false);
              }}
            />
            {showEndCalendar && (
              <CustomCalendar
                value={endDate}
                onChange={(date) => {
                  setEndDate(date);
                  setShowEndCalendar(false);
                }}
              />
            )}
          </FieldContainer>
          <FieldContainer onClick={() => setShowSelectFeeMember(true)}>
            <Label>회비 납부 인원</Label>
            <SelectMemberContainer>
              {`${selectedMemberIds.length}명`}
              <SelectMemberButton>선택하기</SelectMemberButton>
            </SelectMemberContainer>
          </FieldContainer>
          <FieldContainer>
            <Label>메모</Label>
            <Input type="text" />
          </FieldContainer>
        </ContentContainer>

        

        {showSelectFeeMember && 
          <FeeMemberSelect 
            closeFeeMemberSelect={() => setShowSelectFeeMember(false)} 
            updateSelection={updateSelection}
            selectedMemberIds={selectedMemberIds}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        }
      </Container>
    </WrapperContainer>
  );
};

export default FeeCreate;
