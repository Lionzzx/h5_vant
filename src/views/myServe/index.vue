<template>
  <div class="page">
    <van-tabs @change="handleChangeType" v-model="active">
      <van-tab>
        <div slot="title"><van-icon class="icon" name="balance-list-o" />代账进度</div>
        <div @click="toAccount" class="contain">
          <div v-for="(item, index) in list" :key="index" class="contain-list">
            <div class="contain-list-main">
              <div class="company">
                <div>
                  {{ item.alisname }}
                </div>
                <div class="company-serve">服务企业：{{ item.companyname }}</div>
              </div>
              <div class="info">
                <div class="info-status">代帐中</div>
                <div class="info-tip">(立即缴费)</div>
              </div>
            </div>
            <div class="contain-list-footer">已成功代账 {{ item.successMonth }}个月</div>
          </div>
        </div>
      </van-tab>
      <van-tab>
        <div slot="title"><van-icon class="icon" name="balance-list-o" />工商进度</div>
        <div @click="toBusiness" class="contain">
          <div v-for="(item, index) in list" :key="index" class="contain-list">
            <div class="contain-list-main">
              <div class="company">
                <div>
                  {{ item.product }}
                </div>
                <div class="company-serve">当前进度：{{ item.CurrentProcess }}</div>
              </div>
              <div class="info">
                <!-- <div class="info-status">详情</div> -->
                <div class="info-tip">详情</div>
              </div>
            </div>
            <div class="contain-list-footer">预计完成时间: {{ item.service_end_time }}</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Tab, Tabs, Icon } from 'vant';

@Component({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Icon.name]: Icon
  }
})
export default class MyServe extends Vue {
  private active = 0;
  private page: number = 1;
  private pageSize: number = 10;
  private hasMore: boolean = true;
  private list: any = [];
  private type: string = '';

  toAccount() {
    this.$router.push({ name: 'agency' });
  }

  toProject() {
    this.$router.push({ name: 'project' });
  }

  toBusiness() {
    this.$router.push({ name: 'business' });
  }
  handleChangeType(e: any) {
    this.type = e == '0' ? 'ACCOUNT' : 'BUSSINESS';
    this.getList(this.type);
  }
  async getList(type?: string) {
    let temType: string;
    if (type) {
      temType = type;
      this.page = 1;
      this.hasMore = true;
    } else {
      temType = this.type || this.$route.params.type;
    }
    if (!this.hasMore) {
      return;
    }
    try {
      const resp = await this.$storeApi.workOrderList({ type: temType, page: this.page, pageSize: this.pageSize });
      this.list = resp.rows;
      this.page += 1;
      this.hasMore = this.page * this.pageSize > this.list.total;
    } catch (error) {}
  }
  created() {
    this.active = this.$route.params.type == 'ACCOUT' ? 0 : 1;
    this.getList();
  }
}
</script>

<style lang="scss" scoped>
.page {
  font-size: 13px !important;
  background: #eaedf3;
  height: 100vh;
  .contain {
    &-list {
      margin-top: 10px;
      padding: 15px 18px;
      background: #fff;
      &-main {
        display: flex;
        justify-content: space-between;
        .company {
          &-serve {
            font-size: 12px;
            margin-top: 8px;
            color: #717484;
          }
        }
        .info {
          &-status {
            text-align: right;
            color: #717484;
          }

          &-tip {
            color: #fefeff;
            margin-top: 3px;
            padding: 2px 6px;
            font-size: 10px;
            background: #ff9f91;
            height: 16px;
            line-height: 16px;
            text-align: center;
            border-radius: 4px;
          }
        }
      }
      &-footer {
        font-size: 12px;
        color: #a5abb9;
        margin-top: 20px;
      }
    }
  }

  .empty {
    padding: 20px;
    &-tip {
      font-size: 14px;
      line-height: 24px;
      color: #ff7d4e;
      font-weight: normal;
      margin-left: 2px;
    }
  }
}
.icon {
  vertical-align: middle;
  margin-right: 4px;
}
</style>

