<template>
  <div class="detail">
    <van-cell-group>
      <van-cell title="开始办理时间" value="内容" />
      <van-cell title="到达拍照" />
      <van-cell title="开始办理时间" value="内容" />
      <van-cell title="结束办理拍照" />
      <van-cell title="外勤用时" value="内容" />
      <van-cell title="外勤地点" value="内容" />
      <van-cell title="外勤内容" value="内容" />
      <van-cell title="外勤类别" value="内容" />
      <van-cell title="外勤总结" value="内容" />
    </van-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserModule from '@/store/modules/user';
import { Cell, CellGroup } from 'vant';
@Component({
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  }
})
export default class Detail extends Vue {}
</script>


<style lang="scss" scoped>
</style>
