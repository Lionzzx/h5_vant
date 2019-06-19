import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';

export interface INewsState {
  currentNewsStatistic: tvsnewsadmin.GetNewsListRsp_Statistics;
}

@Module({ dynamic: true, store, name: 'news' })
class News extends VuexModule implements INewsState {
  currentNewsStatistic = {};

  @Mutation
  SET_NEWS_STATISTIC(statistics: tvsnewsadmin.GetNewsListRsp_Statistics) {
    this.currentNewsStatistic = statistics;
  }
}

export const NewsModule = getModule(News);
