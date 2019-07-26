export default [
  {
    path: '/user/message',
    name: 'message',
    component: () =>
      import(/* webpackChunkName: "myserve" */ '@/views/user/message/index.vue')
  },
  {
    path: '/user/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "myserve" */ '@/views/user/about/index.vue')
  }
]
