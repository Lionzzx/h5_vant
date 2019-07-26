<template>
  <div class="page">
    <nav-bar title="发票情况" has-left></nav-bar>
    <div class="page-title">
      <div class="page-title-top">
        <div>空票明细</div>
        <div>可开金额：142121</div>
      </div>
      <div class="page-title-bottom"><span>千位--专票</span><span>× 17</span></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserModule from '@/store/modules/user';
import { Collapse, CollapseItem } from 'vant';
import NavBar from '@/components/NavBar/index.vue';

@Component({
  components: {
    NavBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  }
})
export default class DataStorage extends Vue {
  private activeNames = ['1'];
  private list: any = [];

  async invoiceList() {
    const resp = await this.$storeApi.invoiceList({ companyId: '194180' });
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
    &-top {
    }
  }
}
</style>

