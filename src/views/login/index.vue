<template>
  <van-row>
    <van-row>
      <div class="login-img">
        <center>
          <img style="height: 80px" src="~@/assets/logo.png" />
        </center>
      </div>
      <div style="width:80%;margin:auto">
        <van-cell-group>
          <van-field v-model="mobile" label="手机号" placeholder="请输入手机号" />
          <van-field v-model="code" type="number" label="短信验证码" placeholder="请输入验证码">
            <van-button slot="button" size="small" class="bt_primary" @click="getCode" v-if="!codeDisable">获取验证码</van-button>
            <van-button slot="button" size="small" class="bt_primary" @click="getCode" v-if="codeDisable" disabled
              >{{ time }}秒后重新获取</van-button
            >
          </van-field>
        </van-cell-group>
      </div>
      <van-row style="width:80%;margin:auto;margin-top:60px">
        <van-button size="large" class="bt_primary" @click.enter="login" :disabled="isLogin">登 陆</van-button>
      </van-row>
    </van-row>
  </van-row>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button, Cell, CellGroup, Row, Col, Field } from 'vant';
import { storeApi } from '@/api';
import { isMobile } from '@/utils/validate';
import UserModule from '@/store/modules/user';
import { setStorage, removeStorage } from '@/utils/storage';

@Component({
  components: {
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Row.name]: Row,
    [Col.name]: Col,
    [Field.name]: Field
  }
})
export default class Message extends Vue {
  private isLogin: boolean = false;
  private mobile: string = '';
  private code: string = '';
  private time: number = 60;
  private codeDisable: boolean = false;
  async login() {
    const { mobile, code } = this;
    if (!isMobile(mobile)) {
      return this.$toast('手机号不正确');
    }
    if (!code) {
      return this.$toast('请输入短信验证码');
    }
    try {
      let { customer_id = '' } = await storeApi.login({ mobile, code });
      setStorage('customerId', customer_id);
      this.$toast('登录成功');
      this.$router.push('/');
    } catch (error) {}
  }

  async getCode() {
    if (isMobile(this.mobile)) {
      try {
        await this.$storeApi.sendMsg({ mobile: this.mobile });
        this.isLogin = false;
        this.codeDisable = true;
        this.time = 60;
        this.countDown();
      } catch (error) {}
    } else {
      this.$toast('手机号不正确');
    }
  }
  countDown() {
    let time1 = setInterval(() => {
      this.time--;
      if (this.time <= 0) {
        clearInterval(time1);
        this.codeDisable = false;
      }
    }, 1000);
    this.$once('hook:beforeDestroy', () => {
      clearInterval(time1);
    });
  }
  created() {
    removeStorage('companyId');
    removeStorage('customerId');
    UserModule.REMOVECOMPANYID();
  }
}
</script>

<style lang="scss" scoped>
.bt_primary {
  background: linear-gradient(60deg, $theme-color, $primary-color);
  color: #fff;
  border-radius: 6px;
}
.login {
  &-img {
    height: 150px;
    margin-top: 140px;
  }
}
</style>



