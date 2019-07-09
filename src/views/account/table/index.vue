<template>
  <div>
    <van-nav-bar style="background-color: #952f2a;color:white" title="企业评估报告" left-arrow @click-left="$backTo()" />
    <van-loading v-if="loading" style="top:50vw;left:50vh" />
    <!-- <van-row style="padding:10px">
      <van-row v-for="item in tableData" :key="item.id">
        <van-col span="20" style="font-size:16px;border:1px solid #636363;padding-left:12px;line-height:16px">{{item.name}}</van-col>
        <van-col span="4" style="font-size:16px;border:1px solid #636363;padding-left:12px;line-height:16px">100</van-col>
      </van-row>
    </van-row> -->

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

<script>
export default {
  data() {
    return {
      tableData: [],
      loading: false
    };
  },
  methods: {
    get_table_data() {
      let _self = this;
      _self.loading = true;
      // let url = `http://192.168.0.220:8888/Mock/simple?projectID=1&uri=/store/findCompanyReportInfo`
      let url = `api/store/findCompanyReportInfo`;

      let config = {
        params: {
          companyId: _self.$route.params.companyid,
          period: _self.$route.params.period,
          type: _self.$route.params.type
          // companyId: '33784',
          // period: '201805',
          // type: _self.$route.params.type
        }
      };

      function success(res) {
        console.log(res.data.data);
        _self.tableData = res.data.data;
        _self.loading = false;
      }

      function fail(err) {
        _self.loading = false;
        console.log(err);
      }

      this.$Get(url, config, success, fail);
    }
  },
  filters: {
    replace: function(value) {
      if (!value) {
        return '';
      }
      value = value.toString();
      // console.log(value.replace(/ /g,"&nbsp;"))
      return value.replace(/ /g, '&nbsp;&nbsp;');
    }
  },
  created() {
    this.get_table_data();
  },
  beforeRouteEnter(to, from, next) {
    let _self = this;

    next(vm => {
      vm.$bus.emit('UPDATE_TABLE', true);
    });
  },
  beforeRouteLeave(to, from, next) {
    // console.log("这是退出路由！")
    let _self = this;
    _self.$bus.emit('CANCEL_TABLE', true);
    next();
  }
};
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
