export default [
  {
    path: '/user/message',
    name: 'message',
    component: () =>
      import(/* webpackChunkName: "message" */ '@/views/user/message/index.vue')
  },
  {
    path: '/user/message/detail',
    name: 'messageDetail',
    component: () =>
      import(
        /* webpackChunkName: "message" */ '@/views/user/message/detail/index.vue'
      )
  },
  {
    path: '/user/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/user/about/index.vue')
  }
]
