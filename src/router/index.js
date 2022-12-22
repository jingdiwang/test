import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

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
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView/CartView.vue'),
    meta: {
      isShowNav: true
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/CategoryView/CategoryView.vue'),
    meta: {
      isShowNav: true
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserView/UserView.vue'),
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
  }
]

const router = new VueRouter({
  routes
})

export default router
