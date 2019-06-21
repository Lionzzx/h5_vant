// import Cookies from 'js-cookie';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'

import store from '@/store'
export interface AppStoreType {
  user: User
}

@Module({ dynamic: true, store, name: 'app' })
class User extends VuexModule {
  public roles: string = ''

  @Mutation
  SETUSER() {
    this.roles = 'caizexin'
  }

  @Action({ commit: 'SET' })
  setdata(inlineState: string) {
    return inlineState
  }
}

export default getModule(User)
