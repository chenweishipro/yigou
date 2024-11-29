<template>
  <div class="content">
    <!-- 头部 -->
    <div class="header">头部</div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.content {
  .header {
    height: 50px;
    line-height: 50px;
    background-color: #1e78bf;
  }
}
</style>
