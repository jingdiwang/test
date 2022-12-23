<template>
  <div>
    <TopCom :title="'我的'" :isShowRight="false"></TopCom>
    <!-- 用户信息卡 -->
    <div class="user_info_box">
      <div class="img_box">
        <img src="../../assets/title.png" alt="">
      </div>
      <div class="user_info">
        <p>昵称: {{ userInfo.nickName }}</p>
        <p>登录名: {{ userInfo.loginName }}</p>
        <p>个性签名: {{ userInfo.introduceSign }}</p>
      </div>
    </div>
    <!-- 用户详细页面 -->
    <ul class="infoList">
      <li v-for="(item, index) of aboutList" :key="index" @click="goView(item.path)">
        <span class="title">{{ item.name }}</span>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
import TopCom from '@/components/TopCom';
import { getUserInfo } from '../../api/user'
export default {
  data() {
    return {
      userInfo: {

      },
      aboutList: [
        {
          name: '我的订单',
          path: 'myorder'
        },
        {
          name: '账号管理'
        },
        {
          name: '地址管理'
        },
        {
          name: '关于我们'
        },
      ]
    }
  },
  components: {
    TopCom
  },
  methods: {
    goView(url) {
      this.$router.push(url)
    }
  },
  beforeMount() {
    getUserInfo().then((res) => {
      this.userInfo = res.data.data
    }).catch((err) => {
      console.log(err)
      Notify({ type: 'danger', message: '获取用户信息失败' });
    })
  }
}
</script>

<style lang="less">
.user_info_box {
  width: 90%;
  height: 150px;
  margin: 20px auto;
  background: linear-gradient(90deg, #1baeae, #51c7c7);
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;

  .img_box {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }
  }

  .user_info {
    margin-left: 10px;
    color: #fff;
    font-size: 16px;

    p {
      margin-top: 8px;
    }
  }
}

ul.infoList {
  width: 90%;
  margin: 0 auto;

  li {
    height: 60px;
    border-bottom: 1px solid rgba(204, 204, 204, 0.575);

    span.title {
      font-size: 16px;
      line-height: 60px;
    }

    .van-icon {
      float: right;
      font-size: 16px;
      line-height: 60px;
    }
  }
}
</style>