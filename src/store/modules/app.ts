import Cookies from 'js-cookie';
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { AccountlogicApi } from '@/services/gatewayService';
import { config } from '@/config/app';
import { getStorage, setStorage } from '@/utils/storage';

const accountlogicApi = new AccountlogicApi();

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface IAppState {
  app: account.App;
  device: DeviceType;
  config: any;
  sidebar: {
    opened: boolean;
    withoutAnimation: boolean;
  };
  body: {
    clientHeight: number
  };
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements IAppState {
  app = {};
  config = config();
  sidebar = {
    opened: true, // Cookies.get('sidebarStatus') !== 'closed',
    withoutAnimation: false,
  };
  device = DeviceType.Desktop;
  body = {
    clientHeight:
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      790
  };

  get clientHeight() {
    return this.body.clientHeight;
  }

  @Mutation
  TOGGLE_SIDEBAR(withoutAnimation: boolean) {
    if (this.sidebar.opened) {
      Cookies.set('sidebarStatus', 'closed');
    } else {
      Cookies.set('sidebarStatus', 'opened');
    }
    this.sidebar.opened = !this.sidebar.opened;
    this.sidebar.withoutAnimation = withoutAnimation;
  }
  @Mutation
  CLOSE_SIDEBAR(withoutAnimation: boolean) {
    Cookies.set('sidebarStatus', 'closed');
    this.sidebar.opened = false;
    this.sidebar.withoutAnimation = withoutAnimation;
  }
  @Mutation
  TOGGLE_DEVICE(device: DeviceType) {
    this.device = device;
  }
  @Mutation
  SET_APP(app: account.App) {
    this.app = app;
  }
  @Mutation
  SET_CONFIG(data?: any) {
    if (data) {
      this.config = Object.assign({}, this.config, data);
      setStorage(`${config().prefix}_config`, JSON.stringify(this.config));
    } else {
      if (!getStorage(`${config().prefix}_config`)) {
        setStorage(`${config().prefix}_config`, JSON.stringify(this.config));
      }
    }
  }

  @Action({ commit: 'SET_APP' })
  async GetApp() {
    const { app } = await accountlogicApi.GetApp({
      app_id: config().app_id,
      disable_cache: true
    });

    return app;
  }
  @Action({ commit: 'TOGGLE_SIDEBAR' })
  ToggleSideBar(withoutAnimation: boolean) {
    return withoutAnimation;
  }
  @Action({ commit: 'CLOSE_SIDEBAR' })
  CloseSideBar(withoutAnimation: boolean) {
    return withoutAnimation;
  }
  @Action({ commit: 'TOGGLE_DEVICE' })
  ToggleDevice(device: DeviceType) {
    return device;
  }
}

export const AppModule = getModule(App);
