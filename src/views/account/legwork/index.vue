<template>
  <div class="page">
    <nav-bar :title="serviceInfo.companyname" has-left></nav-bar>
    <div class="page-server">
      <div class="page-server-body">
        <div class="item">服务会计：{{ serviceInfo.realname }}</div>
        <div class="item">联系方式：{{ serviceInfo.mobilePhone }}</div>
        <div class="item">服务税期：{{ serviceInfo.begin_period + ' 至 ' + serviceInfo.end_period }}</div>

        <div class="tousu van-hairline--top x-fls">
          <div>服务不满意？<span @click="handleComplain" style="color:#e94f55;">我有话要说</span></div>
          <div class="tousu-tip">
            <a style="color:#fd6756" href="https://mp.weixin.qq.com/s/W25DatAlyJIchb7-O74Myw"
              ><svg-icon icon-class="message" /> 做账资料注意事项</a
            >
          </div>
        </div>

        <a class="button" :href="serverTel">联系管家</a>
      </div>
    </div>

    <div class="page-type">
      <div @click="navToBuy" class="page-type-item bg-pink">
        <div class="page-type-item-title">A类</div>
        <div>使用：{{ detail.shiyongA }} 剩余：{{ detail.remainderA }}</div>
      </div>
      <div @click="navToBuy" class="page-type-item">
        <div class="page-type-item-title">B类</div>
        <div>使用：{{ detail.shiyongB }} 剩余：{{ detail.remainderB }}</div>
      </div>
    </div>

    <!-- <div v-if="hasMore" class="page-tip" @click="getLegworkList">获取更多外勤>></div> -->
    <van-collapse v-model="activeNames">
      <van-collapse-item title="服务期间" name="1">
        <div class="steps">
          <van-steps active-color="#000" direction="vertical">
            <van-step v-for="(item, index) in periodList" :key="index">
              <div @click="navToDetail(item.id)" class="steps-title">
                <span>{{ item.legwork_name }}</span
                ><span>{{ item.begin_time }}</span>
              </div>
              <div>{{ item.begin_address }}</div>
              <div slot="active-icon">{{ item.type }}类</div>
              <div slot="inactive-icon">{{ item.type }}类</div>
            </van-step>
          </van-steps>
          <div style="text-align:center" v-if="!periodList.length">
            暂无信息
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="历史" name="2">
        <div class="steps">
          <van-steps active-color="#000" direction="vertical">
            <van-step v-for="(item, index) in noPeriodlist" :key="index">
              <div @click="navToDetail(item.id)" class="steps-title">
                <span>{{ item.legwork_name }}</span
                ><span>{{ item.begin_time }}</span>
              </div>
              <div>{{ item.begin_address }}</div>
              <div slot="active-icon">{{ item.type }}类</div>
              <div slot="inactive-icon">{{ item.type }}类</div>
            </van-step>
          </van-steps>
          <div style="text-align:center" v-if="!noPeriodlist.length">
            暂无信息
          </div>
        </div>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import userStore from '@/store/modules/user';

import { Step, Steps, Collapse, CollapseItem } from 'vant';
@Component({
  components: {
    NavBar,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  }
})
export default class MyTools extends Vue {
  private detail: any = {};
  private activeNames: any = ['1'];
  private periodList: any = [];
  private noPeriodlist: any = [];
  private serviceInfo: any = {};
  private serverTel: string = '';

  async getLegworkList() {
    try {
      let { detail = {}, list = [] } = await this.$storeApi.legworkList(
        {
          company_id: userStore.COMPANYID
        },
        true
      );

      this.noPeriodlist = list.filter((v: any) => {
        return v.if_period == 'N';
      });
      this.periodList = list.filter((v: any) => {
        return v.if_period == 'Y';
      });
      this.detail = detail;
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
    background: $linear-color;
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
      background: $linear-color;
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
      border: 1px solid $theme-color;
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

