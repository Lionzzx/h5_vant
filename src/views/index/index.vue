<template>
  <div v-if="!loading" class="page">
    <van-dropdown-menu class="page-header" active-color="#fd6756">
      <van-dropdown-item @change="onCompanyIdChange" v-model="currentCompany" :options="companyOption" />
    </van-dropdown-menu>
    <div @click.stop="navToMessage" class="page-message"><van-icon name="other-pay"></van-icon> 消息</div>
    <!-- 会计部页面 -->
    <template v-if="home == 'ACCOUNT'">
      <div @click="navToAccount" class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <!-- <div class="wave waveTop" style="background-image: url('/img/wave.png')"></div> -->
        </div>
        <div class="waveWrapperInner bgMiddle">
          <div class="wave waveMiddle" style="background-image: url('/img/wave.png')"></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div class="wave waveBottom" style="background-image: url('/img/wave.png')"></div>
        </div>

        <div class="page-count">
          <countTo class="count-number" :startVal="startVal" :endVal="accountReport.yuelirun || 0" :duration="1000"></countTo>
          <div class="count-title">月净利润（元）</div>
        </div>
        <div class="page-tip">财税报表 {{ nowDate }}</div>

        <!-- <div @click.stop="navToMessage" class="page-message">
          消息
        </div> -->
      </div>
      <div class="page-number">
        <!-- <div class="page-number-item">
          <div class="title"><van-icon style="margin-right:8px" color="#fbc2a7" name="bar-chart-o"></van-icon>银行存款（元）</div>
          <div class="number number-active">{{ accountReport.yueshouru }}</div>
        </div>
        <div class="page-number-item">
          <div class="title"><van-icon style="margin-right:8px" color="#fbc2a7" name="bar-chart-o"></van-icon>库存现金（元）</div>
          <div class="number">{{ accountReport.kucunxianjin  }}</div>
        </div> -->
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
        <div @click="navToTable(item.name)" v-for="(item, index) in AccountConfig" :key="index" class="page-center-item">
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
    </template>
    <!-- 企划商事部页面 -->
    <template v-if="home == 'BUSSINESS'">
      <van-swipe class="page-swipe" :autoplay="3000" indicator-color="black">
        <van-swipe-item
          ><img style="width:100%;height:100%;" src="http://www.zgcfo.com/images/index_bigBanner/bigBanner2.jpg" alt=""
        /></van-swipe-item>

        <van-swipe-item
          ><img style="width:100%;height:100%;" src="http://www.zgcfo.com/images/index_bigBanner/bigBanner3.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>

      <div class="page-center van-hairline--top">
        <div @click="onNavTo(item.title)" v-for="(item, index) in commercialConfig" :key="index" class="page-center-item">
          <img class="img-icon" :src="item.icon" />
          <div class="img-title">{{ item.title }}</div>
        </div>
      </div>
    </template>

    <my-progress :company-id="currentCompany"></my-progress>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CountTo from '@/components/CountTo/index.vue';
import MyProgress from '@/components/Process/index.vue';
import { formatDate } from '@/utils';
import { Swipe, SwipeItem, ActionSheet, DropdownMenu, DropdownItem, Icon } from 'vant';
import UserStore from '@/store/modules/user';
import trademark from '../commercial/trademark/index.vue';

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
export default class Index extends Vue {
  private startVal = 0;
  private home = 'BUSSINESS';
  private accountReport: any = {};
  private loading: boolean = false;
  private active: number = 0;
  private nowDate: string = '';
  private currentCompany: number = 0;
  private companyOption: any = [];
  private AccountConfig = [
    // {
    //   title: '纳税详情',
    //   icon: '/icon/icon_nasui.png'
    // },
    {
      title: '可开票额',
      icon: '/icon/icon_money.png',
      name: 'bill'
    },
    {
      title: '外勤详情',
      icon: '/icon/icon_waiqing.png',
      name: 'legwork'
    },
    {
      title: '资料存管',
      icon: '/icon/icon_zhiliao.png',
      name: 'dataStorage'
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
      icon: '/icon/icon_piaoju.png',
      name: 'invoice'
    }
  ];
  private commercialConfig = [
    {
      title: '企业荣誉',
      icon: '/icon/icon_honor.png'
    },
    {
      title: '项目方案',
      icon: '/icon/icon_project.png'
    },
    {
      title: '代账服务',
      icon: '/icon/icon_daizhang.png'
    },
    {
      title: '项目申报',
      icon: '/icon/icon_diannao.png'
    },
    {
      title: '异常查询',
      icon: '/icon/icon_yichang.png'
    },
    {
      title: '商标查询',
      icon: '/icon/icon_shangbiao.png'
    },
    {
      title: '专利查询',
      icon: '/icon/icon_zhuanli.png'
    }
  ];

  // 利润表..查看
  navToTable(value: string) {
    if (value == 'balance' || value == 'income' || value == 'cash') {
      this.$router.push({ name: 'table', params: { type: value } });
    } else {
      this.$router.push({ name: value });
    }
  }
  // 跳转到我的消息
  navToMessage() {
    this.$router.push({ name: 'message' });
  }
  // 跳转到代理记账页面
  navToAccount() {
    this.$router.push({ name: 'agency' });
  }

  onNavTo(index: string) {
    switch (index) {
      case '企业荣誉':
        this.$router.push({ name: 'honor' });
        break;
      case '项目方案':
        window.open('http://tools.zgcfo.com/#/project/10255');
        break;
      case '代账服务':
        this.$router.push({ name: 'agencyAccount' });
        break;
      case '项目申报':
        this.$router.push({ name: 'projectApplication' });
        break;
      case '异常查询':
        window.open('http://park.zgcfo.com/#/pages/tools/abnormal/abnormal');

        break;
      case '商标查询':
        this.$router.push({ name: 'trademark' });
        break;
      case '专利查询':
        window.open('http://park.zgcfo.com/#/pages/tools/patent/patent');
        break;
    }
  }
  getDate() {
    let date = new Date();
    let year = `${date.getFullYear()}`;
    let month = date.getMonth();
    this.nowDate = `${year}年${month < 10 ? '0' + month : month}月`;
  }
  // 列表选择改变
  onCompanyIdChange(e: number) {
    this.currentCompany = e;
    UserStore.SETCOMPANYID(this.currentCompany);
    let company = this.companyOption.find((v: any) => {
      return v.value == e;
    });
    if (company.serviceDeparts && company.serviceDeparts.indexOf('ACCOUNT') > -1) {
      this.home = 'ACCOUNT';
      this.getAccountReport();
    } else {
      this.home = 'BUSSINESS';
    }
  }
  // 获取银行存款等信息
  getAccountReport() {
    this.accountReport = this.$storeApi.accountReport({ companyId: this.currentCompany }, true);
  }
  // 获取公司列表
  async getCompanyList() {
    this.loading = true;
    try {
      let resp = await this.$storeApi.listCustomerCompany({}, true);
      this.companyOption = resp.map((v: any) => ({
        text: v.companyname,
        value: v.id,
        serviceDeparts: v.service_departs
      }));
      if (!!UserStore.COMPANYID) {
        this.currentCompany = UserStore.COMPANYID;
      } else {
        this.currentCompany = this.companyOption[0].value;
        UserStore.SETCOMPANYID(this.currentCompany);
      }
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
  // 初始化界面
  initHome() {
    let index =
      this.companyOption.findIndex((v: any) => {
        return v.value == this.currentCompany;
      }) || 0;
    this.home =
      this.companyOption[index].serviceDeparts && this.companyOption[index].serviceDeparts.split(',').includes('ACCOUNT')
        ? 'ACCOUNT'
        : 'BUSSINESS';
    if (this.home == 'ACCOUNT') {
      this.getDate();
      this.getAccountReport();
    }
  }
  async created() {
    await this.getCompanyList();
    this.initHome();
  }
}
</script>

<style>
.van-dropdown-menu {
  height: 40px;
}
.van-dropdown-menu__title::after {
  top: 8px;
}
.van-dropdown-menu__title {
  color: #fd6756;
}
</style>

<style lang="scss" scoped>
.page {
  position: relative;
  font-size: 12px;
  padding-bottom: 10px;
  &-header {
    z-index: 100;
    background: #fff;
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
    top: 0px;
    right: 10px;
    vertical-align: middle;
    color: $theme-color;
    font-size: 13px;
    line-height: 50px;
    height: 50px;
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
      padding: 8px;
      .title {
        font-size: 14px;
        color: #8492a6;
      }
      .number {
        margin-top: 6px;
        font-size: 20px;
        // text-align: center;
        color: #717484;
        &-active {
          color: $theme-color;
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
        color: $primary-color;
        .icon {
          background: $primary-color;
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