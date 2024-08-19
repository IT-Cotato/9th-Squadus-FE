import api from "../utils/api";

// 매치 생성 API 호출 함수
export const createMatch = (accessToken, matchData) => {
  return api.post('/v1/api/matches', matchData, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('매치 생성 중 오류가 발생했습니다:', error);
    throw error;
  });
};
