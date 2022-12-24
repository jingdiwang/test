import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import { Notify } from 'vant';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      isShowNav: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView/LoginView.vue'),
    meta: {
      isShowNav: false
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/CategoryView/CategoryView.vue'),
    meta: {
      isShowNav: true,
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView/CartView.vue'),
    meta: {
      isShowNav: true,
      permission: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView/UserView.vue'),
    meta: {
      isShowNav: true,
      permission: true
    }
  },
  {
    path: '/myorder',
    name: 'myorder',
    component: () => import('../views/MyOrderView/MyOrderView.vue'),
    meta: {
      isShowNav: false,
      permission: true
    }
  }
]



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.permission || !!localStorage.getItem('xToken')) {
    next()
  } else {
    Notify({ type: 'warning', message: '登录失效,请登录' });
    router.push('login')
  }
})

export default router
