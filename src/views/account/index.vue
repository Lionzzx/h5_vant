<template>
  <div class="page">
    <van-dropdown-menu class="page-header"
                       active-color="#ff7d4e">
      <van-dropdown-item v-model="currentCompany"
                         :options="companyOption" />
    </van-dropdown-menu>

    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgTop">
        <div class="wave waveTop"
             style="background-image: url('/img/cheshi.png')"></div>
      </div>
      <div class="waveWrapperInner bgMiddle">
        <div class="wave waveMiddle"
             style="background-image: url('/img/cheshi.png')"></div>
      </div>
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom"
             style="background-image: url('/img/cheshi.png')"></div>
      </div>

      <div class="page-count">
        <countTo class="count-number"
                 :startVal='startVal'
                 :endVal='endVal'
                 :duration='1000'></countTo>
        <div class="count-title">本月应交税费（元）</div>
      </div>
    </div>

    <div class="page-number">
      <div class="page-number-item">
        <div class="title">
          <van-icon style="margin-right:8px"
                    color="#fbc2a7"
                    name="bar-chart-o"></van-icon>本月净利润（元）
        </div>
        <div class="number number-active">-20,918.53</div>
      </div>
      <div class="page-number-item">
        <div class="title">
          <van-icon style="margin-right:8px"
                    color="#fbc2a7"
                    name="bar-chart-o"></van-icon>本月净利润（元）
        </div>
        <div class="number">-20,918.53</div>
      </div>
      <div class="page-number-item">
        <div class="title">
          <van-icon style="margin-right:8px"
                    color="#fbc2a7"
                    name="bar-chart-o"></van-icon>本月净利润（元）
        </div>
        <div class="number">-20,918.53</div>
      </div>
      <div class="page-number-item">
        <div class="title">
          <van-icon style="margin-right:8px"
                    color="#fbc2a7"
                    name="bar-chart-o"></van-icon>本月净利润（元）
        </div>
        <div class="number">-20,918.53</div>
      </div>
    </div>
    <div class="page-center van-hairline--top">
      <div v-for="(item,index) in iconConfig"
           :key="index"
           class="page-center-item">
        <img class="img-icon"
             :src="item.icon" />
        <div class="img-title">{{item.title}}</div>
      </div>
    </div>
    <div class="page-line"></div>
    <van-swipe class="page-ad"
               :autoplay="3000"
               indicator-color="black">
      <van-swipe-item><img src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E6%98%93%E6%9F%A5%E8%B4%A6%E4%B8%AD%E9%83%A8%E5%B9%BB%E7%81%AF.jpg%2Forigine%2F95af7ea0-30f6-432c-8ecf-0d8fe11b9a50"
             alt=""></van-swipe-item>
      <van-swipe-item><img src="https://caishui.zbjimg.com/caishui%2Fcaishui%2F%E6%98%93%E6%9F%A5%E8%B4%A6%E4%B8%AD%E9%83%A8%E5%B9%BB%E7%81%AF.jpg%2Forigine%2F95af7ea0-30f6-432c-8ecf-0d8fe11b9a50"
             alt=""></van-swipe-item>
    </van-swipe>
    <div class="page-process">
      <div @click="navToServe"
           class="page-process-header">
        <div class="page-process-header-left">
          <van-icon class="icon"
                    name="label-o"></van-icon>最新代账进度
        </div>
        <div class="page-process-header-right">全部</div>
      </div>
      <div class="page-process-item">
        <div class="page-process-item-title">亿账柜有限公司</div>
        <div class="page-process-item-serve">服务单位：亿账柜有限公司</div>
        <div class="page-process-item-desc">
          <div>代账中（等待传票）</div>
          <div>已成功代账16个月</div>
        </div>
      </div>
    </div>
    <div class="page-process">
      <div @click="navToServe"
           class="page-process-header">
        <div class="page-process-header-left">
          <van-icon class="icon"
                    name="label-o"></van-icon>最新代账进度
        </div>
        <div class="page-process-header-right">全部</div>
      </div>
      <div class="page-process-item">
        <div class="page-process-item-title">亿账柜有限公司</div>
        <div class="page-process-item-serve">服务单位：亿账柜有限公司</div>
        <div class="page-process-item-desc">
          <div>代账中（等待传票）</div>
          <div>已成功代账16个月</div>
        </div>
      </div>
    </div>
    <div class="page-process">
      <div @click="navToServe"
           class="page-process-header">
        <div class="page-process-header-left">
          <van-icon class="icon"
                    name="label-o"></van-icon>最新代账进度
        </div>
        <div class="page-process-header-right">全部</div>
      </div>
      <div class="page-process-item">
        <div class="page-process-item-title">亿账柜有限公司</div>
        <div class="page-process-item-serve">服务单位：亿账柜有限公司</div>
        <div class="page-process-item-desc">
          <div>代账中（等待传票）</div>
          <div>已成功代账16个月</div>
        </div>
      </div>
    </div>
    <div class="tabbar-fix"></div>
    <van-tabbar v-model="active"
                active-color="#f27c41"
                fixed>
      <van-tabbar-item icon="gem-o"
                       to="/commercial">我的服务</van-tabbar-item>
      <van-tabbar-item to="/mytools"
                       icon="apps-o">我的工具</van-tabbar-item>
      <van-tabbar-item icon="user-o"
                       to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CountTo from "@/components/CountTo/index.vue";
import {
  Swipe,
  SwipeItem,
  ActionSheet,
  DropdownMenu,
  DropdownItem
} from "vant";
import TestApi from "@/services/testApi";

import { AppModule } from "@/store/modules/app";

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [ActionSheet.name]: ActionSheet,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    CountTo
  }
})
export default class Home extends Vue {
  private startVal = 0;
  private endVal = 2017435;
  private show: boolean = false;
  private active: number = 0;
  private currentCompany: number = 0;
  private companyOption = [
    { text: "新年有限公司", value: 0 },
    { text: "阿里巴巴有限公司", value: 1 },
    { text: "中国有限公司", value: 2 }
  ];
  private iconConfig = [
    {
      title: "纳税详情",
      icon: "/icon/icon_nasui.png"
    },
    {
      title: "可开票额",
      icon: "/icon/icon_money.png"
    },
    {
      title: "外勤详情",
      icon: "/icon/icon_waiqing.png"
    },
    {
      title: "资料存管",
      icon: "/icon/icon_zhiliao.png"
    },
    {
      title: "企业利润",
      icon: "/icon/icon_zhuanli.png"
    },
    {
      title: "资产负债",
      icon: "/icon/icon_yichang.png"
    },
    {
      title: "现金流量",
      icon: "/icon/icon_cash.png"
    },
    {
      title: "票据情况",
      icon: "/icon/icon_piaoju.png"
    }
  ];

  navToServe() {
    this.$router.push({ name: "myserve" });
  }
  goHonor() {
    this.$router.push({
      name: "honor",
      params: {
        companyid: "111"
      }
    });
  }

  created() {}

  handleCompanySelect() {
    this.show = true;
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

