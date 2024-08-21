import api from "../utils/api";

// 동아리 공지 전체조회 API 호출 함수
export const getNotices = (accessToken, clubId) => {
  return api.get(`/v1/api/clubs/${clubId}/posts`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('동아리 공지 전체 조회 API 호출 오류', error);
    throw error;
  })
}

// 동아리 공지 단건 조회 API 호출 함수
export const getNotice = (accessToken, clubId, postId) => {
  return api.get(`/v1/api/clubs/${clubId}/posts/${postId}`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('동아리 공지 단건 조회 API 호출 오류', error);
    throw error;
  })
}

export const getNoticeComments = (accessToken, clubId, postId) => {
  return api.get(`/v1/api/clubs/${clubId}/posts/${postId}/comments`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log('동아리 공지 댓글 API 호출 오류', error);
    throw error;
  })
}