import styled from "styled-components";
import React from "react";
import { Wrapper, WrapperTitle } from "./WrapperStyled";
import { ReactComponent as UpIcon } from "../../../../assets/group/UpIcon.svg";
import { ReactComponent as DownIcon } from "../../../../assets/group/DownIcon.svg";
const MaxPeople = ({ maxPeople, handleIncrease, handleDecrease }) => {
  return (
    <Wrapper>
      <WrapperTitle>최대 인원 수</WrapperTitle>
      <MaxPeopleContent>
        <Input type="number" value={maxPeople} readOnly />
        <Regulate>
          <UpIcon onClick={handleIncrease} />
          <DownIcon onClick={handleDecrease} />
        </Regulate>
      </MaxPeopleContent>
    </Wrapper>
  );
};

export default MaxPeople;

const Input = styled.input`
  width: 53px;
  height: 38px;
  padding: 8px 16px;
  gap: 6px;
  border-radius: 12px;
  border: 1px;
  border: 1px solid #e4e7ec;
`;

const Regulate = styled.div`
  width: 16px;
  height: 32px;
`;

const MaxPeopleContent = styled.div`
  width: 100%;
  height: 38px;
  gap: 7px;
  display: flex;
`;
