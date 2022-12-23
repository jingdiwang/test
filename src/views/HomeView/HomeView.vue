<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) of carousels" :key='index'>
        <van-image width="100%" height="100%" :src="item.carouselUrl" />
      </van-swipe-item>
    </van-swipe>
    <!-- 热门 -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="item in categoryList" :key="item.title" :text="item.title">
        <template #icon>
          <div class="icon iconfont icon-shouye" :class="item.icon"></div>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 新品上线 -->
    <p class="title">新品上线</p>
    <van-grid :column-num="2">
      <van-grid-item v-for="item in newGoodses" :key="item.title" :text="item.title">
        <template #default>
          <img :src="item.goodsCoverImg" width="130px" alt="">
          <p class="text">{{ item.goodsName }}</p>
          <p class="text">￥ {{ item.sellingPrice.toFixed(2) }}</p>
          <div></div>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 热销商品 -->
    <p class="title">热销商品</p>
    <van-grid :column-num="2">
      <van-grid-item v-for="item in hotGoodses" :key="item.title" :text="item.title">
        <template #default>
          <img :src="item.goodsCoverImg" width="130px" alt="" class="goodsImg">
          <p class="text">{{ item.goodsName }}</p>
          <p class="text">￥ {{ item.sellingPrice.toFixed(2) }}</p>
          <div></div>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 最新推荐 -->
    <p class="title">最新推荐</p>
    <van-grid :column-num="2">
      <van-grid-item v-for="item in recommendGoodses" :key="item.title" :text="item.title">
        <template #default>
          <img :src="item.goodsCoverImg" width="130px" alt="" class="goodsImg">
          <p class="text">{{ item.goodsName }}</p>
          <p class="text">￥ {{ item.sellingPrice.toFixed(2) }}</p>
          <div></div>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { indexInfo } from '@/api/index'
export default {
  data() {
    return {
      carousels: [],
      hotGoodses: [],
      newGoodses: [],
      recommendGoodses: [],
      categoryList: [
        {
          title: '码路超市',
          icon: 'icon-gouwucheman'
        },
        {
          title: '码路服饰',
          icon: 'icon-fushi'
        },
        {
          title: '全球购',
          icon: 'icon-quanqiugou'
        },
        {
          title: '码路生鲜',
          icon: 'icon-shengxian-haixian'
        },
        {
          title: '码路到家',
          icon: 'icon-zhisongdaojia'
        },
        {
          title: '充值缴费',
          icon: 'icon-jiaofei'
        },
        {
          title: '9.9元拼',
          icon: 'icon-pintuangou'
        },
        {
          title: '领券',
          icon: 'icon-youhuiquanwenzi'
        },
        {
          title: '省钱',
          icon: 'icon-shengqian'
        },
        {
          title: '全部',
          icon: 'icon-icon-quanbu'
        },
      ]
    }
  },
  beforeMount() {
    indexInfo().then((res) => {
      this.carousels = res.data.data.carousels
      this.hotGoodses = res.data.data.hotGoodses
      this.newGoodses = res.data.data.newGoodses
      this.recommendGoodses = res.data.data.recommendGoodses
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.home {
  background-color: #f9f9f9;
  min-height: 100vh;
  margin-bottom: 50px;

  .van-swipe-item {
    height: auto;
  }

  .title {
    color: #1baeae;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
  }

  .text {
    margin-top: 5px;
    font-size: 14px;
    width: 90%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    &:first-of-type {
      height: 40px;
    }

    &:last-of-type {
      color: #1baeae;
    }
  }
}

.icon {
  color: #1baeae;
  font-size: 1.06667rem;
  text-align: center;
  margin-bottom: .18667rem;
}
</style>