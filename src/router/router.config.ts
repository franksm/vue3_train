import {
  MOCK_VIEW,
  COUNT_VIEW,
  PROP_VIEW,
  ERROR_VIEW,
  PINIA_VIEW
} from '@/views/course/course.route'
import { LOGIN_VIEW } from '@/views/login/login.route'

import Home from '@/views/course/HomeView.vue'
import Error from '@/views/layout/TheError.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  LOGIN_VIEW,
  {
    path: '/home',
    name: 'HOME',
    component: Home,
    children: [MOCK_VIEW, COUNT_VIEW, PROP_VIEW, ERROR_VIEW, PINIA_VIEW]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Error
  }
]

export default routes
