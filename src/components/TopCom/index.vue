<template>
  <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
    <template #right v-if="isShowRight">
      <van-icon name="ellipsis" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
import { Toast, NavBar } from 'vant';
export default {
  components: {
    vanNavBar: NavBar
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isShowRight: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>

<style lang="less">
.van-nav-bar__left {
  left: 10px;
}

.van-nav-bar__title {
  font-size: 20px;
}
</style>