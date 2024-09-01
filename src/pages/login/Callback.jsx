import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setTokens, fetchAndStoreUserData } = useAuthStore();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken && refreshToken) {
      // 액세스토큰, 리프레시토큰을 로컬스토리지에 저장
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      // 유저 데이터 불러오기
      fetchAndStoreUserData();
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [location, navigate, setTokens, fetchAndStoreUserData]);

  return (
    <div>
      <h2>Processing authentication...</h2>
    </div>
  );
};

export default Callback;