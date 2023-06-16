import { ref } from 'vue'

export const useCount = () => {
  /** 計數器參數 */
  const count = ref(0 as number)

  const add = () => {
    count.value = count.value + 1
  }

  return {
    count,
    add
  }
}
