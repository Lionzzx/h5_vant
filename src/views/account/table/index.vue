<template>
  <div>
    <div style="font-size:12px" v-if="!loading">
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

@Component({
  components: {}
})
export default class Table extends Vue {
  private type:string = '';
  async created() {
    let { type= '' } = this.$route.params;
    this.type = type;
    await storeApi.findCompanyReportInfo({ companyId: UserModule.companyId, period: '', type });
  }
}
</script>

<style scoped>
.title {
  font-size: 14px;
  padding: 0px;
}
.zero {
  color: red;
}
</style>
