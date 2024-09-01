import styled from "styled-components";
import arrowdown_icon from "../../../assets/icons/group/arrow_down.svg";
import run_emoji from "../../../assets/icons/group/run_emoji.svg";
import GroupSelectList from "./GroupSelectList";

import { ReactComponent as ModiInfoIcon } from "../../../assets/group/ModiInfoIcon.svg";
import { ReactComponent as AlarmIcon } from "../../../assets/group/AlarmIcon.svg";
import ModifyInfo from "../basicinfo/ModifyInfo";

import React, { useState, useEffect, useContext } from "react";
import { GroupContext } from "../Group";

function GroupHeader() {
  const [showGroupSelectList, setShowGroupSelectList] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { Loading, chooseClubId, groupData } = useContext(GroupContext);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowGroupSelectList(false);  // 바깥을 클릭하면 false로 변경
    };

    // 컴포넌트가 마운트되었을 때 document에 이벤트 리스너 추가
    document.addEventListener("click", handleClickOutside);

    return () => {
      // 컴포넌트가 언마운트되었을 때 이벤트 리스너 제거
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);  // 빈 배열을 사용하여 컴포넌트가 마운트/언마운트될 때만 실행

  // 전파 차단을 위해 Wrapper에 클릭 핸들러 추가
  const handleWrapperClick = (e) => {
    e.stopPropagation();  // 이벤트 전파 차단
    setShowGroupSelectList(!showGroupSelectList);
  };


  return (
    <Container>
      <Wrapper onClick={handleWrapperClick}>
        <RunEmoji />
        <Title>
          {Loading && groupData && groupData[chooseClubId]
            ? groupData[chooseClubId].clubName
            : "가입된 동아리가 없어요!"}
        </Title>
        <ArrowDown
          onClick={(e) => {
            setShowGroupSelectList(!showGroupSelectList);
          }}
        />
      </Wrapper>
      {showGroupSelectList && (
        <GroupSelectList 
          groupData={groupData} 
          closeSelectList={() => setShowGroupSelectList(false)}
        />
      )}
      <IconWrapper>
        <ModiInfoIcon onClick={toggleModal} />
        <AlarmIcon />
      </IconWrapper>
      <ModifyInfo isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
}

export default GroupHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  position: relative;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const RunEmoji = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${run_emoji});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const ArrowDown = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${arrowdown_icon});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
