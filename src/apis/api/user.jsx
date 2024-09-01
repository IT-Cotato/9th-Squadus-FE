import api from "../utils/api";

// 사용자 데이터를 가져오는 API 호출 함수
export const getUserInfo = (accessToken) => {
  return api.get('/v1/api/members/info', {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('getUserInfo 실패:', error);
    throw error;
  });
};

// 사용자가 속한 동아리 정보를 가져오는 API 호출 함수
export const getUserClubs = (accessToken) => {
  return api.get('/v1/api/members/clubs', {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    },
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('getUserClubs 실패:', error);
    throw error;
  });
};

// 사용자가 관리자로 속한 동아리 정보를 필터링하는 함수
export const getAdminClubs = async (accessToken) => {
  try {
    const clubs = await getUserClubs(accessToken);
    const adminClubs = clubs.memberClubResponseList.filter(club => club.isAdmin);
    return adminClubs;
  } catch (error) {
    console.error('getAdminClubs 실패:', error);
    throw error;
  }
};

