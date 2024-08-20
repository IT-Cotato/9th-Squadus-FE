import api from "../utils/api";

// 용병 생성 API 호출 함수
export const createMercenary = (accessToken, mercenaryData) => {
  return api.post('/v1/api/mercenary', mercenaryData, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('용병 생성 중 오류가 발생했습니다:', error);
    throw error;
  });
};
