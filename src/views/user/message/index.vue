<template>
  <div>
    <nav-bar title="我的消息" has-left></nav-bar>
    <div v-for="(item, index) in list" :key="index" class="msg van-hairline--bottom">
      <div class="msg-icon"><svg-icon :icon-class="item.icon" /></div>
      <div class="msg-main">
        <div class="msg-title">
          <div class="msg-activity">{{ item.title }}</div>
          <div class="msg-time">{{ item.time }}</div>
        </div>
        <div class="msg-desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';

@Component({
  components: {
    NavBar
  }
})
export default class Message extends Vue {
  private list = [
    {
      desc: '提示消息',
      time: '2019-20',
      title: '优惠活动',
      icon: 'edit'
    },
    {
      desc: '免费提醒',
      time: '2019-20',
      title: '优惠活动',
      icon: 'table'
    },
    {
      desc: '提示消息',
      time: '2019-20',
      title: '优惠活惠活惠活动',
      icon: 'tree'
    }
  ];

  created() {
    this.$storeApi.msgList({ page: 1, pageSize: 10 });
  }
}
</script>

<style lang="scss" scoped>
.msg {
  display: flex;
  padding: 10px 20px 10px 0;
  &-icon {
    width: 20vw;
    color: rgb(22, 22, 48);
    text-align: center;
  }

  &-main {
    flex: 1;
  }

  &-title {
    display: flex;
    font-size: 14px;
    color: #222;
    justify-content: space-between;
  }

  &-desc {
    margin-top: 6px;
    font-size: 14px;
    color: #666;
  }
}
</style>


