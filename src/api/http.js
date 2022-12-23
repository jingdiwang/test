import axios from 'axios'

const http = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://backend-api-01.newbee.ltd/api/v1/' : '/api/v1',
  timeout: 1000,
});

http.interceptors.request.use(function (config) {
  config.headers.token = localStorage.getItem('xToken')
  return config;
}, function (error) {
  return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default http