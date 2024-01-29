<template>
  <section class="dashboard-salesTrend-wrapper">
    <section class="dashboard-salesTrend-container">
      <h4>Sales Trends</h4>
      <div class="dashboard-sales-sorting-container">
        <label for="sales-sorting-range">Sort by:</label>
        <div class="sorting-range-and-svg-container">
          <select id="sales-sorting-range" v-model="selectedOption">
            <option
              v-for="option in sortRange"
              :key="option.id"
              :value="option.id"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
      </div>
    </section>
    <div id="salesTrend-graph" class="dashboard-salesTrend-graph"></div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const selectedOption = ref("weekly");

const sortRange = [
  {
    id: "daily",
    name: "Daily",
  },
  {
    id: "weekly",
    name: "Weekly",
  },
  {
    id: "monthly",
    name: "Monthly",
  },
  {
    id: "yearly",
    name: "Yearly",
  },
];
</script>

<style scoped>
.dashboard-salesTrend-wrapper {
  width: 100%;
  /* max-width: 806px; */
  height: 374px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid #edf2f7;
  background: #fff;
  padding: 20px;
}
.dashboard-salesTrend-container {
  display: flex;
  width: 100%;
  /* max-width: 766px; */
  justify-content: space-between;
  align-items: center;
}
.dashboard-sales-sorting-container {
  display: flex;
  height: 37px;
  align-items: center;
  gap: 10px;
}

#sales-sorting-range {
  outline: none;
  border: none;
  color: #3a3f51;
  font-family: "Plus Jakarta Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}
#sales-sorting-range option {
  color: #3a3f51;
  font-family: "Plus Jakarta Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
}
.sorting-range-and-svg-container {
  display: flex;
  padding: 6px 12px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid #e1dfdf;
  background: #fff;

  /* display: flex;
  padding: 6px 12px;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid #e1dfdf;
  background: #fff; */
}
</style>
