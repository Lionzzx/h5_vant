<template>
  <div>
    <nav-bar title="消息详情" has-left></nav-bar>
    <div class="main">
      {{ detail.first }}
      <div v-for="(item, index) in detail.keyword" :key="index" class="main-title">{{ index + '：' + item }}</div>
      <div v-if="detail.remark" class="main-title">{{ detail.remark }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { Panel } from 'vant';

@Component({
  components: {
    NavBar,
    [Panel.name]: Panel
  }
})
export default class Message extends Vue {
  private detail: any = {};
  async created() {
    const resp = await this.$storeApi.msgDetail({ id: this.$route.params.id });
    this.detail = resp;
  }
}
</script>

<style lang="scss" scoped>
.main {
  font-size: 14px;
  width: 90vw;
  background: white;
  box-shadow: 0 0.05333rem 0.26667rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px 10px;
  &-title {
    margin-top: 6px;
  }
}
</style>


