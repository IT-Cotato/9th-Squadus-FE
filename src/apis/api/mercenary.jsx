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
    console.error('용병 생성 API 호출 오류', error);
    throw error;
  });
};

// 용병 게시글 조회 API 호출 함수
export const getMercenaries = (accessToken, clubMemberId) => {
  return api.get('/v1/api/mercenary', {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    },
    params: {
      clubMemberId: clubMemberId,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error("용병 게시글 조회 API 호출 오류", error);
    throw error;
  })
}