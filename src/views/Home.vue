<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <van-button type="danger">警告按钮</van-button>
    <HelloWorld class="van-hairline--surround"
                msg="van-ellipsis" />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "vant";
import TestApi from "@/services/testApi";
import HelloWorld from "@/components/HelloWorld.vue";
import { AppModule } from "@/store/modules/app";

@Component({
  components: {
    HelloWorld,
    [Button.name]: Button
  }
})
export default class Home extends Vue {
  async created() {
    const [err,data] = await TestApi.postLogin({
      username: "admin",
      password: "123456"
    });
  }
}
</script>
