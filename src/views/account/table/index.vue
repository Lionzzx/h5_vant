<template>
  <div class="page">
    <nav-bar has-left><div @click="handleTitle" slot="title">测试</div></nav-bar>
    <div class="main">
      <table class="table table-striped table-bordered" v-if="this.$route.params.type == 'cash'">
        <thead>
          <tr>
            <th>项目</th>
            <th>本年累计</th>
            <th>本月金额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td v-html="$options.filters.replace(item.name)"></td>
            <td :class="{ zero: item.current_year < 0 }">{{ item.current_year }}</td>
            <td :class="{ zero: item.current_month < 0 }">{{ item.current_month }}</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-striped table-bordered" v-if="this.$route.params.type == 'income'">
        <thead>
          <tr>
            <th>项目</th>
            <th>本年累计</th>
            <th>本月金额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td v-html="$options.filters.replace(item.name)"></td>
            <td :class="{ zero: item.current_year < 0 }">{{ item.current_year }}</td>
            <td :class="{ zero: item.current_month < 0 }">{{ item.current_month }}</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-striped table-bordered table-condensed" v-if="this.$route.params.type == 'balance'">
        <thead>
          <tr>
            <th style="width:25%">资产</th>
            <th style="width:12%">期末余额</th>
            <th style="width:12%">年初余额</th>
            <th style="width:27%">负债和所有者权益</th>
            <th style="width:12%">期末余额</th>
            <th style="width:12%">年初余额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td v-html="$options.filters.replace(item.asset)" style="width:26%"></td>
            <td :class="{ zero: item.asset_year_init_balance < 0 }" style="width:12%">{{ item.asset_year_init_balance }}</td>
            <td :class="{ zero: item.asset_end_balance < 0 }" style="width:12%">{{ item.asset_end_balance }}</td>
            <td v-html="$options.filters.replace(item.equity)" style="width:26%"></td>
            <td :class="{ zero: item.equity_year_init_balance < 0 }" style="width:12%">{{ item.equity_year_init_balance }}</td>
            <td :class="{ zero: item.equity_end_balance < 0 }" style="width:12%">{{ item.equity_end_balance }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeApi } from '@/api';
import UserModule from '@/store/modules/user';
import NavBar from '@/components/NavBar/index.vue';
import { ActionSheet } from 'vant';
@Component({
  components: {
    NavBar,
    [ActionSheet.name]: ActionSheet
  }
})
export default class Table extends Vue {
  private show = false;
  private actions = [{ name: '选项' }, { name: '选项' }, { name: '选项', subname: '描述信息' }];
  private type: string = '';
  private tableData = [];

  async getTable() {
    try {
      let { type = '' } = this.$route.params;
      this.type = type;
      this.tableData = await storeApi.findCompanyReportInfo({ companyId: UserModule.COMPANYID, period: '', type });
    } catch (error) {}
  }
  async created() {
    this.getTable();
  }
  handleTitle() {
    this.show = true;
  }

  onSelect(item: any) {}
}
</script>

<style scoped>
.page {
  height: 100vw;
  width: 100vh;
  bottom: 100vh;
  transform: rotate(90deg);
  transform-origin: left bottom;
  left: 0;
  color: #2c3e50;
  position: absolute;
  overflow-y: scroll;
}
.main {
  font-size: 12px;
}
.title {
  font-size: 14px;
  padding: 0px;
}
.zero {
  color: red;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
}
table {
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
}
.table-bordered {
  border: 1px solid #ddd;
}
.table-bordered > tbody > tr > td,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > td,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > thead > tr > th {
  border: 1px solid #ddd;
  padding: 5px;
}
.table-condensed > tbody > tr > td,
.table-condensed > tbody > tr > th,
.table-condensed > tfoot > tr > td,
.table-condensed > tfoot > tr > th,
.table-condensed > thead > tr > td,
.table-condensed > thead > tr > th {
  padding: 5px;
}
.table-bordered > thead > tr > td,
.table-bordered > thead > tr > th {
  border-bottom-width: 2px;
}
th {
  text-align: left;
}
</style>
