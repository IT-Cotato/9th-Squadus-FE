import PromotionItem from "./PromotionItem";
import { BaseContainer } from "./Components_styled";
import WriteButton from "./WriteButton";
import { useState } from "react";
import PromotionWrite from "../PromotionWrite";
const List = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
];

const OnCampus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };
  return (
    <>
      <BaseContainer>
        {List.map((item) => (
          <PromotionItem key={item.id} />
        ))}
        <WriteButton onClick={openModal} />
      </BaseContainer>
      <PromotionWrite isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default OnCampus;
