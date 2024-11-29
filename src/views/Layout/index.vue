<template>
  <div class="layout">
    <MyMenu class="menu" />
    <Content class="content" />
  </div>
</template>

<script>
import MyMenu from "./MyMenu.vue";
import Content from "./Content.vue";
export default {
  components: {
    MyMenu,
    Content,
  },
};
</script>

<style lang="less" scoped>
.layout {
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;

    width: 200px;
    // min-height: 500px;
    background-color: #4a73be;
  }
  .content {
    min-height: 500px;
    background-color: pink;
    margin-left: 200px;
  }
}
</style>
