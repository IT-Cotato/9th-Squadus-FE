import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import PromotionHeader from "./promotion_components/PromotionHeader";
import FilterBar from "../../components/FilterBar";
import axios from "axios";
import { CountyOptions } from "../../components/FilterBar";
import ApplyStatus from "./ApplyStatus";

export const PromotionContext = createContext();

const Promotion = () => {
  const [selectedTab, setSelectedTab] = useState("oncampus");
  const [promotionData, setPromotionData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [reset, setReset] = useState(true);
  // selected 상태를 Promotion에서 관리
  const [selected, setSelected] = useState({
    city: "지역",
    counties: CountyOptions["지역"],
    sportCategory: "",
    tier: "",
    category: "",
  });
  const initial = {
    city: "지역",
    counties: CountyOptions["지역"],
    sportCategory: "",
    tier: "",
    category: "",
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelected((prevState) => {
      const newSelected = {
        ...prevState,
        [name]: value,
        counties: name === "city" ? CountyOptions[value] : prevState.counties,
      };
      filterData(newSelected);
      setReset(false);
      if (selected === initial) setReset(true);
      return newSelected;
    });
  };

  const filterData = (newSelected) => {
    const { city, sportCategory, tier, category } = newSelected;
    const filtered = promotionData.filter((item) => {
      console.log("itemitem", item);
      return (
        (city === "지역" || item.region.city === city) &&
        (sportCategory === "" || item.sportsCategory === sportCategory) &&
        (tier === "" || item.clubTier === tier) &&
        (category === "" || item.category === category)
      );
    });
    setFilteredData(filtered);
  };

  const getAllPromotion = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/v1/api/recruitments`,
        {
          params: {
            page: 0,
            size: 5,
            sort: "createdAt,desc",
          },
          headers: {
            "Content-Type": "application/json",
            access: localStorage.getItem("accessToken"),
          },
        }
      );
      console.log("홍보글", res.data.content);
      setPromotionData(res.data.content);
      setFilteredData(res.data.content); // 초기 데이터 설정
    } catch (err) {
      console.error("에러 발생:", err);
    }
  };

  useEffect(() => {
    getAllPromotion();
  }, []);

  return (
    <>
      <PromotionContext.Provider value={reset ? promotionData : filteredData}>
        <FixedContainer>
          <PromotionHeader setSelectedTab={setSelectedTab} />
          <FilterBar
            selected={selected}
            setSelected={setSelected}
            handleChange={handleChange}
          />
        </FixedContainer>
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </PromotionContext.Provider>
    </>
  );
};

export default Promotion;

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
