<template>
  <div class="page">
    <div class="page-header x-fl">广东科技有限公司</div>
    <div class="page-server">
      <div class="page-server-body">
        <div class="item">服务会计：小明</div>
        <div class="item">联系方式：14244142412</div>
        <div class="item">服务税期：20543至324323</div>

        <div class="tousu van-hairline--top x-fls">
          <div>服务不满意？<span style="color:#e94f55;">我要投诉</span></div>
          <div class="tousu-tip">做账资料注意事项</div>
        </div>
        <div class="button">
          联系管家
        </div>
      </div>
    </div>

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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { AppModule } from '@/store/modules/app';
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
  &-server {
    margin: 10px auto;
    width: 345px;
    background: rgba(247, 247, 247, 1);
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    &-body {
      font-size: 14px;
      padding: 10px;
      .item {
        margin-top: 6px;
      }

      .tousu {
        padding: 6px 0;
        &-tip {
          font-size: 12px;
        }
      }
    }

    .button {
      margin: 0 auto;
      width: 240px;
      height: 40px;
      background: rgba(233, 79, 85, 1);
      border-radius: 5px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
    }
  }
}
</style>

