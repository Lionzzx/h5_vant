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
            <td :class="{ zero: item.currentYear < 0 }">{{ item.currentYear }}</td>
            <td :class="{ zero: item.currentMonth < 0 }">{{ item.currentMonth }}</td>
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
            <td :class="{ zero: item.currentYear < 0 }">{{ item.currentYear }}</td>
            <td :class="{ zero: item.currentMonth < 0 }">{{ item.currentMonth }}</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-striped table-bordered table-condensed" v-if="this.$route.params.type == 'balance'">
        <thead>
          <tr>
            <th style="width:25%">资产</th>
            <th style="width:12%">年初余额</th>
            <th style="width:12%">期末余额</th>
            <th style="width:27%">负债和所有者权益</th>
            <th style="width:12%">年初余额</th>
            <th style="width:12%">期末余额</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td v-html="$options.filters.replace(item.left.name)" style="width:26%"></td>
            <td :class="{ zero: item.left.yearBegin < 0 }" style="width:12%">{{ item.left.yearBegin }}</td>
            <td :class="{ zero: item.left.periodEnd < 0 }" style="width:12%">{{ item.left.periodEnd }}</td>
            <td v-html="$options.filters.replace(item.right.name)" style="width:26%"></td>
            <td :class="{ zero: item.right.yearBegin < 0 }" style="width:12%">{{ item.right.yearBegin }}</td>
            <td :class="{ zero: item.right.periodEnd < 0 }" style="width:12%">{{ item.right.periodEnd }}</td>
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
  private tableData: any = [];
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
      type = type == 'income' ? '1' : type == 'cash' ? '2' : '0';
      // 操他妈后端
      const { result } = await this.$storeApi.getCompanyReportForm(
        { companyId: UserModule.COMPANYID, period: `${String(this.period).substr(0, 4)}-${String(this.period).substr(4)}`, type },
        true
      );
      if (type == '0') {
        this.tableData = [...new Array(33)].map((v, i) => {
          return { left: result[i], right: result[i + 33] };
        });
      } else {
        this.tableData = result;
      }
    } catch (error) {
      console.log(error);
    }
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
    } catch (error) {}
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
