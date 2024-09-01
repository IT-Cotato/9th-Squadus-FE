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
export const getMercenaries = (accessToken) => {
  return api.get('/v1/api/mercenary', {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error("용병 게시글 조회 API 호출 오류", error);
    throw error;
  })
}

// 개인이 신청한 용병 매치 목록 조회(전체) API 호출 함수
export const getMercenaryRequests = (accessToken) => {
  return api.get('/v1/api/mercenary-requests', {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("개인이 신청한 용병 매치 목록 조회(전체) API 호출 오류", error);
    throw error;
  })
}

// 내 동아리가 신청받은 용병 매칭 요청 목록 조회(전체) API 호출 함수
export const getMercenaryReceiveds = (accessToken, clubId) => {
  return api.get('/v1/api/mercenary-requests/received', {
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
    console.log("내 동아리가 신청받은 용병 목록 조회(전체) API 호출 오류", error);
    throw error;
  })
}

// 특정 용병 게시글에 용병 신청 API 호출 함수
export const postMercenaryRequest = (accessToken, mercenaryPostId) => {
  return api.post('/v1/api/mercenary/request', {
    mercenaryPostId: mercenaryPostId
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
    console.log("특정 용병 게시글에 용병 신청 API 호출 오류", error);
    throw error;
  })
}

// 용병 매칭 요청 승낙/거절 API 호출 함수
export const postMercenaryDecision = async(accessToken, requestId, decision, clubMemberId) => {
  return await api.post(`/v1/api/mercenary-requests/${requestId}/decision`, null, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken},`
    }, 
    params: {
      decision: decision,
      clubMemberId: clubMemberId
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log("용병 매칭 요청 승낙/거절 API 호출 오류", error);
    throw error;
  })
}