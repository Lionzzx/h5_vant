<template>
  <div class="page">
    <div class="page-header x-fl">{{ serviceInfo.companyname }}</div>
    <div class="page-server">
      <div class="page-server-body">
        <div class="item">服务会计：{{ serviceInfo.realname }}</div>
        <div class="item">联系方式：{{ serviceInfo.mobilePhone }}</div>
        <div class="item">服务税期：{{ serviceInfo.begin_period + ' 至 ' + serviceInfo.end_period }}</div>

        <div class="tousu van-hairline--top x-fls">
          <div>服务不满意？<span @click="handleComplain" style="color:#e94f55;">我有话要说</span></div>
          <div class="tousu-tip">
            <a href="https://mp.weixin.qq.com/s/W25DatAlyJIchb7-O74Myw"><svg-icon icon-class="message" /> 做账资料注意事项</a>
          </div>
        </div>

        <a class="button" :href="serverTel">联系管家</a>
      </div>
    </div>

    <div class="page-type">
      <div @click="navToBuy" class="page-type-item bg-pink">
        <div class="page-type-item-title">A类</div>
        <div>使用：{{ detail.aCount - detail.remainderA }} 剩余：{{ detail.remainderA }}</div>
      </div>
      <div @click="navToBuy" class="page-type-item">
        <div class="page-type-item-title">B类</div>
        <div>使用：{{ detail.bCount - detail.remainderB }} 剩余：{{ detail.remainderB }}</div>
      </div>
    </div>

    <div v-if="hasMore" class="page-tip" @click="getLegworkList">获取更多外勤>></div>
    <div class="steps">
      <van-steps active-color="#000" direction="vertical">
        <van-step v-for="(item, index) in list" :key="index">
          <div @click="navToDetail(item.id)" class="steps-title">
            <span>{{ item.legwork_name }}</span
            ><span>{{ item.begin_time }}</span>
          </div>
          <div>{{ item.begin_address }}</div>
          <div slot="active-icon">{{ item.type }}类</div>
          <div slot="inactive-icon">{{ item.type }}类</div></van-step
        >
      </van-steps>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import userStore from '@/store/modules/user';

import { Step, Steps } from 'vant';
@Component({
  components: {
    NavBar,
    [Step.name]: Step,
    [Steps.name]: Steps
  }
})
export default class MyTools extends Vue {
  private detail: any = {};
  private list: any = [];
  private serviceInfo: any = {};
  private serverTel: string = '';
  private page: number = 1;
  private pageSize: number = 10;
  private hasMore: boolean = true;

  async getLegworkList() {
    if (!this.hasMore) {
      this.$toast('已经到底了');
      return;
    }
    try {
      let { detail = {}, list = {} } = await this.$storeApi.legworkList(
        {
          company_id: userStore.COMPANYID,
          page: this.page,
          pageSize: this.pageSize
        },
        true
      );
      this.list.push(...list.rows);
      this.page += 1;
      this.detail = detail;

      this.hasMore = this.page * this.pageSize < list.total;
    } catch (error) {}
  }

  async getCompanyServiceInfo() {
    this.serviceInfo = await this.$storeApi.companyServiceInfo({ companyId: userStore.COMPANYID });
    let tel = this.serviceInfo.mobilePhone;
    if (tel) {
      this.serverTel = `tel:${tel}`;
    }
  }
  navToDetail(id: string) {
    this.$router.push({ name: 'legworkDetail', params: { id } });
  }
  handleComplain() {
    this.$router.push({ name: 'complain', params: { id: this.serviceInfo.cycle_work_order_id } });
  }

  navToBuy() {
    this.$router.push({ name: 'renewal' });
  }
  created() {
    this.getLegworkList();
    this.list = [];
    this.getCompanyServiceInfo();
  }
}
</script>


<style>
.van-step__circle-container,
.van-step__title {
  color: #222 !important;
}
</style>

<style lang="scss">
.page {
  &-header {
    height: 40px;
    font-size: 14px;
    color: #fff;
    background: rgba(233, 79, 85, 1);
  }
  &-server {
    margin: 10px auto;
    width: 345px;
    background: rgba(247, 247, 247, 1);
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    &-body {
      font-size: 14px;
      padding: 10px;
      .item {
        margin-top: 6px;
      }

      .tousu {
        padding: 6px 0;
        &-tip {
          font-size: 12px;
        }
      }
    }

    .button {
      margin: 0 auto;
      width: 240px;
      display: block;
      height: 40px;
      background: rgba(233, 79, 85, 1);
      border-radius: 5px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
    }
  }
  &-type {
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;

    &-item {
      border: 1px solid #222;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 80px;
      width: 38vw;

      &-title {
        margin-bottom: 6px;
      }
    }
  }
  &-tip {
    text-align: center;
    font-size: 14px;
  }
  .steps {
    padding: 0px 20px;
    color: #222;
    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>

