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
export const getMatches = (accessToken) => {
  return api.get('/v1/api/matches', {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error("매치 게시글 조회 API 호출 오류", error);
    throw error;
  })
}

// 내 동아리에서 신청한 매치 목록 조회(전체) API 호출 함수
export const getMatchRequests = (accessToken, clubId) => {
  return api.get('/api/match-requests', {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    },
    params: {
      clubId: clubId,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("내 동아리에서 신청한 매치 목록 조회(전체) API 호출 오류", error);
    throw error;
  })
}

// 내 동아리가 신청받은 매치 목록 조회(전체) API 호출 함수
export const getMatchReceiveds = (accessToken, clubId) => {
  return api.get('/api/match-requests/received', {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    },
    params: {
      clubId: clubId
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("내 동아리가 신청받은 매치 목록 조회(전체) API 호출 오류", error);
    
  })
}