<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <nav-bar title="我的消息" has-left></nav-bar>
      <div @click="navToDetail(item.id)" v-for="(item, index) in list" :key="index" class="msg van-hairline--bottom">
        <div class="msg-icon"><svg-icon icon-class="message" /></div>
        <div class="msg-title">
          <div class="msg-activity">{{ item.templatename }}</div>
          <div class="msg-time">{{ item.senddate | changeTime }}</div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { List } from 'vant';

@Component({
  components: {
    NavBar,
    [List.name]: List
  },
  filters: {
    changeTime: function(value: any) {
      return value.substr(0, 11);
    }
  }
})
export default class Message extends Vue {
  private loading = false;
  private finished = false;
  private list: any = [];
  private page = 0;
  private pageSize = 20;

  created() {
    this.$storeApi.msgList({ page: 1, pageSize: 10 });
  }
  navToDetail(id: any) {
    this.$router.push({ name: 'messageDetail', params: { id } });
  }
  async onLoad() {
    this.page += 1;
    const resp = await this.$storeApi.msgList({ page: this.page, pageSize: this.pageSize });
    this.loading = false;
    this.list.push(...resp.rows);
    if (this.page * this.pageSize > resp.total) {
      this.finished = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: calc(100vh - 2rem);
}
.msg {
  display: flex;
  padding: 10px 20px 10px 0;
  &-icon {
    width: 20vw;
    color: $theme-color;
    text-align: center;
  }

  &-main {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    display: flex;
    font-size: 14px;
    line-height: 31px;
    color: #222;
    width: 100%;
    justify-content: space-between;
  }

  &-desc {
    margin-top: 6px;
    font-size: 14px;
    color: #666;
  }
}
</style>


