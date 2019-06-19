import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css'
Vue.config.productionTip = false
import 'amfe-flexible'
import 'vant/lib/index.less'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log('ahah')
