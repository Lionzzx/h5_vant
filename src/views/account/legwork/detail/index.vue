<template>
  <div class="detail">
    <nav-bar title="外勤详情" has-left></nav-bar>
    <van-cell-group>
      <van-cell title="开始办理时间" :value="detail.begin_time" />
      <van-cell title="到达拍照" />
      <div class="detail-img"><img :src="detail.begin_realpath" /></div>
      <van-cell title="开始办理时间" :value="detail.begin_time" />
      <van-cell title="结束办理拍照" />
      <div class="detail-img"><img :src="detail.end_realpath" /></div>
      <van-cell title="外勤用时" :value="detail.begin_time" />
      <van-cell title="外勤地点" :value="detail.begin_time" />
      <van-cell title="外勤内容" :value="detail.task_name" />
      <van-cell title="外勤类别" :value="detail.type" />
      <van-cell title="外勤总结" :value="detail.finish_memo" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserModule from '@/store/modules/user';
import { Cell, CellGroup } from 'vant';
import navBar from '@/components/NavBar/index.vue';
@Component({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    navBar
  }
})
export default class Detail extends Vue {
  private detail: any = {};
  async getData() {
    let resp = await this.$storeApi.legworkDetail({ legworkId: this.$route.params.id });
    this.detail = resp;
    this.detail.begin_realpath = `/api/assets/${resp.begin_realpath}`;
    this.detail.end_realpath = `/api/assets/${resp.end_realpath}`;
  }
  created() {
    this.getData();
  }
}
</script>


<style lang="scss" scoped>
.detail {
  &-img {
    width: 300px;
    height: 280px;
    margin: 10px auto;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
