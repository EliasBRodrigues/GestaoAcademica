import axios from 'axios'
import api from './constant/api'
import { parseJWT } from './JWT'

export const Requests = {
    authenticate,
    getUserByEmail
  }
  
  function authenticate(username, password) {
    return api.post('/auth/authenticate', { username, password }, {
      headers: { 'Content-type': 'application/json' }
    });
  }

  function getUserByEmail(email) {
    const url = email ? `/api/students/student/user/${email}` : '/api'
    return api.get(url);
  }

  function getGradesById(id) {
    const url = id ? `/api/grade/classroom/${id}` : '/api'
    return api.get(url);
  }
  
  api.interceptors.request.use(function (api) {
    if (api.headers.Authorization) {
      const token = api.headers.Authorization.split(' ')[1]
      const data = parseJWT(token)
      if (Date.now() > data.exp * 1000) {
        window.location.href = "/login"
      }
    }
    return api
  }, function (error) {
    return Promise.reject(error)
  })
