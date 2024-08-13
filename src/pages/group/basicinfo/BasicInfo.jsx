import styled from 'styled-components';
import { useState } from 'react';
import ClubMainInfo from './basicInfo_components/ClubMainInfo';
import ClubSubInfo from './basicInfo_components/ClubSubInfo';
import Rank from './Rank';

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

const BasicInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <BaseContainer>
        <ClubMainInfo
          region={'서울'}
          personality={'모두 환영'}
          name={'중앙 가르드'}
          memRecent={32}
          memMax={40}
          establishDate={'2023.09.01'}
        />
        <ClubSubInfo onClick={toggleModal} />
      </BaseContainer>

      <Rank isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default BasicInfo;
