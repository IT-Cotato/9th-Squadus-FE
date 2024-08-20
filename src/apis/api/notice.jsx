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
