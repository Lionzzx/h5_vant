<template>
  <div>
    <nav-bar title="票据情况" has-left></nav-bar>
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(item, index) in list" :key="index" :name="index">
        <div slot="title">
          {{ item.title }} （<span>{{ item.cost_amount + item.exes_amount + item.bank_receipt + item.income_amount }}</span
          >）
        </div>
        <div class="collapse-item">
          <span>收入（普票，专票）</span>
          <div class="collapse-item-num">
            <span>×{{ item.income_amount }} </span><span>￥{{ item.income_money }} </span>
          </div>
        </div>
        <div class="collapse-item">
          <span>成本（普票，专票）</span>
          <div class="collapse-item-num">
            <span>×{{ item.cost_amount }} </span><span>￥{{ item.cost_money }} </span>
          </div>
        </div>
        <div class="collapse-item">
          <span>费用票</span>
          <div class="collapse-item-num">
            <span>×{{ item.exes_amount }} </span><span>￥{{ item.exes_money }} </span>
          </div>
        </div>
        <div class="collapse-item">
          <span>银行回单</span>
          <div class="collapse-item-num">
            <span>×{{ item.bank_receipt }} </span><span> </span>
          </div></div
      ></van-collapse-item>
    </van-collapse>
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
  private activeNames = [0];
  private list: any = [];

  async billList() {
    const resp = await this.$storeApi.billList({ companyId: '194180' }, true);
    this.list = resp.map((v: any) => {
      v.title = this.handleDate(v.period);
      return v;
    });
  }

  handleDate(time: string) {
    return `${time.substr(5)}月份--${time.substr(0, 4)}年`;
  }
  async created() {
    this.billList();
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
  color: #222;
  justify-content: space-between;
  padding: 4px;

  &-num {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
}
</style>

