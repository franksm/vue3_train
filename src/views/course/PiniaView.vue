<template>
  <div>
    <el-row>
      <el-col :span="20">
        1. 請讓count也能正常增加
        <br />
        count: {{ count }}
        <br />
        store.count: {{ store.count }}
        <br />
        <el-button @click="store.increment">增加</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
// 可參照 pinia: storeToRefs or vue: toRef 來得到響應式
const count = storeToRefs(store).count

// 與watch相同, pinia的特殊用法
store.$subscribe((mutation, state) => {
  if (state.count > 5) {
    state.count = 0
  }
})
</script>
@/stores/store