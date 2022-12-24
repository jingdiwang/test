import http from './http'

export function indexInfo() {
  return http.get('/index-infos')
}

export function categoriesInfo() {
  return http.get('/categories')4
}