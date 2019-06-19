<template>
  <div class="hello">
    {{ hello + msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  private hello: string = 'hello caizexin' 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  color: $haha;
  width: 700px;
}
</style>
