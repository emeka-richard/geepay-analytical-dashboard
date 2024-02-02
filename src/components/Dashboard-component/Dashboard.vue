<template>
  <section class="dashboard-wrapper">
    <dashboardHeader />
    <section class="dashboard-view-container">
        <dashboardSaleTrend />
        <dashboardGraphsTrend />
        <dashboardOrderList />
        <dashboardShowPlatform />
        <!-- <dashboardAreaChart /> -->
    </section>
  </section>
</template>

<script setup>
import dashboardHeader from "@/components/Dashboard-component/Dashboard-Header-component/dashboard-header.vue";
import dashboardSaleTrend from "./dashboard-saleTrend.vue";
import dashboardGraphsTrend from "@/components/Dashboard-component/Dashboard-GraphTrend-component/dashboard-graphsTrend.vue";
import dashboardOrderList from "./dashboard-orderList.vue";
import dashboardShowPlatform from "@/components/Dashboard-component/Dashboard-Platform-component/dashboard-showPlatform.vue";
// import dashboardAreaChart from "./dashboard-areaChart.vue";
</script>

<style scoped>
.dashboard-wrapper {
  width: 100%;
  /* max-width: 1440px; */
  height: 100%;
  /* background-color: var(--color-set-1); */
}
.dashboard-view-container {
  padding: 1.25rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
}
.dashboard-view-trend-section,
.dashboard-view-orderANDplatform-section {
  width: 100%;
  display: flex;
}
</style>
