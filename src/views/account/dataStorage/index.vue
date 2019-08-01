<template>
  <div>
    <nav-bar title="资料情况" has-left></nav-bar>
    <van-collapse v-model="activeNames">
      <van-collapse-item v-for="(item, index) in list" :key="index" :title="item.title + ' (' + item.fileNum + ')'" :name="index">
        <div v-for="(item2, index2) in item.items" :key="index2" class="collapse-item">
          <span>{{ item2.name }}</span
          ><span>× {{ item2.num }}</span>
        </div></van-collapse-item
      >
    </van-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserModule from '@/store/modules/user';
import { Collapse, CollapseItem } from 'vant';
import NavBar from '@/components/NavBar/index.vue';

@Component({
  components: {
    NavBar,
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem
  }
})
export default class DataStorage extends Vue {
  private activeNames = ['1'];
  private list: any = [];

  async getFileDetail() {
    const resp = await this.$storeApi.fileDetail({}, true);
    let temMap: any = {};
    resp.forEach((v: any, i: any) => {
      if (!temMap[v.company_id]) {
        temMap[v.company_id] = {
          title: v.companyname,
          fileNum: v.file_num,
          id: v.company_id,
          items: [{ name: v.customer_file_name, num: v.file_num }]
        };
      } else {
        temMap[v.company_id].fileNum += v.file_num;
        temMap[v.company_id].items.push({ name: v.customer_file_name, num: v.file_num });
      }
    });
    for (let key in temMap) {
      this.list.push(temMap[key]);
    }
  }
  async created() {
    this.getFileDetail();
  }
}
</script>

<style>
.van-collapse-item__title {
  background: #f7f5f5;
}
</style>

<style lang="scss" scoped>
.collapse-item {
  display: flex;
  justify-content: space-between;
  padding: 4px 2px;
}
</style>

