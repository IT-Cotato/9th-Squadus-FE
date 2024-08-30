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
  return api.get('/v1/api/match-requests', {
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
  return api.get('/v1/api/match-requests/received', {
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
    throw error;
  })
}

// 특정 매칭 게시글에 매칭 요청 API 호출 함수
export const postMatchRequest = (accessToken, clubMemberId, matchPostId) => {
  return api.post('/v1/api/matches/request', {
    clubMemberId: clubMemberId,
    matchPostId: matchPostId
  }, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("특정 매칭 게시글에 매칭 요청 API 호출 오류", error);
    throw error;
  })
}

// 매칭 요청 승낙/거절 API 호출 함수
export const postMatchDecision = (accessToken, requestId, decision, clubMemberId) => {
  return api.post(`/v1/api/match-requests/${requestId}/decision`, null, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    },
    params: {
      decision: decision,
      clubMemberId: clubMemberId
    }, 
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("매칭 요청 승낙/거절 API 호출 오류", error);
    throw error;
  })
}


//////////////////////////////////////////////////

// 매치 상세보기 API 호출 함수
export const getMatchDetail = (accessToken, matchPostId) => {
  return api.get(`/v1/api/match-results/${matchPostId}/details`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("매치 상세보기 API 호출 오류", error);
    throw error;
  })
}

// 매치 결과 추가 API 호출 함수 (매치 속 경기 하나하나)
export const postGameResult = (accessToken, matchPostId, clubMemberId, homeScore, awayScore) => {
  return api.post(`/v1/api/match-results/${matchPostId}/add-result`, {
    clubMemberId: clubMemberId,
    homeScore: homeScore,
    awayScore: awayScore
  }, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("매치 결과 추가 API 호출 오류", error);
    throw error;
  })
}

// 매치 결과 수정 API 호출 함수
export const putGameResult = (accessToken, matchResultId, clubMemberId, homeScore, awayScore) => {
  return api.put(`/v1/api/match-results/${matchResultId}/update-result`, {
    clubMemberId: clubMemberId,
    homeScore: homeScore,
    awayScore: awayScore
  }, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("매치 결과 수정 API 호출 오류", error);
    throw error;
  })
}

// 매치 승리 결과 API 호출 함수
export const getFinalResult = (accessToken, matchPostId, clubMemberId) => {
  return api.get(`/v1/api/match-results/${matchPostId}/final-result`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    },
    params: {
      clubMemberId: clubMemberId,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("매치 승리 결과 API 호출 오류", error);
    throw error;
  })
}

// 매칭 상세보기 및 승리정보 API 호출 함수
export const getMatchDetailWithWin = (accessToken, matchPostId) => {
  return api.get(`/v1/api/match-results/${matchPostId}/details-with-win`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("매칭 상세보기 및 승리정보 API 호출 오류", error);
    throw error;
  })
}