<template>
  <div>
    <div class="user-poster">
      <div class="user-poster-avatar"></div>
      <div class="user-poster-name">昵称</div>
      <img />
    </div>
    <van-cell-group class="user-group">
      <van-cell icon="records"
                title="我的订单"
                to="/commercial"
                is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points"
                title="我的优惠券"
                is-link />
      <van-cell icon="gold-coin-o"
                title="反馈建议"
                is-link />
      <van-cell icon="gift-o"
                to="/user/about"
                title="关于我们"
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
import { Cell, CellGroup } from "vant";
@Component({
  components: {
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30vh;
    // background: url('/img/user_bg.png');
    // background-size: 100% 100%;
    background: linear-gradient(#f27c41, #f27c41);
    &-name {
      font-size: 20px;
      margin-top: 10px;
      color: #fff;
    }

    &-avatar {
      height: 70px;
      width: 70px;
      border-radius: 50%;
      background: #fff;
    }
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