<template>
  <div class="page">

    <van-dropdown-menu active-color="#ff7d4e">
      <van-dropdown-item v-model="currentCompany"
                         :options="companyOption" />
    </van-dropdown-menu>

    <van-swipe class="page-swipe"
               :autoplay="3000"
               indicator-color="black">
      <van-swipe-item><img src="http://bpic.588ku.com/ad_diversion/19/06/20/32b031e675ffb51785239d58b973312c.png!/fw/688/unsharp/true/compress/true"
             alt=""></van-swipe-item>
      <van-swipe-item><img src="http://bpic.588ku.com/ad_diversion/19/06/20/32b031e675ffb51785239d58b973312c.png!/fw/688/unsharp/true/compress/true"
             alt=""></van-swipe-item>
    </van-swipe>

    <div class="page-center van-hairline--top">
      <div v-for="(item,index) in iconConfig"
           :key="index"
           class="page-center-item">
        <img class="img-icon"
             :src="item.icon" />
        <div class="img-title">{{item.title}}</div>
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
      <van-tabbar-item to="/mytools" icon="apps-o">我的工具</van-tabbar-item>
      <van-tabbar-item icon="user-o"
                       to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
    [DropdownItem.name]: DropdownItem
  }
})
export default class Home extends Vue {
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
      title: "企业荣誉",
      icon: "/icon/icon_honor.png"
    },
    {
      title: "项目方案",
      icon: "/icon/icon_project.png"
    },
    {
      title: "代账服务",
      icon: "/icon/icon_daizhang.png"
    },
    {
      title: "项目申报",
      icon: "/icon/icon_diannao.png"
    },
    {
      title: "异常查询",
      icon: "/icon/icon_yichang.png"
    },
    {
      title: "商标查询",
      icon: "/icon/icon_shangbiao.png"
    },
    {
      title: "专利查询",
      icon: "/icon/icon_zhuanli.png"
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    font-weight: 700;
    padding: 0 15px;
    &-tip {
      color: #f27c41;
      font-size: 8px;
    }
  }

  &-swipe {
    height: 150px;
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

