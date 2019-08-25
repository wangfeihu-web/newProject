import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', name: 'login', component: Login },
    {
      path: '/',
      component: Home,
      children: [
        // 路由规则：自路由有名称  父路由不需要设置name属性
        { path: '/', name: 'welcome', component: Welcome }
      ]
    }
  ]
})

export default router
