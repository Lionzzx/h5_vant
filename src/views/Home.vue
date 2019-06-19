<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png" />
    <van-button type="danger">警告按钮</van-button>
    <HelloWorld class="van-hairline--surround"
                msg="van-ellipsis Welcome to Your Vue.js + TypeScript App" />

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "vant";

import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
    [Button.name]: Button
  }
})
export default class Home extends Vue {}
</script>
