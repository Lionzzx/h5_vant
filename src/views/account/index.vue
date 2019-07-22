<template>
  <div class="page">
    <van-dropdown-menu class="page-header" active-color="#ff7d4e">
      <van-dropdown-item v-model="currentCompany" :options="companyOption" />
    </van-dropdown-menu>

    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop" style="background-image: url('/img/cheshi.png')"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle" style="background-image: url('/img/cheshi.png')"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" style="background-image: url('/img/cheshi.png')"></div>
      </div>

      <div class="page-count">
        <countTo class="count-number" :startVal="startVal" :endVal="endVal" :duration="1000"></countTo>
        <div class="count-title">本月应交税费（元）</div>
      </div>
      <div class="page-tip">
        财税报表 201808
      </div>

      <div class="page-message">
        消息
      </div>
    </div>

    <div class="page-number">
      <div class="page-number-item">
        <div class="title"><van-icon style="margin-right:8px" color="#fbc2a7" name="bar-chart-o"></van-icon>月收入（元）</div>
        <div class="number number-active">{{ accountReport.yueshouru }}</div>
      </div>
      <div class="page-number-item">
        <div class="title"><van-icon style="margin-right:8px" color="#fbc2a7" name="bar-chart-o"></van-icon>货币资金（元）</div>
        <div class="number">{{ accountReport.huobizijin }}</div>
      </div>
      <div class="page-number-item">
        <div class="title"><van-icon style="margin-right:8px" color="#fbc2a7" name="bar-chart-o"></van-icon>成本费用（元）</div>
        <div class="number">{{ accountReport.chengbenfeiyong }}</div>
      </div>
      <div class="page-number-item">
        <div class="title"><van-icon style="margin-right:8px" color="#fbc2a7" name="bar-chart-o"></van-icon>税金（元）</div>
        <div class="number">{{ accountReport.zhenzhishui }}</div>
      </div>
    </div>
    <div class="page-center van-hairline--top">
      <div @click="onNavTo(item.name)" v-for="(item, index) in iconConfig" :key="index" class="page-center-item">
        <img class="img-icon" :src="item.icon" />
        <div class="img-title">{{ item.title }}</div>
      </div>
    </div>
    <div class="page-line"></div>
    <van-swipe class="page-ad" :autoplay="3000" indicator-color="black">
      <van-swipe-item
        ><img
          src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E6%98%93%E6%9F%A5%E8%B4%A6%E4%B8%AD%E9%83%A8%E5%B9%BB%E7%81%AF.jpg%2Forigine%2F95af7ea0-30f6-432c-8ecf-0d8fe11b9a50"
          alt=""
      /></van-swipe-item>

      <van-swipe-item
        ><img
          src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E6%98%93%E6%9F%A5%E8%B4%A6%E4%B8%AD%E9%83%A8%E5%B9%BB%E7%81%AF.jpg%2Forigine%2F95af7ea0-30f6-432c-8ecf-0d8fe11b9a50"
          alt=""
      /></van-swipe-item>
    </van-swipe>

    <my-progress :company-id="currentCompany"></my-progress>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CountTo from '@/components/CountTo/index.vue';
import MyProgress from '@/components/Process/index.vue';
import { Swipe, SwipeItem, ActionSheet, DropdownMenu, DropdownItem, Icon } from 'vant';
import { storeApi } from '@/api';
import { AppModule } from '@/store/modules/app';
import UserStore from '@/store/modules/user';

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Icon.name]: Icon,
    [ActionSheet.name]: ActionSheet,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    CountTo,
    MyProgress
  }
})
export default class Home extends Vue {
  private startVal = 0;
  private endVal = 2017435;
  private accountReport = '';
  private show: boolean = false;
  private active: number = 0;
  private currentCompany: number = 0;
  private companyOption = [
    { text: '新年有限公司', value: 0 },
    { text: '阿里巴巴有限公司', value: 1 },
    { text: '中国有限公司', value: 2 }
  ];
  private iconConfig = [
    {
      title: '纳税详情',
      icon: '/icon/icon_nasui.png'
    },
    {
      title: '可开票额',
      icon: '/icon/icon_money.png'
    },
    {
      title: '外勤详情',
      icon: '/icon/icon_waiqing.png'
    },
    {
      title: '资料存管',
      icon: '/icon/icon_zhiliao.png'
    },
    {
      title: '企业利润',
      icon: '/icon/icon_zhuanli.png',
      name: 'income'
    },
    {
      title: '资产负债',
      icon: '/icon/icon_yichang.png',
      name: 'balance'
    },
    {
      title: '现金流量',
      icon: '/icon/icon_cash.png',
      name: 'cash'
    },
    {
      title: '票据情况',
      icon: '/icon/icon_piaoju.png'
    }
  ];

  navToServe() {
    this.$router.push({ name: 'myserve' });
  }

  onNavTo(value: string) {
    if (value == 'balance' || value == 'income' || value == 'cash') {
      this.$router.push({ name: 'table', params: { type: value } });
    } else {
      this.$router.push({ name: value });
    }
  }
  handleCompanySelect() {
    this.show = true;
  }
  async created() {
    const resp = await storeApi.accountReport({ companyId: UserStore.companyId, period: '201906' });
    this.accountReport = resp;
  }
}
</script>
<style>
</style>
<style>
.van-dropdown-menu {
  height: 40px;
}
.van-dropdown-menu__title::after {
  top: 8px;
}
.van-dropdown-menu__title {
  color: #ff7d4e;
}
</style>

<style lang="scss" scoped>
.page {
  font-size: 12px;
  &-header {
    z-index: 100;
  }
  &-count {
    z-index: 20;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .count {
      &-number {
        margin: 30px 0;
        color: #fff;
        font-size: 40px;
      }
      &-title {
        color: #fff;
        font-size: 14px;
      }
    }
  }
  &-tip {
    z-index: 20;
    position: absolute;
    top: 8px;
    right: 8px;
    color: #fff;
    font-size: 13px;
  }
  &-message {
    z-index: 200;
    position: absolute;
    top: -28px;
    right: 10px;
    color: $theme-color;
    font-size: 13px;
  }

  &-swipe {
    height: 150px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  &-number {
    display: flex;
    flex-wrap: wrap;
    &-item {
      box-sizing: border-box;
      width: 50vw;
      padding: 16px;
      .title {
        font-size: 14px;
        color: #8492a6;
      }
      .number {
        margin-top: 6px;
        font-size: 20px;
        color: #717484;
        &-active {
          color: #f27c41;
        }
      }
    }
  }
  &-center {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0;

    &-item {
      margin: 10px 0 0 0;
      width: 25vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .img-icon {
      width: 40px;
      height: 40px;
    }
    .img-title {
      margin: 5px;
    }
  }
  &-ad {
    height: 80px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  &-line {
    height: 10px;
    background: rgb(228, 228, 228);
  }
  &-process {
    padding-top: 8px;
    background: rgb(228, 228, 228);
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      padding: 8px 0;
      &-left {
        color: #f27c41;
        .icon {
          background: #f27c41;
          color: #fff;
          padding: 4px 10px;
          border-radius: 0 10px 10px 0;
          margin-right: 8px;
        }
      }
      &-right {
        margin-right: 10px;
      }
    }

    &-item {
      background: #fff;
      padding: 0 10px;
      border-top: 1px solid rgba(239, 239, 239, 0.8);
      &-title {
        font-size: 14px;
        padding-top: 16px;
      }
      &-serve {
        margin: 10px 0 20px;
        font-size: 10px;
        color: #aaa;
      }
      &-desc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
      }
    }
  }
}
</style>

