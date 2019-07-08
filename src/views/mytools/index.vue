<template>
  <div class="page">
    <div class="header"><span class="header-icon"></span>实用工具</div>
    <div class="list">
      <div @click="onNavTo('latestPolicy')" class="item">
        <img class="icon" src="~@/assets/index_icons01.png" />
        <div class="title">最新政策</div>
      </div>
      <div @click="onNavTo('patent')" class="item">
        <img class="icon" src="@/assets/index_icons02.png" />
        <div class="title">专利荣誉查询</div>
      </div>
      <div @click="onNavTo('abnormal')" class="item">
        <img class="icon" src="/icon/icon_music.png" />
        <div class="title">企业异常查询</div>
      </div>
      <div @click="onNavTo('income')" class="item">
        <img class="icon" src="@/assets/index_icons04.png" />
        <div class="title">个税测算</div>
      </div>
    </div>
    <div class="list">
      <div @click="onNavTo('subsidy')" class="item">
        <img class="icon" src="@/assets/index_icons05.png" />
        <div class="title">政府补助测评</div>
      </div>
      <div @click="onNavTo('bill')" class="item">
        <img class="icon" src="@/assets/index_icons06.png" />
        <div class="title">发票查询</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Icon } from 'vant';
import TestApi from '@/services/testApi';
import { AppModule } from '@/store/modules/app';

@Component({
  components: {
    [Icon.name]: Icon
  }
})
export default class MyTools extends Vue {
  onNavTo(data: string) {
    window.open(`http://park.zgcfo.com/#/pages/tools/${data}/${data}`);
  }
}
</script>

<style lang="scss">
.page {
  .header {
    padding: 10px;
    font-size: 14px;
    &-icon {
      display: inline-block;
      height: 10px;
      width: 6px;
      background: red;
      margin-right: 10px;
    }
  }
  .list {
    margin-top: 16px;
    display: flex;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 25vw;
      .title {
        margin-top: 6px;
        font-size: 14px;
      }
      .icon {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>

