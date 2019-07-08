import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login/index.vue'
import layout from '@/views/layout/index.vue'
Vue.use(Router)

export default new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home/commercial'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: layout,
      children: [
        {
          path: 'commercial',
          name: 'commercial',
          component: () =>
            import(
              /* webpackChunkName: "myserve" */ '@/views/commercial/index.vue'
            )
        },
        {
          path: 'account',
          name: 'account',
          component: () =>
            import(
              /* webpackChunkName: "myserve" */ '@/views/account/index.vue'
            )
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

    {
      path: '/myserve',
      name: 'myserve',
      component: () =>
        import(/* webpackChunkName: "myserve" */ '@/views/myServe/index.vue')
    },
    {
      path: '/agency',
      name: 'agency',
      component: () =>
        import(
          /* webpackChunkName: "agency" */ '@/views/myServe/agency/index.vue'
        )
    },
    {
      path: '/business',
      name: 'business',
      component: () =>
        import(
          /* webpackChunkName: "business" */ '@/views/myServe/business/index.vue'
        )
    },
    {
      path: '/project',
      name: 'project',
      component: () =>
        import(
          /* webpackChunkName: "project" */ '@/views/myServe/project/index.vue'
        )
    },
    {
      path: '/user/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "myserve" */ '@/views/user/about/index.vue')
    },

    //企划商事

    //企业荣誉
    {
      path: '/honor',
      name: 'honor',
      component: () =>
        import(
          /* webpackChunkName: "myserve" */ '@/views/commercial/honor/index.vue'
        )
    },
    {
      path: '/trademark',
      name: 'trademark',
      component: () =>
        import(
          /* webpackChunkName: "myserve" */ '@/views/commercial/trademark/index.vue'
        )
    },
    {
      path: '/projectApplication',
      name: 'projectApplication',
      component: () =>
        import(
          /* webpackChunkName: "myserve" */ '@/views/commercial/projectApplication/index.vue'
        )
    },
    {
      path: '/agencyAccount',
      name: 'agencyAccount',
      component: () =>
        import(
          /* webpackChunkName: "myserve" */ '@/views/commercial/agencyAccount/index.vue'
        )
    }
  ]
})
