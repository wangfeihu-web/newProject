import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Cuowu from '@/views/404'

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
    },
    // 404路由
    { path: '*', name: 404, component: Cuowu }
  ]
})
router.beforeEach((to, from, next) => {
  // if (to.path === '/login') return next()
  // if (!store.getUser().token) return next('/login')
  // next()
  if (to.path !== '/login' && !store.getUser().token) return next('/login')
  next()
})

export default router
// 246810
