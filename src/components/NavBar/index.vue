<template>
  <div>
    <van-nav-bar :title="title" :left-arrow="hasLeft" @click-left="goHome" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { NavBar } from 'vant';

@Component({
  components: {
    [NavBar.name]: NavBar
  }
})
export default class Home extends Vue {
  @Prop(Boolean) hasLeft!: boolean;
  @Prop(String) title!: string;
  goHome() {
    this.$router.go(-1);
  }
}
</script>


<style>
.van-nav-bar {
  background: linear-gradient(180deg, #e94f55 0%, #c91f25 100%) !important;
}
.van-nav-bar .van-icon {
  color: #fff;
}
.van-nav-bar__title {
  color: #fff;
}
</style>

