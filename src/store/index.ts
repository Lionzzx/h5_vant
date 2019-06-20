import Vue from 'vue'
import Vuex from 'vuex'
import { AppModule, AppStoreType } from './modules/app'
Vue.use(Vuex)

export default new Vuex.Store<AppStoreType>({})
