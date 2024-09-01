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
        localStorage.removeItem("refreshToken");

        set({ userData: null });
      },

      reissueTokens: async () => {
        console.log("토큰 재발급 함수 실행");

        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) return;

        await api.post('/reissue', null, {
            headers: {
              refresh: `${refreshToken}`,
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            console.log(response);
            const newAccessToken = response.headers['access'];
            const newRefreshToken = response.headers['refresh'];

            localStorage.setItem("accessToken", newAccessToken);
            localStorage.setItem("refreshToken", newRefreshToken);
            
            console.log('reissueTokens 성공', response.data);
          })
          .catch((error) => {
            console.error('reissueTokens 실패', error);
            set({ userData: null });

            localStorage.removeItem("accessToken"); // 실패 시 로컬스토리지에서 액세스토큰 제거
            localStorage.removeItem("refreshToken");

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
