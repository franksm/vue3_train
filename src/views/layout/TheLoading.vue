<template>
    <div v-if="isLoading" class="loading-overlay">
      <div class="lds-dual-ring"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useLoadingStore } from "@/stores/store";
  
  export default defineComponent({
    name: "TheLoading",
    setup() {
      const store = useLoadingStore();
  
      return {
        isLoading: computed(() => store.isLoading)
      };
    }
  });
  </script>
  
  <style scoped>
  .loading-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    height: 100vh !important;
    width: 100vw !important;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .lds-dual-ring {
    display: inline-block;
    width: 64px;
    height: 64px;
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 4px solid rgb(0, 158, 150);
    border-color: rgb(0, 158, 150) transparent rgb(0, 158, 150) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  