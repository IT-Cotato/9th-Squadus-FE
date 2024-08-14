import styled from "styled-components";
import { ReactComponent as Search } from "../../../assets/icons/promotion/search.svg";
import { ReactComponent as New } from "../../../assets/icons/promotion/new.svg";

const PromotionHeader = () => {
  return (
    <BaseContainer>
      <TopTitle>
        <TopBar>
          <Tab>교내</Tab>
          <Tab>연합</Tab>
        </TopBar>
        <Introduce>
          동아리 지원 현황
          <New />
        </Introduce>
      </TopTitle>
      <Search />
    </BaseContainer>
  );
};
export default PromotionHeader;

const BaseContainer = styled.div`
  width: 100%;
  height: 64px;
  padding: 20px 20px;
  justify-content: space-between;
  display: flex;
`;

const TopTitle = styled.div`
  width: 226px;
  height: 42px;
  display: flex;
  gap: 16px;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  color: #101828;
`;
const Introduce = styled.div`
  width: 105px;
  height: 22px;
  gap: 4px;
  display: flex;
`;

const TopBar = styled.div`
  width: 92px;
  height: 42px;
  display: flex;
  gap: 8px;
`;
const Tab = styled.div`
  width: 42px;
  height: 36px;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  color: #98a2b3;
`;
