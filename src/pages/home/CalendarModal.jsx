import React, { useContext } from "react";
import styled from "styled-components";
// import {
//   WrapperContainer,
//   Container,
//   HeaderWrapperContainer,
//   HeaderContainer,
//   CloseButton,
//   HeaderTitle,
// } from "./home_components/ModalStyled";
import Schedule from "../group/schedule/Schedule";
import { groupDataContext, scheduleContext } from "./Home";
import arrow_left_button from "../../assets/icons/arrow-left.svg"



const CalendarModal = ({ isOpen, closeModal }) => {
  const clubSchedule = useContext(scheduleContext);
  const groupData = useContext(groupDataContext);

  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderContainer>
              <CloseButton onClick={closeModal} />
              <HeaderTitle>이달의 일정</HeaderTitle>
            </HeaderContainer>
            <ContentContainer>
              <Schedule
                personalSchedule={clubSchedule}
                isAccessHome={groupData[0]}
              >
              </Schedule>
            </ContentContainer>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default CalendarModal;


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
  align-items: center;
  padding: 20px;
  position: relative;
  gap: 4px;
  border-bottom: 1px solid #dcdcdc;
`;

const CloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-image: url(${arrow_left_button});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const HeaderTitle = styled.div`
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: 20px;
  font-weight: 600;
`;


const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;