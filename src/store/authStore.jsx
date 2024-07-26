import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  accessToken: null,

  // 로그인
  login: (user, accessToken) => {
    set({ isAuthenticated: true, user, accessToken });
    localStorage.setItem('accessToken', accessToken); // 로컬 스토리지에 액세스토큰 저장
    console.log("로그인 함수 호출")
  },

  // 로그아웃
  logout: () => {
    set({ isAuthenticated: false, user: null, accessToken: null });
    localStorage.removeItem('accessToken'); // 로컬 스토리지에서 액세스토큰 제거
    console.log("로그아웃 함수 호출")
  },

  // 초기화: 로컬스토리지에서 accessToken 가져와서 사용자 상태 확인
  initialize: () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      // 토큰이 있을 경우 유효성 검사를 추가할 수 있습니다.
      set({ isAuthenticated: true, accessToken });
    }
  }
}));

export default useAuthStore;
