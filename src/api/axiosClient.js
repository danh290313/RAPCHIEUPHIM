import axios from 'axios';
import queryString from 'query-string';
import { parse, stringify } from 'qs'
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },

});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    return Promise.reject(error);
  }
);

export default axiosClient;
