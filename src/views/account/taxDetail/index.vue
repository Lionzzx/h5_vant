<template>
  <div class="page">
    <div class="canvas"><com class="canvas" :chart-data="chartData" :options="options"></com></div>
  </div>
</template>

<script lang="ts">
import { Bar } from 'vue-chartjs';
import { Component, Vue } from 'vue-property-decorator';
import VueCharts from 'vue-chartjs';
import Com from '@/views/account/taxDetail/chart.vue';

@Component({
  components: {
    Com
  }
})
export default class Index extends Vue {
  public chartData = {
    labels: ['一月', '二月', '三月', '四月', '四月', '四月', '四月', '四月', '四月'],
    backgroundColor: 'blue',
    borderColor: 'green', //曲线边框色,
    steppedLine: true,
    datasets: [
      {
        data: [10, 20, 30, 50, 10, 0],
        backgroundColor: 'red'
      }
    ],
    tooltips: {
      mode: 'index'
    }
  };

  public options = {
    title: {
      display: true,
      text: '状态历史图',
      fontFamily: 'Helvetica',
      padding: 20,
      fontSize: 16,
      lineHeight: 1.2
    },
    tooltips: {
      enabled: false
    },
    legend: false,
    scaleShowGridLines: false,
    scales: {
      xAxes: [
        {
          axisLabel: {
            show: false
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0)', // 隐藏x轴方向轴线
            zeroLineColor: '#666666' // 设置轴颜色
          },
          barPercentage: 0.2, // 设置柱宽度
          ticks: {
            // 设置轴文字字号和色值
            fontSize: 12,
            fontColor: '#666666'
          }
        }
      ]
    }
  };
}
</script>

<style lang="scss">
.page {
  width: 100vw;
  height: 100%;
  .canvas {
    height: 300px;
    width: 100vw;
  }
}
</style>

