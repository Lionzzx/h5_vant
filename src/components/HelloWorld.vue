<template>
  <div class="hello">
    {{ hello + msg }}
  </div>
</template>

<script lang="ts">
// https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Vue } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private hello: string = "hello caizexin";

  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  color: $haha;
  width: 700px;
}
</style>
