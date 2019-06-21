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
        import(/* webpackChunkName: "index" */ './views/commercial/index.vue'),
      children: [
        {
          path: '/honor',
          name: 'honor',
          component: () =>
            import(
              /* webpackChunkName: "index" */ './views/commercial/honor/index.vue'
            )
        }
      ]
    },
    {
      path: '/account',
      name: 'accountIndex',
      component: () =>
        import(/* webpackChunkName: "index" */ './views/account/index.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "index" */ './views/user/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
