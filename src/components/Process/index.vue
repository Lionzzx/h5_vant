
<template>
  <div class="page">
    <div class="page-process">
      <div @click="navToServe" class="page-process-header">
        <div class="page-process-header-left color-theme"><van-icon class="icon " name="label-o"></van-icon>最新代账进度</div>
        <div class="page-process-header-right">全部</div>
      </div>
      <div class="page-process-item">
        <div class="page-process-item-title">亿账柜有限公司</div>
        <!-- <div class="page-process-item-serve">详情</div> -->
        <div class="page-process-item-desc x-mb1">
          <div>当前进度：国地税报道</div>
          <div>预计完成时间: 20190308</div>
        </div>
      </div>
    </div>

    <div class="page-process">
      <div @click="navToServe" class="page-process-header">
        <div class="page-process-header-left color-primary">
          <van-icon class="icon bg-primary" name="label-o"></van-icon>最新工商进度
        </div>
        <div class="page-process-header-right">全部</div>
      </div>
      <div class="page-process-item">
        <div class="page-process-item-title">亿账柜有限公司(服务中)</div>
        <!-- <div class="page-process-item-serve">服务单位：亿账柜有限公司</div> -->
        <div class="page-process-item-desc">
          <div>总计 20000</div>
          <div>已收 10000</div>
        </div>
      </div>
    </div>

    <div class="page-process">
      <div @click="navToServe" class="page-process-header">
        <div class="page-process-header-left color-red"><van-icon class="icon bg-red" name="label-o"></van-icon>最新项目进度</div>
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
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Icon } from 'vant';
import { storeApi } from '@/api';
import UserStore from '@/store/modules/user';

@Component({
  components: {
    [Icon.name]: Icon
  },
  props: ['companyId']
})
export default class MyProcess extends Vue {
  private accountList = [];
  private bussinessList = [];
  private projectList = [];

  @Watch('companyId', { immediate: true, deep: true })
  onCompanyIdChanged(val: string, oldVal: string) {
    if (!val) {
      return;
    }
    let { ACCOUNT, BUSSINESS, PROJECT } = this.$storeApi.serviceList({ companyId: val, codeType: 'ACCOUNT,BUSSINESS,PROJECT' });
    this.accountList = ACCOUNT;
    this.bussinessList = BUSSINESS;
    this.projectList = PROJECT;
  }

  navToServe() {
    this.$router.push({ name: 'myserve' });
  }

  async created() {}
}
</script>

<style lang="scss" scoped>
.page {
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
        color: $theme-color;
        .icon {
          background: $theme-color;
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


