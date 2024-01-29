<template>
  <div class="dashboard-graphsTrendwrapper">
    <dashboardTotalOrderGraphTrend />
    <dashboardTotalRefundGraphTrend />
    <dashboardAverageSalesGraphTrend />
    <dashboardTotalIncomeGraphTrend />
  </div>
</template>

<script setup>
import dashboardTotalOrderGraphTrend from './dashboard-totalOrder-graphTrend.vue';
import dashboardTotalRefundGraphTrend from './dashboard-totalRefund-graphTrend.vue';
import dashboardAverageSalesGraphTrend from './dashboard-averageSales-graphTrend.vue';
import dashboardTotalIncomeGraphTrend from './dashboard-totalIncome-graphTrend.vue'
</script>

<style scoped>
.dashboard-graphsTrendwrapper {
  width: 100%;
  /* max-width: 488px; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
