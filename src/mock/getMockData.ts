import { type MockMethod } from 'vite-plugin-mock'
const getData = {
  url: '/mock/getData',
  method: 'get',
  response: () => {
    return {
      name: 'frank'
    }
  }
}

export default [getData] as MockMethod[]
