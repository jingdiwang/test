import http from './http'
import md5 from 'js-md5'

export function login(loginName, password) {
  return http.post('/user/login', {
    loginName,
    passwordMd5: md5(password)
  })
}

export function register(loginName, password) {
  return http.post('/user/register', {
    loginName,
    password
  })
}

export function getUserInfo() {
  return http.get('user/info')
}

export function getUserOrder(pageNumber, status) {
  return http.get(`/order?pageNumber=${pageNumber}&status=${status}`)
}