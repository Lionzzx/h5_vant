import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index.vue'
import index from '@/views/index/index.vue'
import layout from '@/layout/index.vue'
import account from './modules/account'
import commercial from './modules/commercial'
import myServe from './modules/myServe'
import user from './modules/user'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      component: layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index
        },
        {
          path: 'mytools',
          name: 'mytools',
          component: () =>
            import(
              /* webpackChunkName: "myserve" */ '@/views/mytools/index.vue'
            )
        },
        {
          path: 'user',
          name: 'user',
          component: () =>
            import(/* webpackChunkName: "myserve" */ '@/views/user/index.vue')
        }
      ]
    },
    ...account,
    ...commercial,
    ...myServe,
    ...user
  ]
})
