<template>
  <div class="page">
    <div class="page-header x-fl">{{ companyName }}</div>
    <div class="page-server">
      <div class="page-server-body">
        <div class="item">服务会计：{{ serviceInfo.realname }}</div>
        <div class="item">联系方式：{{ serviceInfo.mobilePhone }}</div>
        <div class="item">服务税期：{{ serviceInfo.begin_period + ' 至 ' + serviceInfo.end_period }}</div>

        <div class="tousu van-hairline--top x-fls">
          <div>服务不满意？<span @click="handleComplain" style="color:#e94f55;">我要投诉</span></div>
          <div class="tousu-tip">
            <a href="https://mp.weixin.qq.com/s/W25DatAlyJIchb7-O74Myw"><svg-icon icon-class="message" /> 做账资料注意事项</a>
          </div>
        </div>

        <a class="button" :href="serverTel">联系管家</a>
      </div>
    </div>

    <div class="page-steps">
      <van-steps active-color="#E94F55" direction="vertical" :active="0">
        <van-step v-for="(item, index) in workOrderList" :key="index">
          <div class="x-flsa">
            <span>{{ item.period }}</span
            ><span @click="handleAgency"><svg-icon icon-class="money" /> 税金</span
            ><span @click="handleBAOB(item.period)"><svg-icon icon-class="dashboard" /> 报表</span
            ><span @click="handleWAIQ"><svg-icon icon-class="tree" /> 外勤</span>
          </div>
        </van-step>
      </van-steps>
    </div>
    <!-- <svg-icon icon-class="qq" /> -->
    <van-dialog v-model="show" title="税金" show-cancel-button>
      <div style="margin:10px;">
        <div>增值税：{{ accountDetail.zhenzhishui }}</div>
        <div>企业所得税：{{ accountDetail.qiyesuodeshui }}</div>
        <div>个税：{{ accountDetail.gerensuodeshui }}</div>
        <div>附加税：{{ accountDetail.qitashuifei }}</div>
      </div>
    </van-dialog>

    <van-action-sheet v-model="actionSheet" :actions="actions" @select="onSelect" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import userStore from '@/store/modules/user';
import { Step, Steps, Dialog, ActionSheet } from 'vant';
@Component({
  components: {
    NavBar,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Dialog.Component.name]: Dialog.Component,
    [ActionSheet.name]: ActionSheet
  }
})
export default class Agency extends Vue {
  private companyName: string = userStore.currentCompanyName;
  private detail: any = {};
  private list: any = {};
  private serviceInfo: any = {};
  private accountDetail: any = {};
  private serverTel: string = '';
  private period: string = '';
  private page: number = 1;
  private pageSize: number = 10;
  private hasMore: boolean = true;
  private show: boolean = false;
  private actionSheet: boolean = false;
  private workOrderList: any = [];
  private actions = [
    { name: '利润表', type: 'income' },
    { name: '现金表', type: 'cash' },
    { name: '资产负债表', type: 'balance' }
  ];
  async getCompanyServiceInfo() {
    this.serviceInfo = await this.$storeApi.companyServiceInfo({ companyId: userStore.COMPANYID });
    let tel = this.serviceInfo.mobilePhone;
    if (tel) {
      this.serverTel = `tel:${tel}`;
    }
  }
  handleComplain() {
    this.$router.push({ name: 'complain', params: { id: this.serviceInfo.cycle_work_order_id } });
  }
  handleBAOB(period: string) {
    this.period = period;
    this.actionSheet = true;
  }
  handleWAIQ() {
    this.$router.push({ name: 'legwork' });
  }
  onSelect({ type = '' }) {
    this.$router.push({ name: 'table', params: { type, period: this.period } });
  }
  async getBaseInfo() {
    try {
      let { detail = [] } = await this.$storeApi.showCompanyProgressInfo({ companyId: userStore.COMPANYID }, true);
      this.workOrderList = detail
        .filter((v: any) => {
          return !!v.id;
        })
        .reverse();
    } catch (error) {
      this.$toast('该公司没有周期性服务');
    }
  }

  async handleAgency(period: string) {
    this.accountDetail = await this.$storeApi.accountReport({ companyId: userStore.COMPANYID, period }, true);
    this.show = true;
  }
  created() {
    this.getCompanyServiceInfo();
    this.getBaseInfo();
  }
}
</script>



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
      display: block;
      margin: 0 auto;
      width: 240px;
      height: 40px;
      background: rgba(233, 79, 85, 1);
      border-radius: 5px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
    }
  }
}
</style>

