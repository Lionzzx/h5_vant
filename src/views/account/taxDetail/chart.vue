<script >
import { Bar, Line, mixins } from 'vue-chartjs';
import VueCharts from 'vue-chartjs';

export default {
  extends: Line,
  props: ['chartData', 'options'],
  mixins: [mixins.reactiveProp],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  created() {
  }
};
</script>

<style lang="scss">
.page {
  width: 100vw;
  height: 100%;
  #main {
    width: 100vw;
    height: 280px;
  }
}
</style>

