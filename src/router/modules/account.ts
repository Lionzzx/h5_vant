export default [
  {
    path: 'account',
    name: 'account',
    component: () =>
      import(/* webpackChunkName: "account" */ '@/views/account/index.vue')
  },
  {
    path: 'account/taxDetail',
    name: 'taxDetail',
    component: () =>
      import(
        /* webpackChunkName: "taxDetail" */ '@/views/account/taxDetail/index.vue'
      )
  },
  {
    path: 'account/dataStorage',
    name: 'dataStorage',
    component: () =>
      import(
        /* webpackChunkName: "dataStorage" */ '@/views/account/dataStorage/index.vue'
      )
  },
  {
    path: 'account/invoice',
    name: 'invoice',
    component: () =>
      import(
        /* webpackChunkName: "invoice" */ '@/views/account/invoice/index.vue'
      )
  },
  {
    path: 'account/bill',
    name: 'bill',
    component: () =>
      import(/* webpackChunkName: "bill" */ '@/views/account/bill/index.vue')
  },
  {
    path: 'account/taxDetail/detail',
    name: 'detail',
    component: () =>
      import(
        /* webpackChunkName: "detail" */ '@/views/account/taxDetail/detail.vue'
      )
  },
  {
    path: 'account/table',
    name: 'table',
    component: () =>
      import(/* webpackChunkName: "table" */ '@/views/account/table/index.vue')
  },
  {
    path: 'account/legwork',
    name: 'legwork',
    component: () =>
      import(
        /* webpackChunkName: "legwork" */ '@/views/account/legwork/index.vue'
      )
  },
  {
    path: 'account/legwork/renewal',
    name: 'renewal',
    component: () =>
      import(
        /* webpackChunkName: "renewal" */ '@/views/account/legwork/renewal/index.vue'
      )
  }
]
