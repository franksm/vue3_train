import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/LoginView.vue'

export const LOGIN_VIEW: RouteRecordRaw = {
  path: '/',
  name: 'Login',
  component: Login,
  props: true
}
