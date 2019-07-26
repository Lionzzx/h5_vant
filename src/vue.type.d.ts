import VueRouter from 'vue-router'
import { Route } from 'vue-router'

// 扩充
declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
    $route: Route
    $storeApi: IStoreApi
  }
}
