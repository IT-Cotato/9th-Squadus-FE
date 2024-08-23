import PromotionItem from "./PromotionItem";
import { BaseContainer } from "./Components_styled";
import WriteButton from "./WriteButton";
import { useContext, useEffect, useState } from "react";
import PromotionWrite from "../PromotionWrite";
import { PromotionContext } from "../Promotion";

const OffCampus = () => {
  const data = useContext(PromotionContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log(isModalOpen);
  };
  const filterData = data.filter((item) => item.clubCategory !== "SCHOOL");
  console.log("filterDatafilterDatafilterData", data);
  return (
    <>
      <BaseContainer>
        {filterData.map((item) => (
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

export default OffCampus;
