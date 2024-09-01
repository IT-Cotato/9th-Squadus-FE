import React, { useEffect, createContext, useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import GroupHeader from "./group_components/GroupHeader";
import GroupTabBar from "./group_components/GroupTabBar";
import { getUserClubs, getUserInfo } from "../../apis/api/user";

const FixedContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const GroupContext = createContext();

const Group = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [userClubs, setUserClubs] = useState([]);
  const [chooseClubId, setChooseClubId] = useState(0);
  const [groupData, setGroupData] = useState([]); //유저가 속한 동아리 데이터
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const fetchUserInfo = await getUserInfo(accessToken);
        console.log("User Info:", fetchUserInfo);
        setUserInfo(fetchUserInfo);

        const fetchUserClubs = await getUserClubs(accessToken);
        console.log("User Clubs:", fetchUserClubs);
        setUserClubs(fetchUserClubs);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, []);
  useEffect(() => {
    setLoading(false);
    if (userClubs && userClubs.memberClubResponseList) {
      setGroupData(userClubs.memberClubResponseList);
      setLoading(true);
      console.log("userClubsuserClubs", userClubs.memberClubResponseList);
      console.log(
        "userClubsuserClubsuserClubsuserClubsuserClubsuserClubs",
        groupData.length
      );
    }
  }, [userClubs]);

  // 현재 선택된 clubId를 계산
  const selectedClubId =
    groupData.length > 0 && chooseClubId >= 0 && chooseClubId < groupData.length
      ? groupData[chooseClubId].clubId
      : null;

  // 현재 선택된 club의 관리자인지 여부를 나타내는 변수
  const selectedClubIsAdmin = 
    groupData.length > 0 && chooseClubId >= 0 && chooseClubId < groupData.length
      ? groupData[chooseClubId].isAdmin
      : null;

  // 현재 선택된 club의 clubMemberIdx
  const selectedClubMemberId = 
    groupData.length > 0 && chooseClubId >= 0 && chooseClubId < groupData.length
    ? groupData[chooseClubId].clubMemberIdx
    : null;


  return (
    <>
      <GroupContext.Provider
        value={{
          groupData,
          Loading,
          userInfo,
          userClubs,
          chooseClubId,
          setChooseClubId,
          selectedClubId,
          selectedClubIsAdmin,
          selectedClubMemberId
        }}
      >
        <FixedContainer>
          <GroupHeader />
          <GroupTabBar />
        </FixedContainer>
        <ContentContainer>
          <Outlet context={{ userInfo, userClubs, selectedClubId, selectedClubMemberId }} />
        </ContentContainer>
      </GroupContext.Provider>
    </>
  );
};

export default Group;
