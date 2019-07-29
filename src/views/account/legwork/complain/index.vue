<template>
  <div class="complain">
    <div class="complain-title">服务：小规模代理记账</div>
    <div class="complain-area"><van-field autosize type="textarea" v-model="value" placeholder="请输入内容" /></div>
    <div @click="handleComplain" class="complain-button">提交</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { storeApi } from '@/api';
import UserModule from '@/store/modules/user';
import { Field } from 'vant';

@Component({
  components: {
    [Field.name]: Field
  }
})
export default class Table extends Vue {
  private value: any = '';
  async handleComplain() {
    if (!this.value) {
      return this.$toast('请填写内容');
    }
    try {
      await this.$storeApi.createComplaint({ workOrderId: this.$route.params.id, record: this.value });
      this.$toast('投诉成功');
      this.$router.go(-1);
    } catch (error) {}
  }
}
</script>


<style lang="scss" scoped>
.complain {
  &-title {
    text-align: center;
    font-size: 16px;
    height: 200px;
    line-height: 200px;
  }
  &-area {
    border: 1px solid rgb(104, 103, 103);
    height: 200px;
    margin: 0 20px;
  }
  &-button {
    position: fixed;
    left: 0;
    bottom: 0;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    background: #e94f55;
    width: 100vw;
    font-size: 16px;
  }
}
</style>
