<template>
  <div style="margin-bottom: 30px">
    <el-row>
      <el-col :span="20">
        <el-button @click="goMockView"> 第一課Mock</el-button>
        <el-button @click="goCountView"> 第二課Composition API</el-button>
        <el-button @click="goPropView"> 第三課Prop/emits</el-button>
        <el-button @click="goErrorView"> 第四課錯誤頁</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goMockView = () => {
  router.push({
    name: 'MOCK_VIEW'
  })
}

const goCountView = () => {
  router.push({
    name: 'COUNT_VIEW'
  })
}

const goPropView = () => {
  router.push({
    name: 'PROP_VIEW'
  })
}

const goErrorView = () => {
  router.push({
    name: 'ERROR_VIEW',
    params: { errorCode: '999' }
  })
}
</script>
