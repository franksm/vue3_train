<template>
  <div>
    <el-row>
      <el-col :span="20">
        2.請協助讓三個按鈕獨立事件
        <el-input v-model="count"></el-input>
        <el-button @click="add">加1</el-button>

        <el-input v-model="count"></el-input>
        <el-button @click="add">加1</el-button>

        <el-input v-model="count"></el-input>
        <el-button @click="add">加1</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useCount } from '@/views/course/count/useCount'

// 針對功能與邏輯重複使用 Compostion API 能有效地處理
const { add, count } = useCount()
</script>
