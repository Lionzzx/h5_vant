<template>
  <div class="page">
    <div class="page-header x-fl">广东科技有限公司</div>

    <div class="page-steps">
      <van-steps active-color="#E94F55" direction="vertical" :active="0">
        <van-step>
          <div class="x-flsa"><span>2019</span><span>税金</span><span>报表</span><span>外勤</span></div>
        </van-step>
        <van-step>
          <div class="x-flsa"><span>2019</span><span>税金</span><span>报表</span><span>外勤</span></div>
        </van-step>
        <van-step>
          <div class="x-flsa"><span>2019</span><span>税金</span><span>报表</span><span>外勤</span></div>
        </van-step>
      </van-steps>
    </div>

    <div class="button">
      想要更多补助吗? 立即项目评估
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { Step, Steps } from 'vant';
@Component({
  components: {
    NavBar,
    [Step.name]: Step,
    [Steps.name]: Steps
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
    background: rgba(233, 79, 85, 1);
  }

  .button {
    margin: 20px auto;
    width: 300px;
    height: 40px;
    background: rgba(233, 79, 85, 1);
    border-radius: 5px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
  }
}
</style>
