import axios, { AxiosInstance } from 'axios';
import { parseJWT } from '../JWT';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = user?.accessToken;

    if (token) {
      const data = parseJWT(token);
      if (Date.now() > data.exp * 10000) {
        window.location.href = '/';
        return Promise.reject('Token expirado');
      }
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;