<template>
  <div>
    <!-- <img class="user-poster"
         src="https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png"> -->
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records"
                title="全部订单"
                is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points"
                title="我的积分"
                is-link />
      <van-cell icon="gold-coin-o"
                title="我的优惠券"
                is-link />
      <van-cell icon="gift-o"
                title="我的消息"
                is-link />
    </van-cell-group>

    <van-tabbar v-model="active"
                value="2"
                active-color="#f27c41"
                fixed>
      <van-tabbar-item icon="gem-o"
                       to="/">我的服务</van-tabbar-item>
      <van-tabbar-item icon="apps-o"
                       to="/mytools">我的工具</van-tabbar-item>
      <van-tabbar-item icon="user-o"
                       to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Row, Col, Icon, Cell, CellGroup } from "vant";
@Component({
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
})
export default class Home extends Vue {
  private active = 2;
}
</script>

<style lang="scss">
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>