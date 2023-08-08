<template>
  <div>
    <el-row>
      <el-col :span="20">
        1. 請協助修復好API
        <el-input v-model="data.name" disabled></el-input>
        <el-button @click="doApi">模擬API取值</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import Api from '@/api/Api'
import type { dataVo } from '@/views/course/type/course'
import { ref } from 'vue'
import { useLoadingStore } from "@/stores/store";

const data = ref({} as dataVo)
const store = useLoadingStore();

const doApi = async () => {
  store.openLoading();
  try {
    const res = await Api.getData();
    data.value = res.data;
  } catch (err) {
    store.closeLoading();
  }
  store.closeLoading();
}
</script>