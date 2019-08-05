<template>
  <div class="page">
    <div class="page-list">
      <div class="page-list-item x-fl">
        <div class="title">高新技术企业认定</div>
        <div>企业税收减免</div>
        <div>享百万政府补贴</div>
        <div @click="navToMore('projectApplicationindex0')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">高新餐品认定</div>
        <div>助力产业转型</div>
        <div>树立行业标杆</div>
        <div @click="navToMore('projectApplicationindex1')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">创业带动就业</div>
        <div>开业即可领取</div>
        <div>政府直接补贴</div>
        <div @click="navToMore('projectApplicationindex2')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">创新基金</div>
        <div>提升企业形象</div>
        <div>加速通过红利申请</div>
        <div @click="navToMore('projectApplicationindex3')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">公司注册</div>
        <div>足不出户 轻松办理</div>
        <div>服务进度 实时掌控</div>
        <div @click="navToMore('projectApplicationindex4')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">公司变更</div>
        <div>精简流程 简单快速</div>
        <div>专人对接 高效详细</div>
        <div @click="navToMore('projectApplicationindex1')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">商标注册</div>
        <div>当天报送材料</div>
        <div>98%通过率</div>
        <div @click="navToMore('projectApplicationindex2')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">软著申请</div>
        <div>国家荣誉认可</div>
        <div>企业宣传利器</div>
        <div @click="navToMore('projectApplicationindex3')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">软著申请</div>
        <div>国家荣誉认可</div>
        <div>企业宣传利器</div>
        <div @click="navToMore('projectApplicationindex4')" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div class="title">软著申请</div>
        <div>国家荣誉认可</div>
        <div>企业宣传利器</div>
        <div @click="navToMore('projectApplicationindex5')" class="item-button">查看更多</div>
      </div>
    </div>
    <!-- <div class="hasMore">加载更多</div>
    <van-loading class="loading" type="spinner" color="#e94f55" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Loading } from 'vant';

@Component({
  components: {
    [Loading.name]: Loading
  }
})
export default class Home extends Vue {
  navToMore(name: string) {
    this.$router.push({ name });
  }
}
</script>

<style lang="scss" scoped>
.page {
  .hasMore {
    font-size: 14px;
    color: #e94f55;
    line-height: 40px;
    text-align: center;
  }
  .loading {
    margin: 10px;
    text-align: center;
  }
  .title {
    font-size: 17px;
    color: #e94f55;
    margin-bottom: 10px;
  }
  &-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    &-item {
      font-size: 14px;
      width: 42vw;
      margin-top: 20px;
      height: 200px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
      border-radius: 3px;
    }
    .item-button {
      color: #e94f55;
      width: 80px;
      text-align: center;
      line-height: 25px;
      margin-top: 20px;
      height: 27px;
      border: 1px solid rgba(233, 79, 85, 1);
      border-radius: 13px;
    }
  }
}
</style>

