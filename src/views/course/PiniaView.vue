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
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
// 可參照 pinia: storeToRefs or vue: toRef 來得到響應式
const count = store.count
</script>
