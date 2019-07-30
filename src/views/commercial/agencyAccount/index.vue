<template>
  <div class="page">
    <div class="page-image">
      <img src="http://www.zgcfo.com/images/detail/accounting.jpg" alt="" />
    </div>
    <div class="page-product">
      <div class="page-product-type">
        类型：<span @click="changeType('type', 0)" class="button" :class="{ active: type == 0 }">小规模代账</span
        ><span @click="changeType('type', 1)" :class="{ active: type == 1 }" class="button">一般纳税人代账</span>
      </div>
      <div class="page-product-type">
        周期：<span @click="changeType('timer', 0)" :class="{ active: timer == 0 }" class="button">1年</span
        ><span @click="changeType('timer', 1)" :class="{ active: timer == 1 }" class="button">2年</span>
      </div>
      <div class="page-product-type price"><span style="font-size:16px;">￥</span>{{ price }}</div>
    </div>
    <div class="page-detail">
      <div class="page-detail-header">服务介绍</div>
      <div class="page-detail-title">服务描述</div>
      <p class="page-detail-disc">
        内资（一年）<br />1、工商年检<br />2、汇缴报盘<br />3、12次外勤（超过每次200）<br />4、远程开票培训（两次，超过每次100）<br />5、远程抄税<br />6、远程打印银行对账及回单<br />7、
        协助税务检查<br />8、项目评估报告<br />9、风险评估<br />10、知识产权知识培训<br />11、税筹预警<br />12、政策推送<br />13、财税关联培训<br />14、国地税核税种<br />15、凭证装订<br />16、协助网上对账<br />小规模一年（2500）<br />1、工商年检<br />2、汇缴报盘<br />3、4次外勤（超过每次200）<br />4、远程开票培训（两次，超过每次100）<br />5、远程抄税<br />6、远程打印银行对账及回单<br />7、
        协助税务检查<br />8、项目评估报告<br />9、知识产权知识培训<br />10、国地税核税种<br />11、凭证装订<br />12、协助网上对账<br />
      </p>
    </div>
    <div class="page-actions">
      <a :href="phone" class="page-actions-button">联系管家</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import NavBar from '@/components/NavBar/index.vue';
import { AppModule } from '@/store/modules/app';

@Component({
  components: {
    NavBar
  }
})
export default class agencyAccount extends Vue {
  private type: number = 0;
  private timer: number = 0;
  private phone: string = '';
  private price: number = 2500;

  changeType(type: string, value: number) {
    if (type == 'timer') {
      this.timer = value;
    } else {
      this.type = value;
    }

    if (this.type == 0 && this.timer == 1) {
      this.price = 5000;
    } else if (this.type == 1 && this.timer == 1) {
      this.price = 14112;
    } else if (this.type == 1 && this.timer == 0) {
      this.price = 7056;
    } else {
      this.price = 2500;
    }
  }

  handleContact() {
    // this.$storeApi
  }
  async created() {
    let resp = await this.$storeApi.followbyPhone();
    this.phone = `tel:${resp.mobilephone}`;
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100%;
  background: rgba(247, 247, 247, 1);
  &-image {
    width: 375px;
    height: 300px;
    background: rgba(208, 208, 208, 1);
    img {
      height: 100%;
      width: 100%;
    }
  }

  &-product {
    background: #fff;
    font-size: 13px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);

    &-type {
      padding-left: 20px;
      display: flex;
      align-items: center;
      height: 50px;
    }
    .price {
      color: #ca1924;
      font-size: 27px;
    }
    .button {
      padding: 0 12px;
      margin-left: 12px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      background: rgba(238, 238, 238, 1);
      border-radius: 13px;
    }
    .active {
      color: #fff;
      background: rgba(228, 0, 35, 1);
    }
  }

  &-detail {
    background: #fff;
    margin-top: 10px;
    padding: 0 16px;
    margin-bottom: 70px;
    &-header {
      font-size: 16px;
      font-weight: 800;
      padding: 10px 0;
    }
    &-title {
      font-size: 14px;
      font-weight: 800;
      padding: 6px 0;
      color: #666666;
    }
    &-disc {
      font-size: 12px;
      color: #666666;
      line-height: 24px;
    }
  }
  &-actions {
    position: fixed;
    bottom: 0px;
    width: 100vw;
    left: 0px;
    height: 60px;
    display: flex;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 0px 0px rgba(238, 237, 237, 1);
    justify-content: space-evenly;
    align-items: center;
    &-button {
      height: 42px;
      width: 80vw;
      line-height: 42px;
      text-align: center;
      font-size: 16px;
      color: rgba(255, 255, 255, 1);
      background: #e40023;
      border-radius: 22px;
    }

    .gray-button {
      background: rgba(255, 255, 255, 1) !important;
      border: 1px solid rgba(51, 51, 51, 1) !important;
      color: #333333 !important;
    }
  }
}
</style>

