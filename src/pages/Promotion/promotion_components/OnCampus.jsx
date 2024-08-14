import PromotionItem from "./PromotionItem";
import { BaseContainer } from "./Components_styled";
const qwe = [
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
  return (
    <BaseContainer>
      {/* <PromotionItem />
      <PromotionItem />
      <PromotionItem />
      <PromotionItem />
      <PromotionItem />
      <PromotionItem />
      <PromotionItem />
      <PromotionItem />
      <PromotionItem /> */}
      {qwe.map((item) => (
        <PromotionItem key={item.id} />
      ))}
    </BaseContainer>
  );
};

export default OnCampus;
