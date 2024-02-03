<template>
  <div class="dashboard-orderList-divSection">
    <section
    class="dashboard-salesTrend-wrapper"
    :style="{ backgroundColor: `${bgColor}`, borderColor: `${bdColor}` }"
  >
    <section class="dashboard-salesTrend-container">
      <h4 :style="{ color: `${titleColor}` }">Sales Trends</h4>
      <div class="dashboard-sales-sorting-container">
        <label :style="{ color: `${titleColor}` }" for="sales-sorting-range">Sort by:</label>
        <div
          class="sorting-range-and-svg-container"
          :style="{ backgroundColor: `${bgColor}`, borderColor: `${bdColor}` }"
        >
          <select
            id="sales-sorting-range"
            v-model="selectedOption"
            :style="{
              backgroundColor: `${bgColor}`,
              borderColor: `${bdColor}`,
              color: `${titleColor}`,
            }"
          >
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
    <div id="salesTrend-graph" class="dashboard-salesTrend-graph">
      <apexchart
        ref="chart"
        height="280"
        width="100%"
        min-width="600"
        type="bar"
        :options="chartOptions"
        :series="chartOptions.series"
      ></apexchart>
    </div>
  </section>
  </div>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted, onUpdated, inject } from "vue";
import VueApexCharts from 'vue3-apexcharts'

const isLightMood = inject("isLightMood");
const bgColor = ref(`var(--color-set-2)`);
const bdColor = ref(`var(--color-set-3)`);
const titleColor = ref(`var(--color-set-21)`);

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

const chartRef = ref();
const chartOptions = ref({
  colors: [`var(--color-set-4)`],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end",
      columnWidth: "60%",
      barHeight: "80%",
      distributed: true,
      color: `var(--color-set-4)`,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
    position: "buttom",
    total: {
      style: {
        fontSize: "14px",
        fontFamily: "Plus Jakarta Sans",
        fontWeight: 600,
      },
    },
  },
  chart: {
    id: "salesChart",
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ],
  },
  series: [
    {
      name: "Sales Data",
      data: [
        7500, 22000, 3500, 27000, 9000, 43000, 8500, 24000, 33000, 4000, 30000,
        26500,
      ],
    },
  ],
});


watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-2)`;
    bdColor.value = `var(--color-set-3)`;
    titleColor.value = `var(--color-set-21)`;
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    titleColor.value = `var(--color-set-28)`;
  }
});
onUpdated(() => {
  if (isLightMood.value === true) {
    bgColor.value = `var(--color-set-2)`;
    bdColor.value = `var(--color-set-3)`;
    titleColor.value = `var(--color-set-21)`;
  } else if (isLightMood.value === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    titleColor.value = `var(--color-set-28)`;
  }
});
</script>

<style scoped>
.dashboard-orderList-divSection {
  width: 100%;
  height: max-content;
  /* min-width: 700px; */
  overflow-x: auto;
  white-space: nowrap;
}
.dashboard-orderList-divSection::-webkit-scrollbar {
  height: max-content;
}
.dashboard-orderList-divSection::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}
.dashboard-orderList-divSection::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.dashboard-salesTrend-wrapper {
  width: 100%;

  min-width: 650px;
  height: 100%;
  min-width: 600px;
  max-height: 374px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid;
  background: var(--color-set-2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
}
.dashboard-salesTrend-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.dashboard-salesTrend-container h4 {
  color: var(--color-set-11);
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
}
#sales-sorting-range, #sales-sorting-range option {
  color: var(--color-set-10);
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
  border: 1px solid var(--color-set-28);
  background: var(--color-set-2);
}
.dashboard-salesTrend-graph {
  width: 100%;
  height: 280px;
  box-sizing: border-box;
  -webkit-column-break-inside: avoid;
}
</style>
