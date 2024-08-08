import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const accessToken = params.get("access_token");
    const refreshToken = params.get("refresh_token");

    if (accessToken && refreshToken) {
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      navigate("/");
    } else {
      navigate("/");
    }
  }, [location, navigate]);

  return (
    <div>
      <h2>Processing authentication...</h2>
    </div>
  );
};

export default Callback;