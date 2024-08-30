import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import ClubMainInfo from "./basicInfo_components/ClubMainInfo";
import ClubSubInfo from "./basicInfo_components/ClubSubInfo";
import Rank from "./Rank";
import axios from "axios";
import { GroupContext } from "../Group";

const BasicInfo = () => {
  const { chooseClubId, groupData, Loading } = useContext(GroupContext);

  const [information, setInfomation] = useState({
    id: 1,
    clubMessage: "",
    clubName: "",
    clubRank: "",
    clubTier: "",
    createdAt: "",
    logo: "",
    maxMembers: null,
    numberOfMembers: 0,
    sportsCategory: "",
    tags: [],
    university: "",
  });
  const getInfo = async () => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/${groupData[chooseClubId].clubId}`
      )
      .then((res) => {
        console.log(res.data);
        setInfomation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(groupData);
    if (groupData && chooseClubId !== undefined && groupData.length > 0) {
      getInfo();
    }
  }, [chooseClubId, groupData, Loading]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };
  const fommatDate = () => {
    const tmp = new Date(information.createdAt);
    const result = `${tmp.getFullYear()}.${
      tmp.getMonth() + 1
    }.${tmp.getDate()}`;
    return result;
  };
  return (
    <>
      {Loading && groupData && (
        <>
          <BaseContainer>
            <ContentContainer>
              <ClubMainInfo
                region={information.tags[0]}
                personality={information.tags[1]}
                name={information.clubName}
                memRecent={information.numberOfMembers}
                memMax={information.maxMembers}
                establishDate={fommatDate()}
                img={information.logo}
              />
              <ClubSubInfo onClick={toggleModal} information={information} />
            </ContentContainer>
          </BaseContainer>

          <Rank
            isOpen={isModalOpen}
            onClose={closeModal}
            clubTier={information.clubTier}
          />
        </>
      )}
    </>
  );
};

export default BasicInfo;

const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100vh;
  overflow: auto;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  padding: 16px 20px;
`;