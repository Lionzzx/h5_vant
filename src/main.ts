import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import '@/styles/index.scss'

Vue.config.productionTip = false
import 'amfe-flexible'
import 'vant/lib/index.less'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
