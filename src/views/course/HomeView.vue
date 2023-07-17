<template>
  <div class="full-height-width">
    <the-navbar></the-navbar>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TheNavbar from '@/views/layout/TheNavbar.vue'
import { provide } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue';

const router = useRouter()

provide('userName', 'frank')

onMounted(() => {
  router.push({
    name: 'MOCK_VIEW'
  })
})
</script>
