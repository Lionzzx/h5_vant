// import Cookies from 'js-cookie';
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'

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

  // 获取公司列表
  get COMPANYLIST() {
    return this.companyList ? this.companyList : getStorage('companyList')
  }

  // 获取当前公司Id
  get COMPANYID() {
    return this.companyId
      ? this.companyId
      : localStorage.getItem('companyId') || ''
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
  REMOVECOMPANYID() {
    this.companyId = ''
  }

  @Mutation
  SETCOMPANYID(val: any = '') {
    this.companyId = val
    setStorage('companyId', val)
  }

  @Action({})
  async getCompanyList() {
    try {
    } catch (error) {}
  }
}

export default getModule(User)
