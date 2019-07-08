<template>
  <div class="page">
    <div class="page-list">
      <div class="page-list-item x-fl">
        <div>国家高新技术企业认定</div>
        <div>国家高新技术企业认定</div>
        <div>国家高新技术企业认定</div>
        <div @click="navToMore" class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div>国家高新技术企业认定</div>
        <div>国家高新技术企业认定</div>
        <div>国家高新技术企业认定</div>
        <div class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div>国家高新技术企业认定</div>
        <div>国家高新技术企业认定</div>
        <div>国家高新技术企业认定</div>
        <div class="item-button">查看更多</div>
      </div>
      <div class="page-list-item x-fl">
        <div>国家高新技术企业认定</div>
        <div>国家高新技术企业认定</div>
        <div>国家高新技术企业认定</div>
        <div class="item-button">查看更多</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Home extends Vue {
  navToMore() {
    this.$router.push({})
  }
}
</script>

<style lang="scss" scoped>
.page {
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
      line-height: 27px;
      height: 27px;
      border: 0.5px solid rgba(233, 79, 85, 1);
      border-radius: 13px;
    }
  }
}
</style>

