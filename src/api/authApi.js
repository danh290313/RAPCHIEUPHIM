import axiosClient from './axiosClient';

const authApi = {
  login: data => {
    const url = '/login';
    return axiosClient.post(url, data);
  },

  register: data => {
    const url = '/register';
    return axiosClient.post(url, data);
  },

  getUserInfo: (userId, token) => {
    const url = '/customer?userId=';
    return axiosClient.get(url + userId, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
  getHistory: (userId, token) => {
    const url = '/scheduleByUserId?id=';
    return axiosClient.get(url + userId, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },

  getHistorySearch: (userId, search, token) => {
    const url = '/scheduleByUserId?id=';
    return axiosClient.get(url + userId + `&q=` + search, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },

  updateUserInfo: (id, formData, token) => {
    const url = '/customer/';
    return axiosClient.put(url + id, formData, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },

  resetPassword: data => {
    const url = '/auth/resetPassword';
    return axiosClient.post(url, data);
  },

  changePassword: (data, token) => {
    const url = '/auth/changePassword';
    return axiosClient.post(url, data, {
      headers: { Authorization: 'Bearer ' + token },
    });
  },
};

export default authApi;
