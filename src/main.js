import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import "./assets/reset.css"

import "./assets/flexible.js"

import "./assets/fonts/iconfont.css"

import vant from 'vant';
import 'vant/lib/index.css';
Vue.use(vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
