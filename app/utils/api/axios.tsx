import axios from 'axios';
import {API_BASE_URL, accessToken} from './apiConfig';

let headers = {};
const authAxios = axios.create({
  baseURL: API_BASE_URL,
  headers,
});

authAxios.interceptors.request.use(
  async config => {
    if (!config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    config.headers['accept'] = 'application/json';
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export {authAxios};
