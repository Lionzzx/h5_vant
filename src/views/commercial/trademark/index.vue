<template>
  <div class="page">
    <!-- <div clas="page-search x-fl">
      <input />
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Home extends Vue {
  async created() {}
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  background: url('http://park.zgcfo.com/static/abnormal_bg.png');
  background-size: 100% 100%;
  &-search {
    width: 70vw;
    height: 50px;
    background: hsla(0, 0%, 100%, 0.16);
  }
}
</style>

