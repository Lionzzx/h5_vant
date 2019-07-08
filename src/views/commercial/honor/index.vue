<template>
  <div class="page">
    <nav-bar title="企业荣誉" has-left />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import TestApi from '@/services/testApi';
import { AppModule } from '@/store/modules/app';

@Component({
  components: {
    NavBar
  }
})
export default class Honor extends Vue {}
</script>


<style>
.van-nav-bar {
  background: linear-gradient(180deg, rgba(255, 84, 38, 1) 0%, rgba(210, 9, 1, 1) 100%);
}
.van-nav-bar .van-icon {
  color: #fff;
}
.van-nav-bar__title {
  color: #fff;
}
</style>

<style lang="scss" scoped>
.page {
  height: 100vh;
}
</style>

