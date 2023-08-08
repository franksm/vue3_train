import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

let enableLoadingTime = 0;

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)

  const openLoading = () => {
    if (!isLoading.value) {
      enableLoadingTime = Date.now();
      isLoading.value = true;
    }
  }

  const closeLoading = () => {
    if (isLoading.value) {
      // 最短loading時間，避免loading太快，畫面閃動
      const minLoadingTime = 400;
      const postLoadingTime = Date.now() - enableLoadingTime;
      // 是否低於最短loading時間
      const isShorterMin = postLoadingTime < minLoadingTime;
      // 剩餘loading時間
      const remainTime = minLoadingTime - postLoadingTime;

      setTimeout(
        () => {
          isLoading.value = false;
        },
        isShorterMin ? remainTime : 0
      );
    }
  }

  return { isLoading, openLoading, closeLoading }
})
