import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import '@/styles/index.scss'
import { Row, Col, Icon, Tabbar, TabbarItem } from 'vant'
Vue.use(Row)
  .use(Col)
  .use(Icon)
  .use(TabbarItem)
  .use(Tabbar)
Vue.config.productionTip = false
import 'amfe-flexible'
import 'vant/lib/index.less'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
