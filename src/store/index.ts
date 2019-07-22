import Vue from 'vue'
import Vuex from 'vuex'
import { AppStoreType } from './modules/app'
import { UserStoreType } from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store<AppStoreType | UserStoreType>({})
