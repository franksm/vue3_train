<template>
  <div>
    1. 請協助修復深色版模式為黑色而非紫色 <br />
    <el-button @click="toggleDark">Toggle Dark Mode</el-button>
    <p>Current mode: {{ isDark ? 'Dark' : 'Light' }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useDark } from '@vueuse/core'

const isDark = useDark({
  selector: 'html',
  attribute: 'id',
  valueDark: 'dark',
  valueLight: 'light'
})

const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>
