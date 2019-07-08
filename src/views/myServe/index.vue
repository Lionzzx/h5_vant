<template>
  <div class="page">
    <van-tabs v-model="active">
      <van-tab>
        <div slot="title"><van-icon class="icon" name="balance-list-o" />代账进度</div>
        <div @click="toAccount" class="contain">
          <div class="contain-list">
            <div class="contain-list-main">
              <div class="company">
                <div>
                  重庆八戒财税科技有限公司（演示）
                </div>
                <div class="company-serve">
                  服务单位：重庆八戒财税有限公司（演示）
                </div>
              </div>
              <div class="info">
                <div class="info-status">代账中</div>
                <div class="info-tip">等待传票</div>
              </div>
            </div>
            <div class="contain-list-footer">
              已成功代账16个月
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab>
        <div slot="title"><van-icon class="icon" name="balance-list-o" />工商进度</div>
        <div @click="toBusiness" class="contain">
          <div class="contain-list">
            <div class="contain-list-main">
              <div class="company">
                <div>
                  重庆八戒财税科技有限公司（演示）
                </div>
                <div class="company-serve">
                  服务单位：重庆八戒财税有限公司（演示）
                </div>
              </div>
              <div class="info">
                <div class="info-status">代账中</div>
                <div class="info-tip">等待传票</div>
              </div>
            </div>
            <div class="contain-list-footer">
              已成功代账16个月
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab>
        <div slot="title"><van-icon class="icon" name="balance-list-o" />增值进度</div>
        <div @click="toProject" class="contain">
          <div class="contain-list">
            <div class="contain-list-main">
              <div class="company">
                <div>
                  重庆八戒财税科技有限公司（演示）
                </div>
                <div class="company-serve">
                  服务单位：重庆八戒财税有限公司（演示）
                </div>
              </div>
              <div class="info">
                <div class="info-status">代账中</div>
                <div class="info-tip">等待传票</div>
              </div>
            </div>
            <div class="contain-list-footer">
              已成功代账16个月
            </div>
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

  toAccount() {
    this.$router.push({ name: 'agency' });
  }

  toProject() {
    this.$router.push({ name: 'project' });
  }

  toBusiness() {
    this.$router.push({ name: 'business' });
  }

  created() {}
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

