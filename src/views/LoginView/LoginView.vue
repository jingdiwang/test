<template>
  <div class="login_page">
    <TopCom :title="isTitle ? '登录' : '注册'" :isShowRight="false" />
    <img src="../../assets/logo.png" width="140" class="logo" alt="">
    <div class="login-from">
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="手机号"
          :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]" />
        <Verify ref="veri" :type="2" @error="alertFn(2)" @success="alertFn(1)" :showButton="false"></Verify>
        <p class="link-register" @click="isTitle = !isTitle">{{ isTitle ? '立即注册' : '已有账号，立即登录' }}</p>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">{{ isTitle ? '登录' : '注册' }}</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import TopCom from '@/components/TopCom';
import Verify from 'vue2-verify'

import { login, register } from '../../api/user'
import { Form, Field, Button, Notify } from 'vant';
export default {
  data() {
    return {
      username: '',
      password: '',
      isTitle: true
    };
  },
  methods: {
    onSubmit(values) {
      if (this.isTitle) {
        login(this.username, this.password).then((res) => {
          localStorage.setItem('xToken', res.data.data)
          Notify({
            message: '登录成功',
            color: '#fff',
            background: '#1baeae',
          });
          this.$router.push({
            name: 'user'
          })
        }).catch((err) => {
          console.log(err)
          Notify({ type: 'danger', message: '登录失败' });
        })
      } else {
        register(this.username, this.password).then((res) => {
          Notify({
            message: '注册成功',
            color: '#fff',
            background: '#1baeae',
          });
        }).catch((err) => {
          console.log(err)
          Notify({ type: 'danger', message: '注册失败' });
        })
      }
    },
  },
  components: {
    TopCom,
    Verify,
    vanForm: Form,
    vanField: Field,
    vanButton: Button
  }
}
</script>
<style lang="less">
.login_page {
  text-align: center;

  .logo {
    margin: 30px;
  }

  .login-from {
    width: 80%;
    margin: 0 auto;

    .cerify-code-panel {
      display: flex;
      margin-top: 10px;

      .verify-code-area {
        display: flex;
        line-height: 40px;
        width: 20%;

        .verify-input-area {
          input {
            width: 70%;
            height: 30px;
            padding-left: 5px;
          }
        }

        .verify-change-area {
          font-size: 16px;
          line-height: 40px;
          margin-left: 0px;
        }
      }

      .verify-code {
        width: 50% !important;
        font-size: 20px !important;
        height: 40px !important;
        line-height: 40px !important;
        box-sizing: border-box;
      }
    }

    .link-register {
      margin: 10px;
      text-align: left;
      color: #1989fa;
      font-size: 14px;
    }
  }

  .van-button--round {
    background: rgb(27, 174, 174) !important;
    border-color: rgb(27, 174, 174) !important;
  }

}
</style>