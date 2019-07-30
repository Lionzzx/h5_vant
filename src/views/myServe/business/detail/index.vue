<template>
  <van-row>
    <nav-bar :title="companyName" has-left></nav-bar>
    <div><img src="@/assets/dymaic.png" width="100%" height="150px" /></div>
    <van-steps direction="vertical" :active="activeIndex" active-color="#f60" style="margin-top:20px;margin-bottom:60px">
      <van-step>
        <van-row>
          <van-col v-if="status == 'ing'" span="24"> 服务中：{{ workPeople }} 正在为您服务</van-col>
        </van-row>
      </van-step>
      <van-step v-for="item in workOrderList" :key="item.id">
        <van-row>
          <van-col span="10"
            >{{ item.PROCESS
            }}<span class="text" @click="item.status == 2 && showDetail(item.id, item.PROCESS)" v-if="item.status == 2">
              [已完成]</span
            ></van-col
          >
          <van-col v-if="item.status !== 0" span="10"
            ><span>{{ item.enddate }}</span></van-col
          >

          <van-col v-if="item.status == 0" span="10"
            ><span> 预计时间：{{ item.preenddate || '无' }}</span></van-col
          >
        </van-row>
      </van-step>
    </van-steps>
    <!-- <van-dialog v-model="show" :title="title" show-cancel-button>
      <div style="margin:10px"><img style="width:100%;height:100%" src="/img/logo.00fbc545.png" /></div>
    </van-dialog> -->
    <van-button class="button" bottom-action @click="createComplaint">我要催单</van-button>
  </van-row>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import userStore from '@/store/modules/user';
import { Step, Steps, Swipe, SwipeItem, Row, Button, Col, Dialog } from 'vant';
@Component({
  components: {
    NavBar,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [Button.name]: Button,
    [Dialog.Component.name]: Dialog.Component
  }
})
export default class MyTools extends Vue {
  private activeIndex = 0;
  private show = false;
  private title = '';
  private workOrderList = [];
  private companyName = '';
  private workPeople = '';
  private status = 'ok';
  private processImg = '';

  // 获取信息
  async getDetail() {
    const resp = await this.$storeApi.detailOrder({ workOrderId: this.$route.query.id });
    this.workOrderList = resp.map((v: any, i: number) => {
      if (v.status == 1) {
        this.activeIndex = i + 1;
        this.status = 'ing';
        this.workPeople = v.realname;
      }
      v.enddate = v.status == 1 ? '服务中' : v.enddate ? v.enddate.slice(0, 10) : '';
      return v;
    });
  }

  createComplaint() {
    try {
      this.$storeApi.createComplaint({ workOrderId: this.$route.query.id, record: '客户催单' });
      this.$toast('已通知服务人员');
    } catch (error) {}
  }
  async showDetail(id: string, title: string) {
    // this.title = title;
    // this.processImg = await this.$storeApi.processImg({ processId: id });
    // this.show = true;
  }
  created() {
    this.companyName = userStore.currentCompanyName;
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
.text {
  text-decoration: underline;
}
</style>
<style>
.van-step--finish .van-step__circle,
.van-step--finish .van-step__line {
  background-color: #f23e0f;
}
</style>

