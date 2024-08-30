import api from "../utils/api";

// 동아리 회비 종류 전체 요약 조회 API
export const getFees = async (accessToken, clubId) => {
  return await api.get(`/v1/api/clubs/${clubId}/fees`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('동아리 회비 종류 전체 요약 조회 API 호출 오류: ', error);
    throw error;
  })
}