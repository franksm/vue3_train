<template>
  <div>
    <el-row>
      <el-col :span="8">
        <!-- logo -->
        <div class="header-img" style="margin-left: 5px">
          <img class="img" src="@/assets/images/logo.png" style="cursor: pointer" />
          vue3 的 學習小教室
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.header-img {
  line-height: 60px;
  height: 60px;
}

.img {
  height: 35px;
  vertical-align: middle;
}
</style>
