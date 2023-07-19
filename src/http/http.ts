import qs from 'qs'
import axios, { type AxiosInstance } from 'axios'
import { ElNotification } from 'element-plus'

const http: AxiosInstance = axios.create({
  timeout: 60000,
  baseURL: 'http://localhost:5173/',
  headers: {
    common: {
      Accept: 'application/json;charset=utf-8'
    },
    // 避免 IE 11 cache
    Pragma: 'no-cache',
    'Content-Type': 'application/json;charset=utf-8'
    // "Content-Language": I18n.global.locale.value
  },
  paramsSerializer(params) {
    return qs.stringify(params, { allowDots: true })
  }
})

http.interceptors.response.use(
  (res) => {
    const { data } = res

    if (typeof data !== 'object') {
      console.log(data)
      ElNotification.error('服務器異常!')
    }
    if (data.code != 200) {
      if (data.message) {
        ElNotification.error(data.message)
      } else {
        ElNotification.error('失敗!')
      }
    }

    return res
  },
  (err: any) => {
    ElNotification.error({
      showClose: true,
      message: '服務器異常!!',
      type: 'error'
    })
    return err
  }
)

export default http
