<template>
  <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
    <template #right v-if="isShowRight">
      <van-icon name="ellipsis" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
import { Toast } from 'vant';
export default {
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
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
}
</script>