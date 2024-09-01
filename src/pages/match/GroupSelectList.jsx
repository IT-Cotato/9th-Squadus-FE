import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../apis/utils/api";

const Container = styled.div`
  position: absolute;
  top: 56px;
  left: 180px;
  padding: 4px;
  background: white;
  box-shadow: 0px 2px 10px rgba(85, 91, 160, 0.43);
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  z-index: 1000;
`;

const GroupItem = styled.div`
  color: #101828;
  font-size: 14px;
  padding: 10px;
  text-align: center;
`;

const NoGroupsMessage = styled.p`
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: 14px;
  line-height: 19px;
  padding: 8px;
`;

const GroupSelectList = ({ onSelect }) => {
  const [groupData, setGroupData] = useState([]);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    api
      .get("/v1/api/members/clubs", {
        headers: {
          "Content-Type": "application/json",
          access: `${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        setGroupData(response.data.memberClubResponseList);
      })
      .catch((error) => {
        console.error(
          "동아리 데이터를 가져오는 중 오류가 발생했습니다:",
          error
        );
      });
  }, [accessToken]);

  return (
    <Container>
      {groupData.length > 0 ? (
        groupData.map((group) => (
          <GroupItem key={group.clubId} onClick={() => onSelect(group)}>
            {group.clubName}
          </GroupItem>
        ))
      ) : (
        <NoGroupsMessage>가입된 동아리가 없습니다.</NoGroupsMessage>
      )}
    </Container>
  );
};

export default GroupSelectList;
