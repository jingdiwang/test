<template>
  <van-tabbar route active-color="#1baeae">
    <van-tabbar-item replace to="/home">
      <span>首页</span>
      <template #icon>
        <span class="icon iconfont icon-shouye"></span>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/category" icon="search">
      <span>分类</span>
      <template #icon>
        <span class="icon iconfont icon-grouping"></span>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/cart" icon="home-o">
      <span>购物车</span>
      <template #icon>
        <span class="icon iconfont icon-gouwuche"></span>
      </template>
    </van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="search">
      <span>我的</span>
      <template #icon>
        <span class="icon iconfont icon-31wode"></span>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.van-tabbar-item {
  font-size: 14px;

  .icon {
    font-size: 22px;
  }
}
</style>