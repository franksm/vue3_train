<template>
  <div class="full-height-width">
    <div>
      <el-row>
        <el-col :span="20">
          <el-main>
            <el-form ref="formRef" :model="form">
              <el-form-item>使用者登入</el-form-item>
              <el-form-item prop="name">
                <el-input v-model="form.name" placeholder="name" disabled></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="form.password"
                  placeholder="password"
                  @change="change"
                ></el-input>
              </el-form-item>
            </el-form>
            <el-button @click="goHome">goHome</el-button>
          </el-main>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue'
import { useLoginForm } from '@/views/login/useLoginForm'
import router from '@/router'

const props = defineProps({
  name: { type: String, default: '' }
})

const { form } = useLoginForm()

const change = () => {
  // 呼叫emit，回傳給父組件
}

const goHome = () => {
  router.push({
    name: 'HOME'
  })
}

// watch(
//   () => props.name,
//   async (newValue: string) => {
//     form.value.name = newValue
//   }
// );

watchEffect(() => {
  form.value.name = props.name
})

defineExpose({
  goHome
})
</script>
