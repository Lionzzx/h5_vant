<template>
  <div>
    <div class="user-poster">
      <div class="user-poster-avatar"></div>
      <div class="user-poster-name">昵称</div>
      <img />
    </div>
    <van-cell-group class="user-group">
      <van-cell icon="records" title="我的订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的优惠券" is-link />
      <van-cell icon="gold-coin-o" title="反馈建议" is-link />
      <van-cell icon="chat-o" to="/user/message" title="我的消息" is-link />
      <van-cell icon="gift-o" to="/user/about" title="关于我们" is-link />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Cell, CellGroup } from 'vant';
@Component({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.user {
  &-poster {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30vh;
    background: linear-gradient(#e94f55, #e52810);
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