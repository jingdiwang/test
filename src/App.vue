<template>
  <div id="app">
    <router-view />
    <tabbar v-if="isShowNav"></tabbar>
  </div>
</template>

<script>
import tabbar from './components/TabbarCom'
export default {
  data() {
    return {
      isShowNav: true,
    }
  },
  components: {
    tabbar
  },
  watch: {
    $route: {
      handler: function (url) {
        this.isShowNav = url.meta.isShowNav
      },
      immediate: true,
    }
  }
}
</script>

<style lang="less">

</style>
