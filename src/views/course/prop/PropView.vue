<template>
  <div class="full-height-width">
    1. 請讓name能正確取到inject數值
    <br>
    2. 請讓顯示資訊能顯示現在密碼調整後的值
    <br>
    3. 請調用子組建的方法gohome
    <emp-basic-form ref="empBasicFormRef" v-model:password="form.password" :name="form.name"> </emp-basic-form>
    <el-button @click="showInfo">顯示資訊</el-button>
    <el-button v-if="empBasicFormRef" @click="goHomeView">子組件的GOHOME</el-button>
  </div>
</template>

<script lang="ts" setup>
import EmpBasicForm from '@/views/course/prop/components/EmpBasicForm.vue'
import { inject, onMounted, ref, type Ref } from 'vue'
import { useLoginForm } from '@/views/login/useLoginForm'

// provide與inject跨組件管理
const name = inject('userName')
const { form } = useLoginForm()

const empBasicFormRef: Ref = ref(null)

const showInfo = () => {
  alert('name: ' + form.value.name + ', password: ' + form.value.password)
}

const goHomeView = () => {
  // 呼叫子組件方法
}

onMounted(async () => {
  if (name) {
    form.value.name = name as string
  }
})
</script>
