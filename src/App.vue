<template>
  <div id="app">
    <router-view :class="{ blur: isLoading }" />
    <loading :show="isLoading"></loading>
  </div>
</template>

<script>
import Loading from '@/components/Loading/x-loading';
import { AppModule } from '@/store/modules/app';
export default {
  components: {
    Loading
  },
  data() {
    return {
    }
  },
  computed: {
    isLoading() {
      return AppModule.loading;
    }
  },
};
</script>

<style lang="scss">
.blur {
  -webkit-filter: blur(5px); /* Chrome, Opera */
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(30upx);
}
</style>
