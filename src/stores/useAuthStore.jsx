import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import api from '../api/api';

const useAuthStore = create(persist((set) => ({
  accessToken: null,
  refreshToken: null,
  userData: null,
  setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
  setUserData: (userData) => set({ userData }),
  clearTokens: () => set({ accessToken: null, refreshToken: null, userData: null }),
  fetchUserData: async () => {
    const { accessToken } = useAuthStore.getState();
    if (!accessToken) return;
  
    await api.get('/v1/api/members/info', {
      headers: {
        'Content-Type': 'application/json',
        access: `${accessToken}`
      }
    })
    .then((response) => {
      set({ userData: response.data });
      console.log('User data fetched:', response.data);
    })
    .catch((error) => {
      console.error('Failed to fetch user data:', error);
    });
  }
}), {
  name: "auth",
  getStorage: () => localStorage
}));

export default useAuthStore;