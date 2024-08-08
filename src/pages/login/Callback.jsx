import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const setTokens = useAuthStore(state => state.setTokens);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken && refreshToken) {
      // localStorage.setItem("access_token", accessToken);
      // localStorage.setItem("refresh_token", refreshToken);
      setTokens(accessToken, refreshToken);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [location, navigate, setTokens]);

  return (
    <div>
      <h2>Processing authentication...</h2>
    </div>
  );
};

export default Callback;