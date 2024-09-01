import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import PromotionHeader from "./promotion_components/PromotionHeader";
import FilterBar from "../../components/FilterBar";
import { CountyOptions } from "../../components/FilterBar";
import api from "../../apis/utils/api";

export const PromotionContext = createContext();
export const RefreshContext = createContext();

const Promotion = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    // 로그인 상태 확인
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      alert("로그인이 필요합니다.");
      navigate("/login"); // 로그인 페이지로 리다이렉트
    }
  }, [navigate]);

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
      const res = await api.get(
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

  const [refresh, setRefresh] = useState(false);
  const changeRefresh = () => {
    setRefresh(!refresh);
  };
  useEffect(() => {
    getAllPromotion();
  }, [refresh]);

  return (
    <>
      <PromotionContext.Provider value={reset ? promotionData : filteredData}>
        <RefreshContext.Provider value={changeRefresh}>
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
        </RefreshContext.Provider>
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
