<template>
  <div class="page">
    <div class="page-header x-fl">广东科技有限公司</div>
    <div class="page-server">
      <div class="page-server-body">
        <div class="item">服务会计：{{ serviceInfo.realname }}</div>
        <div class="item">联系方式：{{ serviceInfo.mobilePhone }}</div>
        <div class="item">服务税期：{{ serviceInfo.begin_period + '至' + serviceInfo.end_period }}</div>

        <div class="tousu van-hairline--top x-fls">
          <div>服务不满意？<span style="color:#e94f55;">我有话要说</span></div>
          <div @click="hanleNotice" class="tousu-tip">
            <a href="https://mp.weixin.qq.com/s/W25DatAlyJIchb7-O74Myw">做账资料注意事项</a>
          </div>
        </div>

        <a class="button" :href="serverTel">联系管家</a>
      </div>
    </div>

    <div class="page-type">
      <div class="page-type-item bg-pink">
        <div class="page-type-item-title">A类</div>
        <div>使用：{{ detail.aCount - detail.remainderA }} 剩余：{{ detail.remainderA }}</div>
      </div>
      <div class="page-type-item">
        <div class="page-type-item-title">B类</div>
        <div>使用：{{ detail.bCount - detail.remainderB }} 剩余：{{ detail.remainderB }}</div>
      </div>
    </div>

    <van-steps active-color="#000" direction="vertical" :active="active">
      <van-step
        >买家下单
        <div slot="active-icon">A类</div>
        <div slot="inactive-icon">测试</div></van-step
      >
      <van-step
        ><div slot="inactive-icon">A类</div>
        商家接单</van-step
      >
      <van-step>
        <div slot="inactive-icon">测试</div>
        <div>【城市】物流状态1</div>
        <div>2016-07-12 12:40</div>
      </van-step>
      <van-step>交易完成</van-step>
    </van-steps>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { AppModule } from '@/store/modules/app';
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
  private list: any = {};
  private serviceInfo: any = {};
  private serverTel: string = '';
  async getLegworkList() {
    let { detail = {}, list = {} } = await this.$storeApi.legworkList({ company_id: '194180', page: '1', pageSize: '10' });
    this.detail = detail;
    this.list = list;
  }

  async getCompanyServiceInfo() {
    this.serviceInfo = await this.$storeApi.companyServiceInfo({ companyId: '194180' });
    let tel = this.serviceInfo.mobilePhone;
    if (tel) {
      this.serverTel = `tel:${tel}`;
    }
  }
  created() {
    this.getLegworkList();
    this.getCompanyServiceInfo();
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
}
</style>

