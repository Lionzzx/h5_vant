export default [
  {
    path: '/myServe',
    name: 'myServe',
    component: () =>
      import(/* webpackChunkName: "agency" */ '@/views/myServe/index.vue')
  },
  {
    path: '/myServe/agency',
    name: 'agency',
    component: () =>
      import(
        /* webpackChunkName: "agency" */ '@/views/myServe/agency/index.vue'
      )
  },
  {
    path: '/myServe/business',
    name: 'business',
    component: () =>
      import(
        /* webpackChunkName: "business" */ '@/views/myServe/business/index.vue'
      )
  },
  {
    path: '/myServe/business/detail',
    name: 'businessDetail',
    component: () =>
      import(
        /* webpackChunkName: "businessDetail" */ '@/views/myServe/business/detail/index.vue'
      )
  },
  {
    path: '/myServe/project',
    name: 'project',
    component: () =>
      import(
        /* webpackChunkName: "project" */ '@/views/myServe/project/index.vue'
      )
  }
]
