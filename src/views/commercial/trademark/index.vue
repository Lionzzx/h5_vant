<template>
  <div class="page">
    <div class="page-search">
      <input />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class trademark extends Vue {
  handleSearch() {}

  async created() {
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  background: url('http://park.zgcfo.com/static/abnormal_bg.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-search {
    width: 70vw;
    // height: 50px;
    border-radius: 12px;
    margin-bottom: 100px;
    overflow: hidden;
    font-size: 16px;
    background: hsla(0, 0%, 100%, 0.16);
  }
}
</style>

