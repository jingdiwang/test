<template>
  <div>
    <TopCom :title="'我的订单'" :isShowRight="false"></TopCom>
    <van-tabs @click="onClick">
      <van-tab v-for="(item, index) of titleList" :title="item.name" :name="index">
        <ul v-if="list.length">
          <li>{{ item.name }}</li>
        </ul>
        <van-empty v-if="!list.length" class="custom-image" image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
          :description="`${item.name}订单为空`" />
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import TopCom from '@/components/TopCom'
import { getUserOrder } from '../../api/user'
export default {
  data() {
    return {
      titleList: [
        {
          name: '全部',
          status: '',
        },
        {
          name: '待付款',
          status: 0,
        },
        {
          name: '待确认',
          status: 1,
        },
        {
          name: '待发货',
          status: 2,
        },
        {
          name: '已发货',
          status: 3,
        },
        {
          name: '交易完成',
          status: 4,
        },
      ],
      list: [],
      pageNumber: 1,
      status: '',
    }
  },
  components: {
    TopCom
  },
  beforeMount() {
    this.getOrder()
  },
  methods: {
    onClick(index) {
      console.log(this.titleList[index])
      this.status = this.titleList[index].status
      this.getOrder()
    },
    getOrder() {
      getUserOrder(this.pageNumber, this.status).then((res) => {
        this.list = res.data.data.list
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less">
.van-tab {
  span {
    font-size: 14px;
  }
}

.custom-image .van-empty__image {
  width: 90px;
  height: 90px;
}
</style>