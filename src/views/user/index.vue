<template>
  <div>
    <div class="user-poster">
      <div class="user-poster-avatar">
        <img v-if="userDetail.head_img_url" :src="userDetail.head_img_url" />
        <img v-else src="@/assets/avatar.png" />
      </div>
      <div class="user-poster-name">{{ userDetail.nickname || '暂无信息' }}</div>
      <img />
    </div>
    <!-- <van-cell-group class="user-group">
      <van-cell icon="records" title="我的订单" is-link />
    </van-cell-group> -->

    <van-cell-group>
      <!-- <van-cell icon="points" title="我的优惠券" is-link />
      <van-cell icon="gold-coin-o" title="反馈建议" is-link /> -->
      <van-cell icon="chat-o" to="/user/message" title="我的消息" is-link />
      <van-cell icon="points" to="/user/about" title="关于我们" is-link />
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
export default class User extends Vue {
  private userDetail: any = {
    head_img_url: '',
    nickname: ''
  };
  async created() {
    const resp = await this.$storeApi.userDetail();
    this.userDetail = resp;
  }
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
      overflow: hidden;
      background: #fff;
      img {
        width: 100%;
        height: 100%;
      }
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