// import Cookies from 'js-cookie';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import { storeApi } from '@/api'

import store from '@/store'
import { setStorage, getStorage } from '@/utils/storage'
export interface UserStoreType {
  user: User
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule {
  public customerId: string = ''
  public companyId: string = ''
  public companyList: any
  public home: string = 'ACCOUNT'

  get COMPANYLIST() {
    return this.companyList ? this.companyList : getStorage('companyList')
  }

  get COMPANYID() {
    return this.companyId ? this.companyId : getStorage('companyId')
  }

  get currentCompanyName() {
    return this.COMPANYLIST.find((v: any) => {
      return v.value == this.COMPANYID
    }).text
  }

  @Mutation
  SETCOMPANYLIST(val: any) {
    this.companyList = val
    setStorage('companyList', val)
  }

  @Mutation
  SETCOMPANYID(val: any = '') {
    setStorage('companyId', val)
    this.companyId = val
  }

  @Mutation
  SETHOME(val: string = '') {
    this.home = val
  }

  @Action({})
  async getCompanyList() {
    try {
    } catch (error) {}
  }
}

export default getModule(User)
