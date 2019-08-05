<template>
  <div class="page">
    <!-- <div class="page-header x-fl">广东科技有限公司</div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
    </van-swipe>
    <div class="page-steps">
      <van-steps active-color="#E94F55" direction="vertical" :active="0">
        <van-step>
          <div>快件已发货</div>
          <div>2016-07-10 09:30</div>
        </van-step>
        <van-step>
          <div>快件已发货</div>
          <div>2016-07-10 09:30</div>
        </van-step>
        <van-step>
          <div>快件已发货</div>
          <div>2016-07-10 09:30</div>
        </van-step>
      </van-steps>
    </div>

    <div class="button">
      我要催单
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { Step, Steps, Swipe, SwipeItem } from 'vant';
@Component({
  components: {
    NavBar,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
})
export default class MyTools extends Vue {}
</script>

<style lang="scss">
.page {
  &-header {
    height: 40px;
    font-size: 14px;
    color: #fff;
    background: $linear-color;
  }

  .button {
    margin: 20px auto;
    width: 300px;
    height: 40px;
    background: $linear-color;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
  }
}
</style>
