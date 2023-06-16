import type { RouteRecordRaw } from 'vue-router'
import MockView from '@/views/course/MockView.vue'
import CountView from '@/views/course/count/CountView.vue'
import PropView from '@/views/course/prop/PropView.vue'
import ErrorView from '@/views/course/ErrorView.vue'

export const MOCK_VIEW: RouteRecordRaw = {
  path: '/mockView',
  name: 'MOCK_VIEW',
  component: MockView,
  props: true
}

export const COUNT_VIEW: RouteRecordRaw = {
  path: '/countView',
  name: 'COUNT_VIEW',
  component: CountView,
  props: true
}

export const PROP_VIEW: RouteRecordRaw = {
  path: '/propView',
  name: 'PROP_VIEW',
  component: PropView,
  props: true
}

export const ERROR_VIEW: RouteRecordRaw = {
  path: '/errorView/:errorCode',
  name: 'ERROR_VIEW',
  component: ErrorView,
  props: true
}
