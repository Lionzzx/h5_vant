<template>
  <div class="page">
    <nav-bar title="商标详情" has-left></nav-bar>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="handleSearch">
      <van-collapse v-model="activeNames">
        <van-collapse-item :title="item.Name" v-for="(item, index) in list" :key="index" :name="index">
          <van-cell title="商标">
            <img slot="right-icon" class="page-img" :src="item.ImageUrl" />
          </van-cell>
          <van-cell title="申请人名称" :value="item.ApplicantCn" />
          <van-cell title="商品/服务" :value="item.IntClsDesc" />
          <van-cell title="代理/办理机构" :value="item.Agent" />
          <van-cell title="商标状态" :value="item.FlowStatusDesc" />
        </van-collapse-item>
      </van-collapse>
    </van-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { List, Cell, Collapse, CollapseItem } from 'vant';
import navBar from '@/components/NavBar/index.vue';

@Component({
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem,
    navBar
  }
})
export default class trademarkDetail extends Vue {
  private list = [];
  private activeNames = [];
  private loading = false;
  private finished = false;
  private page: number = 1;
  private pageSize: number = 15;

  async handleSearch() {
    this.loading = true;
    try {
      let {
        data: { page, result }
      } = await this.$storeApi.getTrademarkBySearchKey({
        searchKey: this.$route.query.name || '',
        page: this.page,
        pageSize: this.pageSize
      });
      this.page += 1;
      this.list = this.list.concat(result);
      this.finished = page.TotalRecords < this.page * this.pageSize;
    } catch (error) {
    } finally {
      this.loading = false;
    }
  }
  async created() {}
}
</script>

<style lang="scss" scoped>
.page {
  &-img {
    height: 60px;
    width: 60px;
  }
}
</style>

