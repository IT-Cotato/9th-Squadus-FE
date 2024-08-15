import styled from "styled-components";
import { useEffect, useState } from "react";
import ClubMainInfo from "./basicInfo_components/ClubMainInfo";
import ClubSubInfo from "./basicInfo_components/ClubSubInfo";
import Rank from "./Rank";
import axios from "axios";

const BasicInfo = () => {
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
      .get(`${process.env.REACT_APP_SERVER_URL}/v1/api/clubs/1`)
      .then((res) => {
        console.log(res.data);
        setInfomation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getInfo();
  }, []);
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
      <BaseContainer>
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
      </BaseContainer>

      <Rank isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default BasicInfo;

const BaseContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
`;
