import React, { createContext, useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import PromotionHeader from "./promotion_components/PromotionHeader";
import { useState } from "react";
import FilterBar from "../../components/FilterBar";
import axios from "axios";
export const PromotionContext = createContext();
const Promotion = () => {
  const [selectedTab, setSelectedTab] = useState("oncampus");
  const [promotionData, setPromotionData] = useState([]);
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
    } catch (err) {
      console.error("에러 발생:", err);
    }
  };

  useEffect(() => {
    getAllPromotion();
  }, []);

  return (
    <>
      <PromotionContext.Provider value={promotionData}>
        <FixedContainer>
          <PromotionHeader setSelectedTab={setSelectedTab} />
          <FilterBar />
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
