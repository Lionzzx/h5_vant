<template>
  <div>
    <nav-bar title="我的消息" has-left></nav-bar>
    <div class="msg van-hairline--bottom">
      <div class="msg-icon">图标</div>
      <div class="msg-main">
        <div class="msg-title">
          <div class="msg-activity">优惠活动</div>
          <div class="msg-time">193423：32</div>
        </div>
        <div class="msg-desc">提示信息</div>
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
  private currentContact = [
    {
      name: '张三',
      tel: '13000000000',
      id: 0
    }
  ];
}
</script>

<style lang="scss" scoped>
.msg {
  display: flex;
  padding: 10px 20px;
  &-icon {
    width: 20vw;
    
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


