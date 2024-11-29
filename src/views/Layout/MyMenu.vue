<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#4a73be"
      text-color="#fff"
      active-text-color="#ffd04b"
      router 
    >
      <!-- 易购管理系统那一行 -->

      <el-menu-item >
        <span slot="title">易购管理系统</span>
      </el-menu-item>

      <!-- 易购管理系统那一行 -->
      <!-- 首页开始 -->
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <!-- 首页结束 -->

      <!-- 商品管理开始 -->
      <el-submenu index="/goods">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>

        <el-menu-item index="2-1">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">商品列表</span>
          </template>
        </el-menu-item>

        <el-menu-item index="2-2">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">商品添加</span>
          </template>
        </el-menu-item>
      </el-submenu>
      <!-- 商品管理结束 -->

      <!-- 规格与包装开始 -->
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">规格与包装</span>
      </el-menu-item>
      <!-- 规格与包装结束 -->

      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>

      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped></style>
