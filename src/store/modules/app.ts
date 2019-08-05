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
  app: App
}
// namespaced:boolean 启/停用 分模块
// stateFactory:boolean 状态工厂[我也不知道干什么的，有知道的可以留言]
// dynamic:boolean 在store创建之后，再添加到store中。 开启dynamic之后必须提供下面的属性
// name:string 指定模块名称
// store:Vuex.Store实体 提供初始的store

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule {
  public loading = false
  @Mutation
  OPENLOADING() {
    this.loading = true
  }

  @Mutation
  CLOSELOADING() {
    this.loading = false
  }

}

export default getModule(App)
