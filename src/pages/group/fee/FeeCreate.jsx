import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import FeeMemberSelect from './FeeMemberSelect';
import CustomCalendar from './fee_components/CustomCalendar';
import close_icon from '../../../assets/icons/close.svg';
import { GroupContext } from "../Group";
import { postFee } from '../../../apis/api/fee';

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
  display: flex;
  flex-direction: column;
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
  gap: 16px;
`;

const FieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative; 
`;

const Label = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
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
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[100]};
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SelectMemberButton = styled.div`
  color: ${({ theme }) => theme.colors.main[500]};
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;
`;

const Button = styled.div`
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ active, theme }) => active ? theme.colors.main[600] : theme.colors.neutral[500]};
  border: 1px solid ${({ active, theme }) => active ? theme.colors.main[600] : theme.colors.neutral[200]};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.main[500]};
  }

  &.selected {
    border-color: ${({ theme }) => theme.colors.main[500]};
    background-color: ${({ theme }) => theme.colors.neutral[50]};
    color: ${({ theme }) => theme.colors.main[500]};
  }
`;


const FeeCreate = ({ closeFeeCreate }) => {
  const { selectedClubId } = useContext(GroupContext);
  const [feeName, setFeeName] = useState('');
  const [price, setPrice] = useState(0);
  const [feeCategory, setFeeCategory] = useState('REGULAR');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [memo, setMemo] = useState('');
  const [selectedMemberIds, setSelectedMemberIds] = useState([]);

  const [showStartCalendar, setShowStartCalendar] = useState(false);
  const [showEndCalendar, setShowEndCalendar] = useState(false);
  const [showSelectFeeMember, setShowSelectFeeMember] = useState(false);

  const handleContainerClick = () => {
    if (showStartCalendar) setShowStartCalendar(false);
    if (showEndCalendar) setShowEndCalendar(false);
    if (showSelectFeeMember) setShowSelectFeeMember(false);
  };

  const updateSelection = (selectedIds) => {
    setSelectedMemberIds(selectedIds);
  };

  const handleSubmit = async() => {
    const accessToken = localStorage.getItem("accessToken");
    if(!accessToken || !selectedClubId) {
      console.log('로그인 정보가 유효하지 않음');
      return;
    }

    const feeData = {
      feeTypeName: feeName,
      price: price,
      feeCategory: feeCategory,
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      clubMemberIds: selectedMemberIds,
      memo: memo,
    }

    postFee(accessToken, selectedClubId, feeData)
    .then(response => {
      alert("회비 등록 성공");
      closeFeeCreate();
    })
    .catch(error => {
      alert("회비 등록 실패");
    })
  }

  return (
    <WrapperContainer>
      <Container onClick={handleContainerClick}>
        <HeaderContainer>
          <CloseButton onClick={closeFeeCreate}/>
          <HeaderTitle>회비 등록</HeaderTitle>
          <SaveButton onClick={handleSubmit}>완료</SaveButton>
        </HeaderContainer>
        <ContentContainer>
          <FieldContainer>
            <Label>회비명</Label>
            <Input 
              value={feeName}
              placeholder="회비명을 입력하세요"
              onChange={e => setFeeName(e.target.value)} 
            />
          </FieldContainer>
          <FieldContainer>
            <Label>금액 (원)</Label>
            <Input
              type="number"
              min="0"  // 최소값을 0으로 설정
              placeholder="숫자로 입력하세요"
              onChange={e => {
                const newPrice = parseInt(e.target.value, 10); // 입력값을 정수로 변환
                if (!isNaN(newPrice) && newPrice >= 0) {
                  setPrice(newPrice);
                }
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label>회비 구분</Label>
            <ButtonGroup>
              <Button
                active={feeCategory === 'REGULAR'}
                onClick={() => setFeeCategory('REGULAR')}
              >
                정기회비
              </Button>
              <Button
                active={feeCategory === 'EVENT'}
                onClick={() => setFeeCategory('EVENT')}
              >
                이벤트회비
              </Button>
            </ButtonGroup>
          </FieldContainer>
          <FieldContainer>
            <Label>회비 납부 시작일</Label>
            <Input
              readOnly
              value={startDate ? startDate.toLocaleDateString() : "날짜 선택"}
              onClick={(e) => {
                console.log("캘린더 클릭")
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
            <Input 
              value={memo}
              placeholder="메모를 입력하세요"
              onChange={e => setMemo(e.target.value)} 
            />
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
