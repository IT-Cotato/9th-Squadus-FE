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
    console.error('매치 생성 API 호출 오류', error);
    throw error;
  });
};

// 매치 게시글 조회 API 호출 함수
export const getMatches = (accessToken, clubMemberId) => {
  return api.get('/v1/api/matches', {
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
    console.error("매치 게시글 조회 API 호출 오류", error);
    throw error;
  })
}