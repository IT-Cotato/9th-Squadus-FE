import api from "../utils/api";
import qs from 'qs';

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

// 동아리원 전체 조회 API
export const getClubMembers = async(accessToken, clubId) => {
  return await api.get(`/v1/api/clubs/${clubId}/members`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('동아리원 전체 조회 API 호출 오류: ', error);
    throw error;
  })
}

// 동아리 회비 등록 API
export const postFee = async(accessToken, clubId, feeData) => {
  return await api.post(`/v1/api/clubs/${clubId}/fees`, null, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    },
    params: feeData,
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }) 
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('동아리 회비 등록 API 호출 오류: ', error);
    throw error;
  })
}

// 동아리 회비 입금 현황 조회 API
export const getFeeStatus = async(accessToken, clubId, feeTypeId) => {
  return await api.get(`/v1/api/clubs/${clubId}/fees/${feeTypeId}/payment`, {
    headers: {
      'Content-Type': 'application/json',
      access: `${accessToken}`,
    }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error('동아리 회비 입금 현황 조회 API 호출 오류: ', error);
    throw error;
  })
}