import http from '@/http/http'

export default class Api {
  static getData = () => {
    // 請參考 vite.config.ts viteMockServe
    return http.get('/mock/getData')
  }
}
