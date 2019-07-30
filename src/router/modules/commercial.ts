export default [
  //企业荣誉
  {
    path: '/commercial/honor',
    name: 'honor',
    component: () =>
      import(
        /* webpackChunkName: "honor" */ '@/views/commercial/honor/index.vue'
      )
  },
  {
    path: '/commercial/trademark',
    name: 'trademark',
    component: () =>
      import(
        /* webpackChunkName: "trademark" */ '@/views/commercial/trademark/index.vue'
      )
  },
  {
    path: '/commercial/projectApplication',
    name: 'projectApplication',
    component: () =>
      import(
        /* webpackChunkName: "projectApplication" */ '@/views/commercial/projectApplication/index.vue'
      )
  },
  {
    path: '/commercial/agencyAccount',
    name: 'agencyAccount',
    component: () =>
      import(
        /* webpackChunkName: "agencyAccount" */ '@/views/commercial/agencyAccount/index.vue'
      )
  }
]
