<template>
  <van-row>
    <nav-bar title="gongshi" has-left></nav-bar>
    <div><img src="@/assets/dymaic.png" width="100%" height="150px" /></div>
    <van-steps
      direction="vertical"
      :active="activeIndex"
      active-color="#f60"
      style="margin-top:20px;margin-bottom:60px"
      v-if="!loading"
    >
      <van-step v-for="item in workOrderList" :key="item.id">
        <van-row>
          <van-col span="10">{{ item.PROCESS }}</van-col>
          <van-col span="10"
            ><span>{{ item.enddate }}</span></van-col
          >
        </van-row>
      </van-step>
    </van-steps>
    <van-button class="button" bottom-action @click="submit">我要催单</van-button>
  </van-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import userStore from '@/store/modules/user';
import { Step, Steps, Swipe, SwipeItem, Row, Button, Col } from 'vant';
@Component({
  components: {
    NavBar,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button
  }
})
export default class MyTools extends Vue {
  private activeIndex = 0;
  private workOrderList = [];
  private companyName = '';
  private loading = false;
  async getDetail() {
    const resp = await this.$storeApi.detailOrder({ workOrderId: this.$route.params.id });
    this.workOrderList = resp.map((v: any, i: number) => {
      if (v.status == 1) {
        this.activeIndex = i;
      }
      v.enddate = v.status == 1 ? '服务中' : v.enddate ? v.enddate.slice(0, 10) : '';
      return v;
    });
  }
  submit() {}
  created() {
    // this.companyName = userStore.companyName;
    this.getDetail();
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-size: 20px;
  color: #fff;
  border-radius: 5px;
  width: 100vw;
  position: fixed;
  bottom: 0px;
  background: linear-gradient(#e94f55, #e52810);
  z-index: 3;
}
</style>
<style>
.van-step--finish .van-step__circle,
.van-step--finish .van-step__line {
  background-color: #f23e0f;
}
</style>

