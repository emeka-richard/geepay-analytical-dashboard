<template>
  <section class="dashboard-wrapper">
    <dashboardHeader />
    <section class="dashboard-view-container">
      <dashboardSaleTrend />
      <dashboardGraphsTrend />
      <dashboardOrderList />
      <dashboardShowPlatform />
    </section>
  </section>
</template>

<script setup>
import dashboardHeader from "@/components/Dashboard-component/Dashboard-Header-component/dashboard-header.vue";
import dashboardSaleTrend from "./dashboard-saleTrend.vue";
import dashboardGraphsTrend from "@/components/Dashboard-component/Dashboard-GraphTrend-component/dashboard-graphsTrend.vue";
import dashboardOrderList from "./Dashboard-OrderList-component/dashboard-orderList.vue";
import dashboardShowPlatform from "@/components/Dashboard-component/Dashboard-Platform-component/dashboard-showPlatform.vue";
import { onMounted, onBeforeUnmount } from "vue";
import { useScrollPositionValue } from "../../pinia-store/scrollPositionStore";
const scrollStore = useScrollPositionValue();

onMounted(()=>{
  window.addEventListener("scroll", () => {
    scrollStore.setScrollPosition(window.scrollY);
  });

})

onBeforeUnmount(()=>{
  window.removeEventListener("scroll", () => {
    scrollStore.setScrollPosition(window.scrollY);
  });
})

</script>

<style scoped>
.dashboard-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0;
}
.dashboard-view-container {
  width: 100%;
  padding: 1.25rem;
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-columns: 1.5fr 1fr; */
  gap: 20px;
}

/* @media screen and (max-width: 768px) {
  .dashboard-wrapper {
    padding-top: 5.125rem;
  }
}
@media screen and (min-width: 769px) {
  .dashboard-wrapper {
    padding-left: 5rem;
  }
} */
@media screen and (min-width: 1300px) {
  .dashboard-wrapper {
    .dashboard-view-container {
      width: 100%;
      padding: 1.25rem;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 20px;
    }
  }
}
/* @media screen and (min-width: 769px) {
  .dashboard-wrapper {
    .dashboard-view-container {
      width: 100%;
      padding: 1.25rem;
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 20px;
    }
  }
} */
</style>
