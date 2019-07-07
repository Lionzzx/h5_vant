<template>
  <div class="page">
    <van-tabs title-active-color="#ff7d4e"
              color="#ff7d4e"
              v-model="active"
              swipeable>
      <van-tab :key="index"
               v-for="(item,index) in tabs">
        <div slot="title">
          <van-icon class="icon"
                    :name="item.icon" />{{item.title}}
        </div>
        <div class="container">
          <div class="container-list">
            <div class="container-list-main">
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
            <div class="container-list-footer">
              已成功代账16个月
            </div>
          </div>
        </div>
        <div v-if="false" class="empty">
          <div class="empty-tip">您还未订购任何服务，现在就去了解一下！</div>
          <div class="empty-list">
            <div class="empty-list-item">
              <div class="logo"></div>
              <div class="content"></div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Tab, Tabs } from "vant";

@Component({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  }
})
export default class MyServe extends Vue {
  private tabs = [
    {
      title: "代账进度",
      icon: "balance-list-o"
    },
    {
      title: "工商进度",
      icon: "chart-trending-o"
    },
    {
      title: "增值进度",
      icon: "refund-o"
    }
  ];
  navToServe() {
    this.$router.push({ name: "myServe" });
  }
  goHonor() {
    this.$router.push({
      name: "honor",
      params: {
        companyid: "111"
      }
    });
  }

  created() {}

  handleCompanySelect() {}
}
</script>

<style lang="scss" scoped>
.page {
  font-size: 13px;
  background: #eaedf3;
  height: 100vh;
  .container {
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

