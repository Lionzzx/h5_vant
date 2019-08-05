<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view :class="{ blur: isLoading }" />
    <!-- </keep-alive> -->
    <loading :show="isLoading"></loading>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Loading from '@/components/Loading/index.vue';
import AppModule from '@/store/modules/app';
@Component({
  components: {
    Loading
  }
})
export default class App extends Vue {
  get isLoading() {
    return AppModule.loading;
  }
}
</script>

<style lang="scss">
.blur {
  filter: blur(30px);
}

</style>
