<template>
  <div>车市</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Route } from "vue-router";
import userModule from "@/store/modules/user";

@Component({
  beforeRouteEnter(to: Route, from: Route, next: (r: any) => void) {
    next("/commercial");
  }
})
export default class Index extends Vue {}
</script>
<style>
</style>

<style lang="scss" scoped>
</style>

