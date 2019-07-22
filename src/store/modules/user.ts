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
export interface UserStoreType {
  user: User
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule {
  public customerId: string = ''
  public companyId: string = ''
  public companyList: any
  public home: string = 'ACCOUNT'

  @Mutation
  SETUSERID(val: string = '') {
    this.customerId = val
  }
  @Mutation
  SETCOMPANYLIST(val: string = '') {
    this.customerId = val
  }

  @Mutation
  SETCOMPANYID(val: string = '') {
    this.companyId = val
  }

  @Mutation
  SETHOME(val: string = '') {
    this.home = val
  }

  @Action({ commit: 'SETCOMPANYLIST' })
  async getCompanyList() {
    try {
      const resp = await storeApi.listCustomerCompany()
      return resp
    } catch (error) {}
  }
}

export default getModule(User)
