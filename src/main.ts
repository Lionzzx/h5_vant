import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { storeApi } from '@/api'
import './icons' // icon

Vue.config.productionTip = false
import 'amfe-flexible'
import 'vant/lib/index.less'
import '@/styles/index.scss'
import { Toast } from 'vant'

Vue.prototype.$toast = Toast
Vue.prototype.$storeApi = storeApi
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
