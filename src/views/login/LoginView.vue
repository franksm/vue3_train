<template>
  <div class="full-height-width">
    <div>
      <el-row>
        <el-col :span="20">
          <el-main>
            1. 請協助修復好驗證
            <el-form ref="formRef" :model="form" :rules="rules">
              <el-form-item>使用者登入</el-form-item>
              <el-form-item prop="name" required>
                <el-input v-model="form.name" placeholder="name"></el-input>
              </el-form-item>
              <el-form-item prop="password" required>
                <el-input v-model="form.password" placeholder="password"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="login">登入</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLoginForm } from '@/views/login/useLoginForm'

// 注意看這邊
const { form, rules, login} = useLoginForm()

</script>
