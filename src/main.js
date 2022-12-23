import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import "./assets/reset.css"

import "./assets/flexible.js"

import "./assets/fonts/iconfont.css"

import { icon, Tab, Tabs, Empty, Swipe, SwipeItem, Image as VanImage, Grid, GridItem } from 'vant';
import 'vant/lib/index.css';
Vue.use(icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Empty);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
