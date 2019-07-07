<template>
  <div class="page">
    <div class="header"><span class="header-icon"></span>实用工具</div>
    <div class="list">
      <div class="item">
        <img class="icon"
             src="/icon/icon_music.png" />
        <div class="title">工具名</div>
      </div>
      <div class="item">
        <img class="icon"
             src="/icon/icon_music.png" />
        <div class="title">工具名</div>
      </div>
    </div>

    <div class="header"><span class="header-icon"></span>实用工具</div>
    <div class="list">
      <div class="item">
        <img class="icon"
             src="/icon/icon_music.png" />
        <div class="title">工具名</div>
      </div>
      <div class="item">
        <img class="icon"
             src="/icon/icon_music.png" />
        <div class="title">工具名</div>
      </div>
      <div class="item">
        <img class="icon"
             src="/icon/icon_music.png" />
        <div class="title">工具名</div>
      </div>
      <div class="item">
        <img class="icon"
             src="/icon/icon_music.png" />
        <div class="title">工具名</div>
      </div>
    </div>
 
    <van-tabbar v-model="active"
                active-color="#f27c41"
                fixed>
      <van-tabbar-item icon="gem-o"
                       to="/">我的服务</van-tabbar-item>
      <van-tabbar-item icon="apps-o">我的工具</van-tabbar-item>
      <van-tabbar-item icon="user-o"
                       to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "vant";
import TestApi from "@/services/testApi";
import { AppModule } from "@/store/modules/app";


@Component({
  components: {
  }
})
export default class MyTools extends Vue {
  private active = 1;
  async created() {}
}
</script>

<style lang="scss">
.page {
  .header {
    padding: 10px;
    font-size: 14px;
    &-icon {
      display: inline-block;
      height: 10px;
      width: 6px;
      background: red;
      margin-right: 10px;
    }
  }
  .list {
    display: flex;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 25vw;
      .title {
        margin-top: 6px;
        font-size: 14px;
      }
      .icon {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>

