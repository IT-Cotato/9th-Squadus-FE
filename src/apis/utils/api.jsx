import axios from "axios";
import useAuthStore from "../../stores/useAuthStore";

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

let isTokenRefreshing = false; // 토큰 재발급 중 여부를 체크하기 위한 플래그

// Axios 인터셉터로 401 에러 발생 시 재발급 로직 추가
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      if (isTokenRefreshing) return Promise.reject(error); // 이미 재발급 중이면 추가 재발급 방지
      console.log("이미 발급 중인지 여부: ", isTokenRefreshing);
      originalRequest._retry = true;
      isTokenRefreshing = true;

      try {
        // 토큰 재발급 시도
        await useAuthStore.getState().reissueTokens();

        // 로컬 스토리지에서 갱신된 액세스 토큰 가져오기
        const accessToken = localStorage.getItem("accessToken");

        // 새로운 액세스 토큰으로 헤더 업데이트
        originalRequest.headers["access"] = accessToken;

        isTokenRefreshing = false;

        // 재발급 후 원래 요청 재시도
        return api(originalRequest);
      } catch (err) {
        isTokenRefreshing = false;
        return Promise.reject(err); // 재발급 실패 시 에러 반환
      }
    }

    return Promise.reject(error);
  }
);

export default api;
