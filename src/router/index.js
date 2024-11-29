import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/Layout'
import Login from '@/views/Login/Login.vue'
import Home from '@/views/Home/Home.vue'
import Goods from '@/views/Goods/Goods.vue'
import Order from '@/views/Order/Order.vue'
import Prams from '@/views/Params/Prams.vue'
import User from '@/views/User/User.vue'








Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/goods',
        component: Goods,
      },
      {
        path: '/params',
        name: 'Prams',
        component: Prams,

      },
      {
        path: '/order',
        component: Order,

      },
      {
        path: '/user',
        component: User,
      }


    ],
  }, {
    path: '/login',
    component: Login,
  }
]

const router = new VueRouter({
  routes
})

export default router
