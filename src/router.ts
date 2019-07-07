import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index.vue'
import route from '@/views/route/index.vue'
Vue.use(Router)

export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: route
    },
    {
      path: '/commercial',
      name: 'commercialIndex',
      component: () =>
        import(/* webpackChunkName: "myserve" */ '@/views/commercial/index.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () =>
        import(/* webpackChunkName: "myserve" */ '@/views/account/index.vue')
    },
    {
      path: '/myserve',
      name: 'myserve',
      component: () =>
        import(
          /* webpackChunkName: "myserve" */ '@/views/commercial/myServe/index.vue'
        )
    },
    {
      path: '/mytools',
      name: 'mytools',
      component: () =>
        import(/* webpackChunkName: "myserve" */ '@/views/mytools/index.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "myserve" */ '@/views/user/index.vue')
    },
    {
      path: '/user/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "myserve" */ '@/views/user/about/index.vue')
    }
  ]
})
