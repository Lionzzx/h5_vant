<template>
  <div class="page">
    <van-dropdown-menu active-color="#ff0808">
      <van-dropdown-item @change="onCompanyIdChange" v-model="currentCompany" :options="companyOption" />
    </van-dropdown-menu>

    <van-swipe class="page-swipe" :autoplay="3000" indicator-color="black">
      <van-swipe-item
        ><img style="width:100%;height:100%;" src="http://www.zgcfo.com/images/index_bigBanner/bigBanner2.jpg" alt=""
      /></van-swipe-item>

      <van-swipe-item><img style="width:100%;height:100%;" src="http://www.zgcfo.com/images/index_bigBanner/bigBanner3.jpg" alt=""/></van-swipe-item>
    </van-swipe>

    <div class="page-center van-hairline--top">
      <div @click="onNavTo(item.title)" v-for="(item, index) in iconConfig" :key="index" class="page-center-item">
        <img class="img-icon" :src="item.icon" />
        <div class="img-title">{{ item.title }}</div>
      </div>
    </div>

    <!-- 代账/工商/项目的进度 -->
    <my-progress :company-id="currentCompany"></my-progress>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Swipe, SwipeItem, DropdownMenu, DropdownItem, Icon, ActionSheet } from 'vant';

import MyProgress from '@/components/Process/index.vue';
import UserStore from '@/store/modules/user';

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Icon.name]: Icon,
    [ActionSheet.name]: ActionSheet,
    MyProgress
  }
})
export default class Home extends Vue {
  private currentCompany: number = 0;
  private companyOption: any = [];
  private iconConfig = [
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
    // {
    //   title: '商标查询',
    //   icon: '/icon/icon_shangbiao.png'
    // },
    {
      title: '专利查询',
      icon: '/icon/icon_zhuanli.png'
    }
  ];

  navToServe() {
    this.$router.push({ name: 'myserve' });
  }
  onCompanyIdChange(e: string) {
    UserStore.SETCOMPANYID(e);
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

  goHonor() {
    this.$router.push({
      name: 'honor',
      params: {
        companyid: '111'
      }
    });
  }

  created() {
    this.companyOption = UserStore.COMPANYLIST;
    let id = this.companyOption[0].value;
    this.currentCompany = id;
    UserStore.SETCOMPANYID(id);
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
  color: #ff0808;
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
      color: $theme-color;
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
}
</style>

