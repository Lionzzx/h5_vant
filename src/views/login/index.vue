<template>
  <van-row style="overflow-x: hidden">
    <van-row>
      <div style="height: 150px;margin-top: 5rem">
        <center>
          <img style="height: 80px" src="~@/assets/logo.png" />
        </center>
      </div>
      <div style="width:80%;margin:auto">
        <van-cell-group>
          <van-field v-model="mobile" label="手机号" placeholder="请输入手机号" />
          <van-field v-model="yzm" type="number" label="短信验证码" placeholder="请输入验证码">
            <van-button slot="button" size="small" type="primary" @click="require_code" v-if="!yzmDisable">获取验证码</van-button>
            <van-button slot="button" size="small" type="default" @click="require_code" v-if="yzmDisable" disabled
              >{{ time }}秒后重新获取</van-button
            >
          </van-field>
        </van-cell-group>
      </div>
      <van-row style="width:80%;margin:auto;margin-top:60px">
        <van-button size="large" type="primary" @click="login" :disabled="isLogin">登 陆</van-button>
      </van-row>
    </van-row>
  </van-row>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button, Cell, CellGroup, Row, Col, Field } from 'vant';
import { storeApi } from '@/api';
import UserModule from '@/store/modules/user';

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
  isLogin: boolean = false;
  async login() {
    try {
      let { customer_id = '' } = await storeApi.login({ mobile: 17324068884, code: 123456 });
      UserModule.SETUSERID(customer_id);
      this.$toast('登录成功');
      this.$router.push('/');
    } catch (error) {}
  }
}
</script>


