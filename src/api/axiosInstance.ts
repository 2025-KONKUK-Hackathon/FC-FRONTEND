import { ROUTES } from '@router/constant/Routes';
import axios from 'axios';
import { RESPONSE_MESSAGE } from './constants';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Accept': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      const message = RESPONSE_MESSAGE[401];
      alert(message);
      localStorage.removeItem('accessToken');
      window.location.href = ROUTES.AUTH.LOGIN; // 페이지 완전 새로고침(인증 만료 시 모든 상태 초기화)
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;