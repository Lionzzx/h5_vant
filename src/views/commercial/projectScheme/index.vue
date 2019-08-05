<template>
  <div class="content">
    <div class="main">
      <div class="body">
        <van-field
          style="margin-bottom:5px;border-radius:10px;margin-top:5px;padding-left:10px;"
          v-model="companyname"
          placeholder="公司名称"
        ></van-field>
        <van-field
          style="margin-bottom:5px;border-radius:10px;padding-left:10px;"
          v-model="name"
          placeholder="负责人名称"
        ></van-field>
        <van-field
          style="margin-bottom:5px;border-radius:10px;padding-left:10px;"
          v-model="tel"
          placeholder="联系方式"
        ></van-field>
        <van-button
          type="danger"
          size="large"
          class="button"
          @click="handleSubmit"
          :disabled="disabled"
          :loading="!loading"
          style="margin-top:5px"
        >
          立刻提交</van-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button, Field, Loading, Toast } from 'vant';

@Component({
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Loading.name]: Loading
  }
})
export default class ProjectScheme extends Vue {
  private loading: boolean = true;
  private companyname: string = '';
  private name: string = '';
  private tel: string = '';
  get disabled() {
    if (this.companyname && this.name && this.tel) {
      return false;
    } else {
      return true;
    }
  }
  handleSubmit() {
    const { companyname, name, tel } = this;
    this.$router.push({
      name: 'projectSchemeReport',
      params: {
        companyname,
        name,
        tel
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.content {
  background-image: url('~@/assets/project_backgroundImage.png');
  background-size: 100vw 100vh;
  background-color: #07bae5;
  height: 100vh;
  overflow-y: hidden;
}
.main {
  margin-top: 52vh;
}
.body {
  margin-top: 10px !important;
  width: 80%;
  margin: auto;
}
.button {
  color: #fff;
  background: $linear-color;
  border: 0.02667rem solid #fff;
}
</style>

