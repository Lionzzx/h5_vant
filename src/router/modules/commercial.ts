export default [
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
