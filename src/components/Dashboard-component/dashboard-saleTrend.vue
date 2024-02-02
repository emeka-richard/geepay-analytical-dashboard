<template>
  <section
    class="dashboard-salesTrend-wrapper"
    :style="{ backgroundColor: `${bgColor}`, borderColor: `${bdColor}` }"
  >
    <section class="dashboard-salesTrend-container">
      <h4 :style="{ color: `${titleColor}` }">Sales Trends</h4>
      <div class="dashboard-sales-sorting-container">
        <label for="sales-sorting-range">Sort by:</label>
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
        height="290"
        width="100%"
        type="bar"
        :options="chartOptions"
        :series="chartOptions.series"
      ></apexchart>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted, inject } from "vue";
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

// const chartRendered = ()=> {
//   VueApexCharts.exec(
//     chartRef.value.uid,
//     "on",
//     "dataPointMouseEnter",
//     (event, chartContext, config) => {
//       const hoverColor = "#ffcc00"; // Set your desired hover color
//       // Change the bar color on mouse enter
//       chartContext.updateOptions({
//         plotOptions: {
//           bar: {
//             colors: [hoverColor],
//           },
//         },
//       });
//     }
//   );

//   VueApexCharts.exec(chartRef.value.uid, 'on', 'dataPointMouseLeave', (event, chartContext, config) => {
//         // Revert to the original color on mouse leave
//         chartContext.updateOptions({
//           plotOptions: {
//             bar: {
//               colors: undefined, // Revert to the default colors
//             },
//           },
//         });
//       });
// };

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
</script>

<style scoped>
.dashboard-salesTrend-wrapper {
  width: 100%;
  height: 100%;
  max-width: 1006px;
  max-height: 374px;
  flex-shrink: 0;
  border-radius: 14px;
  border: 1px solid;
  background: #fff;
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
.dashboard-salesTrend-container > h4 {
  color: #26282c;
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
}
.dashboard-salesTrend-graph {
  width: 100%;
  height: 280px;
  /* background-color: #525252; */
  box-sizing: border-box;
  -webkit-column-break-inside: avoid;
}
</style>
