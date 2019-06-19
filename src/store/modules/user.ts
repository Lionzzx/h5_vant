import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { AccountlogicApi } from '@/services/gatewayService';

import { _config } from '@/config/app';
import { AppModule } from './app';

const accountlogicApi = new AccountlogicApi();

export interface IUserState {
  identity: any;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  identity = {};

  @Mutation
  SET_USERDATA(data: any) {
    this.identity = data;
  }

  @Action({ commit: 'SET_USERDATA' })
  async Login({ phone, password }: { [key: string]: string }) {
    try {
      const data: accountlogic.LoginRes = await accountlogicApi.Login({
        auth_id: phone.trim(),
        auth_code: password,
        auth_type: 4
      });

      AppModule.SET_CONFIG({ account: data.account });

      return data;
    } catch (e) {
      console.warn(`login error: ${e}`);
    }
  }
}

export const UserModule = getModule(User);
