<template>
  <div class="page">
    <div class="time-picker time" data-v-af17867c="">
      <div class="time-picker-content" style="display:;">
        <div class="month J-time-month">
          <div class="swipe-item">1月<i class=""></i></div>
          <div class="swipe-item">2月<i class=""></i></div>
          <div class="swipe-item">3月<i class=""></i></div>
          <div class="swipe-item">4月<i class=""></i></div>
          <div class="swipe-item">5月<i class=""></i></div>
          <div class="swipe-item">6月<i class=""></i></div>
          <div class="swipe-item">7月<i class=""></i></div>
          <div class="swipe-item">8月<i class=""></i></div>
          <div class="swipe-item  active J-month-active">9月<i class="active-triangle"></i></div>
          <div class="swipe-item">10月<i class=""></i></div>
          <div class="swipe-item">11月<i class=""></i></div>
          <div class="swipe-item">12月<i class=""></i></div>
        </div>
        <div class="select-time" style="display:;">
          <p><i class="icon-clock"></i><span>2017年</span></p>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="tax-month">
        <p class="number">892.81</p>
        <p class="title">本月纳税（元）</p>
      </div>
      <div class="tax-details">
        <div>
          <p class="title">注：只是展示了主要明细部分，本月纳税为实际纳税金额。</p>
          <ul class="details-list">
            <li class="tax-details-li">
              <div class="title-container">
                <span class="name">未交增值税</span
                ><span class="value"
                  >776.18
                  <!----></span
                >
              </div>
              <!---->
            </li>
            <li class="tax-details-li">
              <div class="title-container"><span class="name">个人所得税</span><span class="value">116.63 </span></div>
              <!---->
            </li>
          </ul>
        </div>
      </div>
      <div class="foot">
        <div class="copy-right">
          <p>Copyright © 2019 八戒财税 版权所有 渝ICP备10202274-4号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class Index extends Vue {}
</script>

<style lang="scss">
.page {
  .time-picker {
    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #dde7f2;
    width: 100%;
    .time-picker-content {
      display: flex;
      position: fixed;
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #dde7f2;
      z-index: 97;
      .month {
        flex: 1;
        white-space: nowrap;
        overflow-x: auto;
        font-size: 14px;
        text-align: center;
        .active {
          color: #ff7d4e;
          position: relative;
        }
        .swipe-item {
          width: 60px;
          height: 100%;
          display: inline-block;
          text-align: center;
        }
      }

      .select-time {
        width: 80px;
        color: #ff7d4e;
        text-align: right;
        font-size: 14px;
        margin-right: 14px;
      }
    }
  }
  .time {
    position: fixed;
    background: #fff;
    z-index: 99;
  }
  .tax-month {
    margin: 0 10px;
    background: url('~@/assets/detail-banner.jpg') no-repeat;
    background-size: cover;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .number {
      font-size: 30px;
      color: #fff;
      text-align: center;
    }
    .title {
      font-size: 16px;
      color: #fff;
    }
  }

  .tax-details {
    margin: 0 10px;
    background-color: #fff;
    padding-top: 20px;
    box-shadow: 0 18px 15px rgba(128, 145, 174, 0.3);
    .title {
      font-size: 12px;
      color: #ff7d4e;
      text-align: center;
    }
    .details-list {
      border-top: dashed 1px #d5e1f0;
      .title-container {
        font-size: 14px;
        display: flex;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        .name {
          display: block;
          width: 50%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #8492a6;
        }

        .value {
          padding-left: 25px;
          color: #8492a6;
        }
      }
    }
  }

  .foot {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    .copy-right {
      height: 50px;
      color: #b5bcc7;
      font-size: 11px;
      text-align: center;
      line-height: 50px;
      width: 100%;
      background: #e7ecf1;

      p :before {
        content: ' ';
        width: 10px;
        height: 10px;
        display: inline-block;
        margin-right: 5px;
        position: relative;
        top: -4px;
        border-bottom: 1px solid #dcdfe4;
      }
    }
  }
}
</style>

