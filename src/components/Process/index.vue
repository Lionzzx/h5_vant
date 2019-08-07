
<template>
  <div class="page">
    <div style="padding-top: 8px;" class="page-process">
      <div @click="navToServe('BUSSINESS')" class="page-process-header">
        <div class="page-process-header-left color-theme"><van-icon class="icon " name="label-o"></van-icon>最新工商进度</div>
        <div class="page-process-header-right">全部</div>
      </div>
      <div
        @click="navToBussiness(item.workorderId)"
        v-for="(item, index) in bussinessList"
        :key="index"
        class="page-process-item"
      >
        <div class="page-process-item-title">{{ item.product }}</div>
        <!-- <div class="page-process-item-serve">详情</div> -->
        <div class="page-process-item-desc x-mb1">
          <div>
            当前进度：<span class="color-theme">{{ item.CurrentProcess }}</span>
          </div>
          <div>预计完成时间: {{ item.person_plan_finish_date || '暂无信息' }}</div>
        </div>
        <div class="page-process-item-tip">
          <div class="title">详情</div>
        </div>
      </div>
      <div class="page-process-item" v-if="!bussinessList.length">
        <img style="height:100%;width:100%;" src="~@/assets/guanggao2.png" />
      </div>
    </div>

    <div class="page-process">
      <div @click="navToServe('ACCOUNT')" class="page-process-header">
        <div class="page-process-header-left color-primary">
          <van-icon class="icon bg-primary" name="label-o"></van-icon>最新代账进度
        </div>
        <div class="page-process-header-right">全部</div>
      </div>
      <div @click="navToAccount(item.workorderId)" v-for="(item, index) in accountList" :key="index" class="page-process-item">
        <div class="page-process-item-title">{{ item.product }}</div>
        <div class="page-process-item-serve">服务企业：{{ item.companyname }}</div>
        <div class="page-process-item-desc">
          <div>已成功代账 {{ item.successMonth }}个月</div>
        </div>
        <div class="page-process-item-tip">
          <div class="title">代帐中</div>
          <div v-if="item.balance_count < 3" @click.stop="navToBuy" class="tip">(立即缴费)</div>
        </div>
      </div>
      <div class="page-process-item" v-if="!accountList.length">
        <img @click="navToBuy" style="height:100%;width:100%;" src="~@/assets/agencyLogo.png" />
      </div>
    </div>

    <!-- <div v-if="projectList.length" class="page-process">
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
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import { Icon, Dialog } from 'vant';
import { monthDistance } from '@/utils';
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
  async onCompanyIdChanged(val: string, oldVal: string) {
    if (!val) {
      return;
    }
    let { ACCOUNT, BUSSINESS } = await this.$storeApi.serviceList({ companyId: val, codeType: 'ACCOUNT,BUSSINESS,PROJECT' });
    if (!ACCOUNT.length) {
      Dialog.setDefaultOptions({ confirmButtonColor: '#e52810' });
      Dialog.confirm({
        message: '您现在还没有代账服务，现在就去开启代账服务。',
        confirmButtonText: '去开启'
      })
        .then(() => {
          this.$router.push({ name: 'agencyAccount' });
        })
        .catch(() => {});
    }
    this.accountList = ACCOUNT.map((v: any) => {
      v.successMonth = monthDistance(v.begin_period);
      v.successMonth += 1;
      return v;
    });
    this.bussinessList = BUSSINESS;
  }

  navToServe(type: string) {
    this.$router.push({ name: 'myServe', params: { type } });
  }
  navToBuy() {
    this.$router.push({ name: 'agencyAccount' });
  }
  navToBussiness(id: any) {
    this.$router.push({ name: 'businessDetail', query: { id } });
  }
  navToAccount(id: any) {
    this.$router.push({ name: 'agency', params: { id } });
  }

  async created() {}
}
</script>

<style lang="scss" scoped>
.page {
  margin-bottom: 50px;
  &-process {
    padding-bottom: 8px;
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
      position: relative;
      background: #fff;
      padding: 0 10px;
      border-top: 1px solid rgba(239, 239, 239, 0.8);
      &-title {
        font-size: 14px;
        padding-top: 16px;
      }
      &-serve {
        margin: 10px 0 10px;
        font-size: 10px;
        color: #aaa;
      }
      &-desc {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
      }
      &-tip {
        position: absolute;
        right: 20px;
        top: 20px;
        text-align: center;

        .title {
          font-size: 14px;
          color: #f27c41;
        }

        .tip {
          font-size: 14px;
          color: $theme-color;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>


