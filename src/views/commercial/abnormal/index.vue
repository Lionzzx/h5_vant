<template>
  <div class="page">
    <div @click="navBack" class="page-back">返回</div>
    <div class="page-search">
      <div class="page-search-input"><input v-model="searchValue" class="input" /></div>
      <div @click="handleSearch" class="page-search-button"><van-icon color="#fff" name="search"></van-icon></div>
    </div>

    <popup @hidePopup="hidePopup" bgColor="#fff" @ :title="searchValue" :show="popup">
      <div class="page__body">
        <div class="tab">
          <div
            v-for="(item, index) in tabs"
            :key="index"
            @click="handleTab(index)"
            :class="{ active: index == tabIndex }"
            class="tab__item"
          >
            {{ item.title }}
          </div>
        </div>
        <div class="contents">
          <template v-if="tabIndex == 0">
            <div v-for="(item, index) in businessList" :key="index" class="contents-item">
              <div class="disc">
                <div class="disc_item">列入经营异常名录原因：{{ item.abnormal_cause }}</div>
                <div class="disc_item">决定机关：{{ item.office }}</div>
                <div class="disc_item">列入日期：{{ item.abnormal_date }}</div>
                <div class="disc_item">移出日期：{{ item.remove_date }}</div>
              </div>
            </div>
          </template>
          <template v-if="tabIndex == 1">
            <div v-for="(item, index) in etaxList" :key="index" class="contents-item">
              <div class="disc">
                <div class="disc_item">税种：{{ item['zsxmmc'] }}</div>
                <div class="disc_item">所属期始：{{ item['skssqq'] }}</div>
                <div class="disc_item">所属期止：{{ item['skssqz'] }}</div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Icon } from 'vant';
import Popup from '@/components/Popup/index.vue';
import { formatDate } from '@/utils/index';

@Component({
  components: {
    [Icon.name]: Icon,
    Popup
  }
})
export default class abnormal extends Vue {
  private searchValue: string = '';
  private result: string = '';
  private popup: boolean = false;
  private businessList = [];
  private tabs = [
    {
      title: '工商异常信息'
    },
    {
      title: '税务异常信息'
    }
  ];
  private tabIndex = [];
  private etaxList = [];
  async handleSearch() {
    if (!this.searchValue) {
      return this.$toast('请输入企业名称');
    }
    try {
      let resp = await this.$storeApi.abnormalBusiness({ componyName: this.searchValue }, true);
      this.businessList = JSON.parse(resp).data.abnormalList.map((v: any) => {
        if (v.remove_date) {
          v.remove_date = formatDate(v.remove_date);
        }
        if (v.abnormal_date) {
          v.abnormal_date = formatDate(v.abnormal_date);
        }
        return v;
      });
    } catch (error) {
    } finally {
      this.popup = true;
    }
  }
  navBack() {
    this.$router.go(-1);
  }
  handleTab(index: any) {
    this.tabIndex = index;
    if (index == 1) {
      this.getEtax(this.searchValue);
    }
  }
  hidePopup() {
    this.popup = false;
  }
  async getEtax(componyName: any) {
    try {
      const resp = await this.$storeApi.etax({ componyName });
      this.etaxList = JSON.parse(resp).data.taxML.body.taxML.sbqkList.sbqk;
    } catch (e) {
    } finally {
    }
  }
  async created() {}
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.page {
  height: 100vh;
  background: url('http://park.zgcfo.com/static/abnormal_bg.png');
  background-size: 100% 100%;
  &-back {
    position: absolute;
    width: 62px;
    height: 25px;
    text-align: center;
    background: #fff;
    -webkit-box-shadow: 0px 0.5px 0px 0px $theme-color;
    box-shadow: 0px 0.5px 0px 0px $theme-color;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    font-size: 9px;
    font-weight: 500;
    right: 16px;
    top: 118px;
    color: $theme-color;
    line-height: 25px;
  }
  &-search {
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 184px;
    display: flex;
    border-radius: 3px;
    width: 341px;
    height: 39px;
    background: #fff;
    &-input {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 15px;
      flex: 1;
      height: 100%;
      line-height: 39px;
    }
    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 52px;
      height: 39px;
      background: linear-gradient(90deg, $theme-color, $primary-color);
      border-radius: 0 3px 3px 0;
    }

    .input {
      width: 100%;
      border: none;
      margin: 10px;
    }
  }
  &__body {
    width: 341px;

    .tab {
      display: flex;
      background: #ffffff;
      border-bottom: 1px solid rgba(93, 72, 67, 0.1);
      border-radius: 5px 5px 0 0;

      &__item {
        position: relative;
        flex: 1;
        font-size: 14px;
        text-align: center;
        height: 33px;
        line-height: 33px;
        font-weight: 600;
        color: rgba(44, 34, 34, 1);
      }

      .active {
        color: #e21616;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0 auto;
          width: 14px;
          height: 2px;
          background: rgba(226, 22, 22, 1);
          border-radius: 2px;
        }
      }
    }

    .contents {
      width: 100%;
      height: 340px;
      background: #ffffff;
      box-shadow: 0px -1px 0px 0px rgba(93, 72, 67, 0.16);
      border-radius: 0 0 11px 11px;
      overflow-y: scroll;

      &-item {
        @include flex-center();
        position: relative;
        padding-top: 1px;
        margin-top: 5px;
        min-height: 87px;
        width: 100%;
        border-bottom: 1px solid rgba(93, 72, 67, 0.16);

        .title {
          margin: 8px 0;
          font-size: 25px;
          font-weight: 700;
          color: rgba(44, 34, 34, 1);
          line-height: 40px;
        }

        .disc {
          font-size: 12px;
          font-weight: 400;
          color: rgba(125, 131, 134, 1);
          width: 100%;
          padding-left: 4px;

          &_item {
            margin: 0 0 10px 0;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>

