<template>
  <div class="page">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Swipe, SwipeItem } from "vant";
import TestApi from "@/services/testApi";
import { AppModule } from "@/store/modules/app";

@Component({
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
})
export default class Home extends Vue {
  async created() {}
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  background: blue;
}
</style>

