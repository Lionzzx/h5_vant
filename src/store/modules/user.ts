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
  SETUSERID(val: string = '') {
    this.customerId = val
  }
  @Mutation
  SETCOMPANYLIST(val: any) {
    this.companyList = val
    setStorage('companyList', val)
  }

  @Mutation
  SETCOMPANYID(val: string = '') {
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
      let resp = await storeApi.listCustomerCompany()
      resp = resp.map((v: any) => ({
        text: v.companyname,
        value: v.id,
        serviceDeparts: v.service_departs
      }))
      this.SETCOMPANYLIST(resp)
      return resp
    } catch (error) {}
  }
}

export default getModule(User)
