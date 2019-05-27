<template>
  <div class="container">
    <div>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-menu-item index="1">
          <i>导航一</i>
        </el-menu-item>
        <el-menu-item index="2">
          <i>导航二</i>
        </el-menu-item>
        <el-menu-item index="3">
          <i>导航三</i>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
