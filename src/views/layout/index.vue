<template>
  <div class="page">
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#E52810" fixed>
      <van-tabbar-item icon="gem-o" to="commercial">我的服务</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="mytools">我的工具</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Tabbar, TabbarItem } from 'vant';

@Component({
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
})
export default class MyTools extends Vue {
  get active() {
    
    return this.$route.name == 'user' ? 2 : this.$route.name == 'mytools' ? 1 : 0;
  }

  set active(newVal) {    
  }
}
</script>

<style lang="scss">
</style>

