<template>
  <div class="full-height-width">
    <the-navbar></the-navbar>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import TheNavbar from '@/views/layout/TheNavbar.vue'
</script>
