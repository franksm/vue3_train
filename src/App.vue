<template>
  <div
    class="app full-height-width"
    style="margin-top: 10px; margin-left: 100px; margin-right: 100px"
  >
    <the-loading></the-loading>
    <the-header></the-header>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/views/layout/TheHeader.vue'
import TheLoading from '@/views/layout/TheLoading.vue'
</script>
