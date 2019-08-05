<template>
  <div class="page">
    <nav-bar has-left
      ><div slot="title">{{ companyName + period }}</div></nav-bar
    >
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeApi } from '@/api';
import UserModule from '@/store/modules/user';
import AppModule from '@/store/modules/app';
import NavBar from '@/components/NavBar/index.vue';

@Component({
  components: {
    NavBar
  },
  filters: {
    replace: function(value: any) {
      if (!value) {
        return '';
      }
      value = value.toString();
      return value.replace(/ /g, '&nbsp;&nbsp;');
    }
  }
})
export default class Table extends Vue {
  private type: string = '';
  private tableData = [];
  private period = '';
  private companyName = UserModule.currentCompanyName;
  private workOrderList: any = [];

  async getTable() {
    try {
      let { type = '' } = this.$route.params;
      this.type = type;
      if (this.$route.params.period) {
        this.period = this.$route.params.period;
      }
      this.tableData = await storeApi.findCompanyReportInfo({ companyId: UserModule.COMPANYID, period: this.period, type }, true);
    } catch (error) {}
  }

  async getBaseInfo() {
    try {
      let { detail = [] } = await this.$storeApi.showCompanyProgressInfo({ companyId: UserModule.COMPANYID }, true);
      this.workOrderList = detail
        .filter((v: any) => {
          return !!v.id;
        })
        .reverse();
      this.period = this.workOrderList[0].period;
      this.getTable();
    } catch (error) {
    }
  }
  async created() {
    this.getBaseInfo();
  }
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
