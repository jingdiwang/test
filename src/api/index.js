import http from './http'

export function indexInfo() {
  return http.get('/index-infos')
}