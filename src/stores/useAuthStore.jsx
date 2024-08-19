import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../apis/utils/api';
import { getUserInfo } from '../apis/api/user';

const useAuthStore = create(
  persist(
    (set) => ({
      userData: null,
      setUserData: (userData) => set({ userData }),

      clearTokens: () => {
        localStorage.removeItem("accessToken");
        document.cookie = `refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; // 쿠키에서 리프레시토큰 제거
        set({ userData: null });
      },

      reissueTokens: async () => {
        console.log("토큰 재발급 함수 실행");

        // 쿠키에서 리프레시토큰 추출
        const refreshToken = document.cookie.split('; ').find(row => row.startsWith('refresh=')).split('=')[1];
        if (!refreshToken) return;

        await api.post('/reissue', null, {
            withCredentials: true,
          })
          .then((response) => {
            console.log(response);
            const newAccessToken = response.data.accessToken;
            localStorage.setItem("accessToken", newAccessToken); // 새로 받은 액세스토큰을 로컬스토리지에 저장
            console.log('reissueTokens 성공', response.data);
          })
          .catch((error) => {
            console.error('reissueTokens 실패', error);
            set({ userData: null });
            localStorage.removeItem("accessToken"); // 실패 시 로컬스토리지에서 액세스토큰 제거
            document.cookie = `refresh=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; // 쿠키에서 리프레시토큰 제거
          });
      },

      fetchAndStoreUserData: () => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) return;

        getUserInfo(accessToken)
        .then((userData) => {
          set({ userData });
          console.log('fetchAndStoreUserData 성공', userData);
        })
        .catch((error) => {
          console.error('fetchAndStoreUserData 실패', error); 
        });
      }
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage, 
    }
  )
);

export default useAuthStore;
