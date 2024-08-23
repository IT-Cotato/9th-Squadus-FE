import React, { useContext } from "react";
import styled from "styled-components";
import {
  WrapperContainer,
  Container,
  HeaderWrapperContainer,
  HeaderContainer,
  CloseButton,
  HeaderTitle,
} from "./home_components/ModalStyled";
import Schedule from "../group/schedule/Schedule";
import { groupDataContext, scheduleContext } from "./Home";
const CalendarModal = ({ isOpen, closeModal }) => {
  const clubSchedule = useContext(scheduleContext);
  const groupData = useContext(groupDataContext);

  return (
    <>
      {isOpen && (
        <WrapperContainer>
          <Container>
            <HeaderWrapperContainer>
              <HeaderContainer>
                <CloseButton onClick={closeModal} />
                <HeaderTitle>이달의 일정</HeaderTitle>
              </HeaderContainer>
            </HeaderWrapperContainer>
            <Schedule
              personalSchedule={clubSchedule}
              isAccessHome={groupData[0]}
            ></Schedule>
          </Container>
        </WrapperContainer>
      )}
    </>
  );
};

export default CalendarModal;
