<template>
  <div class="page">
    <nav-bar :title="detail.companyname" has-left />
    <div v-if="detail.isNewHigh == 'Y'" class="page-title">恭喜你是高新企业</div>
    <!-- <div class="page-logo">
      <img src="" />
    </div> -->

    <van-collapse v-model="activeName" accordion>
      <van-collapse-item name="1">
        <span slot="title">企业荣誉（{{ ryDetail.Total }}）</span>
        <div slot="default">
          <van-row
            v-for="(item, index) in ryDetail.Datas"
            :key="index"
            style="padding-bottom:5px;border-bottom: 1px solid #ccc;padding-bottom:5px;padding-top:5px;line-height:1.7em"
            gutter="20"
          >
            <van-col span="24" style="font-size:14px;font-weight:900">{{ item.XMMC }}</van-col>
            <van-col span="16" v-if="item.XMLB != ''">{{ item.XMLB }}</van-col>
            <van-col span="16" v-if="item.XMLB == ''" style="visibility:hidden">1</van-col>
            <van-col span="8" style="text-align:right">{{ item.NF }}</van-col>
            <van-col span="24">{{ item.SBXM }}</van-col>
          </van-row>
        </div>
      </van-collapse-item>
      <van-collapse-item name="2">
        <span slot="title">知识产权（{{ zlDetail.Total }}）</span>
        <div slot="default">
          <van-row
            v-for="(item, index) in zlDetail.Datas"
            :key="index"
            style="padding-bottom:5px;border-bottom: 1px solid #ccc;padding-bottom:5px;padding-top:5px;line-height:1.7em"
            gutter="20"
          >
            <van-col span="24" style="font-size:14px;font-weight:900">{{ item.MC }}</van-col>
            <van-col span="12">{{ item.Type }}</van-col>
            <van-col span="12" style="text-align:right">{{ item.SQRQ }}</van-col>
          </van-row>
        </div></van-collapse-item
      >
      <van-collapse-item name="3">
        <span slot="title">软件著作（{{ rzDetail.Total }}）</span>
        <div slot="default">
          <van-row
            v-for="(item, index) in rzDetail.Datas"
            :key="index"
            style="padding-bottom:5px;border-bottom: 1px solid #ccc;padding-bottom:5px;padding-top:5px;line-height:1.7em"
            gutter="20"
          >
            <van-col span="24" style="font-size:14px;font-weight:900">{{ item.SoftName }}</van-col>
            <van-col span="12">{{ item.SoftID }}</van-col>
            <van-col span="10" style="text-align:right">{{ item.TypeNum }}</van-col>
            <van-col span="22" style="text-align:right">{{ item.SuessDate }}</van-col>
          </van-row>
        </div></van-collapse-item
      >
      <van-collapse-item name="3">
        <span slot="title">商标（{{ sbDetail.Total }}）</span>
        <div slot="default">
          <van-row
            v-for="(item, index) in sbDetail.Datas"
            :key="index"
            style="padding-bottom:5px;border-bottom: 1px solid #ccc;padding-bottom:5px;padding-top:5px;"
            gutter="20"
          >
            <van-row>
              <van-col span="6">
                <img style="height:100%;width:100%" :src="item.ImageUrl" />
              </van-col>
              <van-col span="16" style="line-height:2em">
                <van-col span="24" style="font-size:14px;font-weight:900">{{ item.Name }}</van-col>
                <van-col span="12">{{ item.RegNo }}</van-col>
                <van-col span="12" style="text-align:right">{{ item.AppDate }}</van-col>
              </van-col>
            </van-row>
          </van-row>
        </div></van-collapse-item
      >
    </van-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { Collapse, CollapseItem, Row, Col } from 'vant';
import userStore from '@/store/modules/user';

@Component({
  components: {
    NavBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    [Row.name]: Row,
    [Col.name]: Col
  }
})
export default class Honor extends Vue {
  private activeName: number = 1;
  private detail: any = {};
  private ryDetail = {};
  private rzDetail = {};
  private sbDetail = {};
  private zlDetail = {};

  async getData() {
    try {
      this.detail = await this.$storeApi.bmjDetail({ companyId: userStore.COMPANYID }, true);
      this.ryDetail = this.detail.ry;
      this.rzDetail = this.detail.rz;
      this.sbDetail = this.detail.sb;
      this.zlDetail = this.detail.zl;
    } catch (error) {}
  }

  created() {
    this.getData();
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  &-title {
    text-align: center;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
  &-logo {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

