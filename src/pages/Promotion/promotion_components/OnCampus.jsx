import PromotionItem from "./PromotionItem";
import { BaseContainer } from "./Components_styled";
import WriteButton from "./WriteButton";
import { useContext, useEffect, useState } from "react";
import PromotionWrite from "../PromotionWrite";
import { PromotionContext } from "../Promotion";

const OnCampus = () => {
  const data = useContext(PromotionContext);
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
        {data.map((item) => (
          <PromotionItem
            key={item.recruitingPostId}
            startDate={item.startDate}
            endDate={item.endDate}
            title={item.title}
            region={item.region}
            sportsCategory={item.sportsCategory}
            clubTier={item.clubTier}
            tags={item.tags}
            clubId={item.clubId}
          />
        ))}
        <WriteButton onClick={openModal} />
      </BaseContainer>
      <PromotionWrite isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default OnCampus;
