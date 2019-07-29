<template>
  <div class="page">
    <nav-bar title="发票情况" has-left></nav-bar>
    <div class="page-title">
      <div class="page-title-top">
        <div class="title"><svg-icon icon-class="nested" /> 空票明细</div>
        <!-- <div>可开金额：142121</div> -->
      </div>
      <div v-for="(item, index) in list.invoice" :key="index" class="page-title-bottom">
        <span>{{ digitsMap[item.digits] }}--{{ invoiceTypeMap[item.invoice_type] }}</span
        ><span>× {{ item.hava_receive }}</span>
      </div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="开票记录">
        <template v-for="(item, index) in list.invoiceLog">
          <van-cell
            :key="index"
            v-if="item.action_type == 'kp'"
            :title="digitsMap[item.digits] + '--' + invoiceTypeMap[item.invoice_type]"
            :value="item.createdate"
          />
        </template>
      </van-tab>
      <van-tab title="领取记录">
        <template v-for="(item, index) in list.invoiceLog">
          <van-cell
            :key="index"
            v-if="item.action_type == 'xz'"
            :title="digitsMap[item.digits] + '--' + invoiceTypeMap[item.invoice_type]"
            :value="item.createdate"
          /> </template
      ></van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserModule from '@/store/modules/user';
import { Tab, Tabs, Cell } from 'vant';
import NavBar from '@/components/NavBar/index.vue';

@Component({
  components: {
    NavBar,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Cell.name]: Cell
  }
})
export default class DataStorage extends Vue {
  private list: any = [];
  private active = '0';
  private digitsMap = {
    thousand: '千位',
    oneHundredThousand: '十万位'
  };
  private invoiceTypeMap = {
    OrdinaryInvoice: '专用票',
    ElectronicInvoice: '电子票'
  };
  async invoiceList() {
    this.list = await this.$storeApi.invoiceList({ companyId: UserModule.COMPANYID });
  }
  async created() {
    this.invoiceList();
  }
}
</script>

<style>
.van-collapse-item__title {
  background: #f7f5f5;
}
</style>

<style lang="scss" scoped>
.collapse-item {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.page {
  &-title {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    color: #222;
    font-size: 16px;
    padding: 10px 14px;
    background-color: #f8f8f8;
    &-top {
      display: flex;
      justify-content: space-between;
      align-content: center;
      .title {
        font-size: 16px;
        font-weight: 600;
        color: #000;
      }
    }
    &-bottom {
      margin-top: 6px;
      display: flex;
      justify-content: space-between;
      align-content: center;
    }
  }
}
</style>

