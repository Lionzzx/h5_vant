import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
import 'amfe-flexible'
import 'vant/lib/index.less'
import '@/styles/index.scss'
import { Toast } from 'vant'

Vue.prototype.$toast = Toast
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
