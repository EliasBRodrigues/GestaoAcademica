// import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// import { config } from '../constants/Constant';
// import { parseJwt } from '../services/Helper';

// // Tipos de dados

// interface User {
//   accessToken: string;
//   username: string;
//   email?: string;
//   name?: string;
//   [key: string]: any;
// }

// interface UserResponse {
//   username: string;
//   email: string;
//   name: string;
//   ra: string;
//   // Adicione outros campos conforme necessário
// }

// interface ApiResponse<T = any> {
//   data: T;
//   status: number;
// }

// export const orderApi = {
//   authenticate,
//   getUserMe,
// }

// // Funções de API
// function authenticate(username: string, password: string): Promise<AxiosResponse<ApiResponse<{ token: string }>>> {
//   return instance.post('/auth/authenticate', { username, password }, {
//     headers: { 'Content-type': 'application/json' }
//   })
// }

// function getUserMe(user: User): Promise<AxiosResponse<ApiResponse<UserResponse>>> {
//   return instance.get('/api/user', {
//     headers: { 'Authorization': bearerAuth(user) }
//   })
// }

// // -- Axios Configuration

// const instance = axios.create({
//   baseURL: config.url.API_BASE_URL
// })

// instance.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
//   // If token is expired, redirect user to login
//   if (config.headers?.Authorization) {
//     const token = (config.headers.Authorization as string).split(' ')[1]
//     const data = parseJwt(token)
//     if (Date.now() > data.exp * 1000) {
//       window.location.href = "/login"
//     }
//   }
//   return config
// }, function (error) {
//   return Promise.reject(error)
// })

// // -- Helper function for Bearer Auth

// function bearerAuth(user: User): string {
//   return `Bearer ${user.accessToken}`
// }
