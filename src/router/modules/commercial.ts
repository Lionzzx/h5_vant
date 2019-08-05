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
    path: '/commercial/trademark/detail',
    name: 'trademarkDetail',
    component: () =>
      import(
        /* webpackChunkName: "trademarkDetail" */ '@/views/commercial/trademark/detail/index.vue'
      )
  },
  {
    path: '/commercial/projectScheme',
    name: 'projectScheme',
    component: () =>
      import(
        /* webpackChunkName: "projectScheme" */ '@/views/commercial/projectScheme/index.vue'
      )
  },
  {
    path: '/commercial/patent',
    name: 'patent',
    component: () =>
      import(
        /* webpackChunkName: "patent" */ '@/views/commercial/patent/index.vue'
      )
  },
  {
    path: '/commercial/abnormal',
    name: 'abnormal',
    component: () =>
      import(
        /* webpackChunkName: "abnormal" */ '@/views/commercial/abnormal/index.vue'
      )
  },
  {
    path: '/commercial/projectScheme/report',
    name: 'projectSchemeReport',
    component: () =>
      import(
        /* webpackChunkName: "projectSchemeReport" */ '@/views/commercial/projectScheme/report/index.vue'
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
    path: '/commercial/projectApplication/detail',
    name: 'projectApplicationindex0',
    component: () =>
      import(
        /* webpackChunkName: "projectApplicationindex0" */ '@/views/commercial/projectApplication/detail/index0.vue'
      )
  },
  {
    path: '/commercial/projectApplication/detail',
    name: 'projectApplicationindex1',
    component: () =>
      import(
        /* webpackChunkName: "projectApplicationindex1" */ '@/views/commercial/projectApplication/detail/index1.vue'
      )
  },
  {
    path: '/commercial/projectApplication/detail',
    name: 'projectApplicationindex2',
    component: () =>
      import(
        /* webpackChunkName: "projectApplication" */ '@/views/commercial/projectApplication/detail/index2.vue'
      )
  },
  {
    path: '/commercial/projectApplication/detail',
    name: 'projectApplicationindex3',
    component: () =>
      import(
        /* webpackChunkName: "projectApplicationindex3" */ '@/views/commercial/projectApplication/detail/index3.vue'
      )
  },
  {
    path: '/commercial/projectApplication/detail',
    name: 'projectApplicationindex4',
    component: () =>
      import(
        /* webpackChunkName: "projectApplicationindex4" */ '@/views/commercial/projectApplication/detail/index4.vue'
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
