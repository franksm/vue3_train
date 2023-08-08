// 改動前請先暫停機器，避免跑出一堆怪檔案..
import { type MockMethod } from 'vite-plugin-mock'
const getData = {
  url: '/mock/getData',
  method: 'get',
  response: () => {
    return {
      name: 'frank',
      code: 200
    }
  }
}

export default [getData] as MockMethod[]
