<template>
  <div class="page">
    <nav-bar title="企业荣誉" has-left />
    <div class="page-title">恭喜你是高新企业</div>
    <div class="page-logo">
      <img src="" />
    </div>

    <van-collapse v-model="activeName" accordion>
      <van-collapse-item title="标题1(10)" name="1">内容</van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { storeApi } from '@/api';
import { Collapse, CollapseItem } from 'vant';
import { AppModule } from '@/store/modules/app';

@Component({
  components: {
    NavBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  }
})
export default class Honor extends Vue {
  private activeName: number = 1;
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  &-title {
    text-align: center;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
  &-logo {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

