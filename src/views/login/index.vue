<template>
  <div class="page">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "vant";
import TestApi from "@/services/testApi";
import { AppModule } from "@/store/modules/app";

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class Home extends Vue {
  async created() {
  }
}
</script>
