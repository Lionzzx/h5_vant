<template>
  <div class="page">
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
  }
}
</script>
