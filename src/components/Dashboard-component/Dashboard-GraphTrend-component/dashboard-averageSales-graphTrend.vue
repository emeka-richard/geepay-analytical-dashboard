<template>
  <section
    class="dashboard-graph-averageSales"
    :style="{ backgroundColor: `${bgColor}`, borderColor: `${bdColor}`}"
  >
    <div class="dashboard-graph-averageSales-top">
      <div class="average-sales-svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z"
            fill="#34CAA5"
          />
          <path
            d="M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.92999 21.55 6.50999C21.68 4.73999 20.33 3.3 18.56 3.3H6.28999C6.18999 2.86 5.98999 2.44 5.67999 2.09C5.18999 1.56 4.49 1.25 3.77 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74001C4.05001 2.75 4.34 2.88001 4.55 3.10001C4.76 3.33001 4.86 3.63 4.84 3.94Z"
            fill="#34CAA5"
          />
          <path
            d="M20.5101 8.75H5.17006C4.75006 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.53 5.21006 17 6.92006 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.60001C21.3401 9.14001 20.9801 8.75 20.5101 8.75Z"
            fill="#34CAA5"
          />
        </svg>
      </div>
      <areaChartFalls />
    </div>
    <div class="dashboard-graph-averageSales-middle">
      <p>Average Sales</p>
      <h3 :style="{ color: `${figColor}` }">{{ averageSalesFig.sales }}</h3>
    </div>
    <div class="dashboard-graph-averageSales-bottom">
      <div class="dashboard-graph-averageSales-bottom-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M0.5 0.5L3.5 3.5L5.5 1.5L9.5 5.5"
            stroke="#ED544E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 5.5H9.5V2"
            stroke="#ED544E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>{{ averageSalesFig.percent }}%</p>
      </div>
      <div class="dashboard-graph-averageSales-bottom-right">
        <p>vs. previous month</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted, inject } from "vue";
import areaChartFalls from "./areaChart-falls.vue";

const isLightMood = inject("isLightMood");
const bgColor = ref(`var(--color-set-2)`);
const bdColor = ref(`var(--color-set-3)`);
const figColor = ref(`var(--color-set-10)`);

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-2)`;
    bdColor.value = `var(--color-set-3)`;
    figColor.value = `var(--color-set-10)`;
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    figColor.value = `var(--color-set-7)`;
  }
});

const averageSalesFig = {
  sales: 1567,
  percent: "23,5",
};
</script>

<style scoped>
.dashboard-graph-averageSales {
  width: 100%;
  height: 179px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid #edf2f7;
  background: #fff;
  align-items: flex-start;
  gap: 10px;
}
.dashboard-graph-averageSales-top,
.dashboard-graph-averageSales-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.dashboard-graph-averageSales-middle {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  p {
    color: #898989;

    /* Body Text/Plus Jakarta Sans/Medium/18 */
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
  }

  h3 {
    color: #3a3f51;

    /* Heading Text/Plus Jakarta Sans/SemiBold/24 */
    font-family: "Plus Jakarta Sans";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
  }
}
.dashboard-graph-averageSales-bottom {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.dashboard-graph-averageSales-bottom-left,
.dashboard-graph-averageSales-bottom-right {
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-graph-averageSales-bottom-left {
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 1000px;
  background: rgba(237, 84, 78, 0.12);

  p {
    color: #ed544e;

    /* Body Text/Plus Jakarta Sans/Medium/12 */
    font-family: "Plus Jakarta Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
  }
}
.dashboard-graph-averageSales-bottom-right p {
  color: #606060;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.average-sales-svg-container {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e6e6;
  border-radius: 50%;

  &:hover {
    border: 2px solid var(-color-set-29);
    cursor: pointer;
  }
}
</style>
