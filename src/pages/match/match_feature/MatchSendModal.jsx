import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import arrow_down_icon from '../../../assets/icons/arrow-down-grey.svg';
import { getAdminClubs } from '../../../apis/api/user';
import { postMatchRequest } from '../../../apis/api/match';

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
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 2px 50px rgba(85, 91, 160, 0.43);
`;

const ModalHeader = styled.div`
  width: 100%;
  background-color: #343432;
  color: white;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 12px 12px 0px 0px;
`;

const ModalContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 16px;
  border-radius: 0px 0px 12px 12px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
  align-items: center;
  font-size: 18px;
  line-height: 22px;
`;

const SelectContainer = styled.div`
  width: 100%;
  padding: 12px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 4px;
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.main[600]};
  font-size: 16px;
  -webkit-appearance: none;  // macOS 및 iOS에서 기본 스타일 제거
  -moz-appearance: none;  // Firefox에서 기본 스타일 제거
  appearance: none;  // 기본 화살표 아이콘 제거
  padding-right: 12px;
  background-image: url(${arrow_down_icon});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 20px 20px;
  cursor: pointer;
`;

const Option = styled.option``;

const ModalButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  margin-top: 12px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  width: 50%;
  border-radius: 8px;
`;

const CancelButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.neutral[300]};
  color: white;
`;

const ConfirmButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.main[600]};
  color: white;
`;

const BoldText = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;


const MatchSendModal = ({ onClose, onConfirm, onFail, matchClubData }) => {
  const [selectedClub, setSelectedClub] = useState('');
  const [adminClubData, setAdminClubData] = useState([]);
  const [selectedClubMemberId, setSelectedClubMemberId] = useState(null);

  // const matchClubData = {
  //   matchIdx: "1",
  //   matchClubName: "파리펜싱팀",
  //   matchDate: "7월 30일 4시"
  // }

  // const adminClubData = [
  //   { 
  //     id: "1", 
  //     adminClubName: "코테이토", 
  //   },
  //   { 
  //     id: "2", 
  //     adminClubName: "성신양궁", 
  //   }
  // ]

  // 사용자가 관리자인 동아리 정보 불러오기
  useEffect(() => {
    const fetchAdminClubs = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const clubs = await getAdminClubs(accessToken);
        // 매치 글을 올린 동아리를 제외한 동아리만 표시
        const filteredClubs = clubs.filter(club => club.clubId !== matchClubData.clubIdx);
        setAdminClubData(filteredClubs);
      } catch (error) {
        console.error('관리 동아리 정보를 가져오는 데 실패했습니다:', error);
      }
    };

    fetchAdminClubs();
  }, [matchClubData.clubIdx]); // matchClubData.clubIdx가 변경될 때마다 호출

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  // 동아리 선택 시 clubMemberId 설정
  useEffect(() => {
    if (selectedClub) {
      const selectedClubData = adminClubData.find(club => club.clubId === parseInt(selectedClub, 10));
      setSelectedClubMemberId(selectedClubData ? selectedClubData.clubMemberIdx : null);
    }
  }, [selectedClub, adminClubData]);

  // 확인 버튼 눌렀을 때
  const handleConfirm = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      await postMatchRequest(accessToken, selectedClubMemberId, matchClubData.matchIdx);
      onConfirm(); // 매칭 요청 성공 시 상위 컴포넌트에서 success modal을 띄움
    } catch (error) {
      if (error.response && error.response.data.code === 'M-302') {
        const selectedClubData = adminClubData.find(club => club.clubId === parseInt(selectedClub, 10));
        const selectedClubName = selectedClubData ? selectedClubData.clubName : "선택된 동아리";
        onFail(selectedClubName); // 매칭 요청 실패 시 상위 컴포넌트에서 fail modal을 띄움
      }
      console.error('매칭 요청 실패:', error);
    }
  };

  const getMatchRequestMessage = () => {
    return (
      <>
        <BoldText>{matchClubData.matchDate}</BoldText>
        <div>{matchClubData.matchClubName}에게 매칭 요청을<br />보내시겠습니까?</div>
      </>
    );
  };

  const handleClubChange = (event) => {
    setSelectedClub(event.target.value);
  };

  return(
    <WrapperContainer onClick={onClose}>
      <Container onClick={handleModalClick}>
        <ModalContainer>
          <ModalHeader>매치 요청 보내기</ModalHeader>
          <ModalContentContainer>
            <ModalContent>
              {getMatchRequestMessage()}
            </ModalContent>
            <SelectContainer>
              매칭할 동아리 선택
              <SelectBox value={selectedClub} onChange={handleClubChange}>
                <Option value="">동아리 선택</Option>
                {adminClubData.map((club) => (
                  <Option key={club.clubId} value={club.clubId}>{club.clubName}</Option>
                ))}
              </SelectBox>
            </SelectContainer>
            <ModalButtonContainer>
              <CancelButton onClick={onClose}>취소</CancelButton>
              <ConfirmButton onClick={handleConfirm}>확인</ConfirmButton>
            </ModalButtonContainer>
          </ModalContentContainer>
        </ModalContainer>
      </Container>
    </WrapperContainer>
  )
}

export default MatchSendModal;
