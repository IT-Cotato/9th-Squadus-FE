import React, { useState } from 'react';
import styled from 'styled-components';
import CustomCalendar from './fee_components/CustomCalendar';

const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  background-color: white;
  align-items: center;
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

const CloseButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: blue;
  border: none;
  cursor: pointer;
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



const ExpenseCreate = ({ closeExpenseCreate }) => {
  const [expenseDate, setExpenseDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleContainerClick = () => {
    if (showCalendar) setShowCalendar(false);
  };

  return (
    <Container onClick={handleContainerClick}>
      <HeaderContainer>
        <CloseButton onClick={closeExpenseCreate}/>
        <HeaderTitle>회비 사용 내역 등록</HeaderTitle>
        <SaveButton>등록</SaveButton>
      </HeaderContainer>
      <ContentContainer>
        <FieldContainer>
          <Label>사용 내역</Label>
          <Input type="text" />
        </FieldContainer>
        <FieldContainer>
          <Label>회비 사용 일자</Label>
          <Input
            readOnly
            value={expenseDate ? expenseDate.toLocaleDateString() : "날짜 선택"}
            onClick={(e) => {
              e.stopPropagation();
              setShowCalendar(!showCalendar);
            }}
          />
          {showCalendar && (
            <CustomCalendar
              value={expenseDate}
              onChange={(date) => {
                setExpenseDate(date);
                setShowCalendar(false);
              }}
            />
          )}
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
      </ContentContainer>

    </Container>
  );
};

export default ExpenseCreate;
