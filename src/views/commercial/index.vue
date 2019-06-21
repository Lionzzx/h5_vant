<template>
  <div class="page">
    <div @click="handleCompanySelect"
         class="page-header van-hairline--bottom">
      <span>商事企划有限公司</span>
      <div class="page-header-tip">
        <van-icon class="icon"
                  color="#f27c41"
                  name="cluster-o">
        </van-icon> 切换公司
      </div>
    </div>

    <van-swipe class="page-swipe"
               :autoplay="3000"
               indicator-color="black">
      <van-swipe-item style="background: blue">1</van-swipe-item>
      <van-swipe-item style="background: black">1</van-swipe-item>
    </van-swipe>
    <div class="page-center van-hairline--top">
      <van-row type="flex"
               justify="space-around">
        <van-col class="x-fl"
                 span="4">
          <img class="img-icon"
               src="@/assets/index_icons01.png" />
          <div class="img-title">项目名称</div>
        </van-col>
        <van-col class="x-fl"
                 span="4">
          <img class="img-icon"
               src="@/assets/index_icons01.png" />
          <div class="img-title">项目名称</div>
        </van-col>
        <van-col class="x-fl"
                 span="4">
          <img class="img-icon"
               src="@/assets/index_icons01.png" />
          <div class="img-title">项目名称</div>
        </van-col>
        <van-col class="x-fl"
                 span="4">
          <img class="img-icon"
               src="@/assets/index_icons01.png" />
          <div class="img-title">项目名称</div>
        </van-col>
      </van-row>
      <van-row type="flex"
               justify="space-around">
        <van-col class="x-fl"
                 span="4">
          <img class="img-icon"
               src="@/assets/index_icons01.png" />
          <div class="img-title">项目名称</div>
        </van-col>
        <van-col class="x-fl"
                 span="4">
          <img class="img-icon"
               src="@/assets/index_icons01.png" />
          <div class="img-title">项目名称</div>
        </van-col>
        <van-col class="x-fl"
                 span="4">
          <img class="img-icon"
               src="@/assets/index_icons01.png" />
          <div class="img-title">项目名称</div>
        </van-col>
        <van-col class="x-fl"
                 span="4">
          <img class="img-icon"
               src="@/assets/index_icons01.png" />
          <div class="img-title">项目名称</div>
        </van-col>
      </van-row>
    </div>

    <div>
      <van-row class="x-flc x-ptb2 van-hairline--bottom"
               type="flex"
               justify="space-between">
        <van-col span="18">最新代账进度</van-col>
        <van-col class="x-tr x-mr3"
                 span="6">全部</van-col>
      </van-row>
    </div>

    <van-tabbar v-model="active"
                active-color="#f27c41"
                fixed>
      <van-tabbar-item icon="gem-o"
                       to="/commercial">我的服务</van-tabbar-item>
      <van-tabbar-item icon="apps-o">我的工具</van-tabbar-item>
      <van-tabbar-item icon="user-o"
                       to="/user">个人中心</van-tabbar-item>
    </van-tabbar>

    <van-action-sheet v-model="show"
                      title="请选择公司">
      <p style="text-align:center;">内容</p>
      <p style="text-align:center;">内容</p>
    </van-action-sheet>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Swipe, SwipeItem, ActionSheet } from "vant";
import TestApi from "@/services/testApi";
import { AppModule } from "@/store/modules/app";

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [ActionSheet.name]: ActionSheet
  }
})
export default class Home extends Vue {
  private show: boolean = false;
  private active: number = 0;

  goHonor() {
    this.$router.push({
      name: "honor",
      params: {
        companyid: "111"
      }
    });
  }

  created() {
    console.log("ches");
  }

  handleCompanySelect() {
    this.show = true;
  }
}
</script>
<style>
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
    padding: 8px 0 5px 0;
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

