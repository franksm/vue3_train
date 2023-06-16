<template>
    <div style="margin-bottom: 30px">
        <el-row>
            <el-col :span="20">
                1.請讓第四課案紐導向/errorView/404
                <br>
                2.請讓頁面依據/404，顯示對應的錯誤訊息
                <br><br><br>
                
                <div v-if="errorCode == '404'">
                    ErrorMessage: 404
                </div>
                <div v-else-if="errorCode == '500'">
                    ErrorMessage: 500
                </div>
                <div v-else>
                    ErrorMessage: {{errorCode}}
                </div>
            </el-col>
        </el-row>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const errorCode = ref('errorCode' as string)

// 取得導頁時的param參數並賦予errorCode

</script>