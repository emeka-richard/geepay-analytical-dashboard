<template>
  <section
    class="dashboard-graph-totalIncome"
    :style="{ backgroundColor: `${bgColor}`, borderColor: `${bdColor}` }"
  >
    <div class="dashboard-graph-totalIncome-top">
      <div class="total-income-svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z"
            fill="#34CAA5"
          />
          <path
            d="M21.9701 15.99C21.9701 19.29 19.2901 21.97 15.9901 21.97C13.9501 21.97 12.1601 20.95 11.0801 19.4C15.4401 18.91 18.9101 15.44 19.4001 11.08C20.9501 12.16 21.9701 13.95 21.9701 15.99Z"
            fill="#34CAA5"
          />
          <path
            d="M11.45 9.71003L9.05 8.87003C8.81 8.79003 8.76 8.77003 8.76 8.42003C8.76 8.16003 8.94 7.95003 9.17 7.95003H10.67C10.99 7.95003 11.25 8.24003 11.25 8.60003C11.25 9.01003 11.59 9.35003 12 9.35003C12.41 9.35003 12.75 9.01003 12.75 8.60003C12.75 7.45003 11.86 6.51003 10.75 6.46003V6.41003C10.75 6.00003 10.41 5.66003 10 5.66003C9.59 5.66003 9.25 5.99003 9.25 6.41003V6.46003H9.16C8.11 6.46003 7.25 7.34003 7.25 8.43003C7.25 9.38003 7.67 9.99003 8.54 10.29L10.95 11.13C11.19 11.21 11.24 11.23 11.24 11.58C11.24 11.84 11.06 12.05 10.83 12.05H9.33C9.01 12.05 8.75 11.76 8.75 11.4C8.75 10.99 8.41 10.65 8 10.65C7.59 10.65 7.25 10.99 7.25 11.4C7.25 12.55 8.14 13.49 9.25 13.54V13.6C9.25 14.01 9.59 14.35 10 14.35C10.41 14.35 10.75 14.01 10.75 13.6V13.55H10.84C11.89 13.55 12.75 12.67 12.75 11.58C12.75 10.63 12.32 10.02 11.45 9.71003Z"
            fill="#34CAA5"
          />
        </svg>
      </div>
      <areaChartRises />
    </div>
    <div class="dashboard-graph-totalIncome-middle">
      <p>Total Income</p>
      <h3 :style="{ color: `${figColor}` }">${{ totalIncomeFig.income }}</h3>
    </div>
    <div class="dashboard-graph-totalIncome-bottom">
      <div class="dashboard-graph-totalIncome-bottom-left">
        <!-- <div class="totalIncome-bottom-left-svg-container"> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
          >
            <path
              d="M0.5 5.5L3.5 2.5L5.5 4.5L9.5 0.5"
              stroke="#34CAA5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 0.5H9.5V4"
              stroke="#34CAA5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        <!-- </div> -->
        <p>{{ totalIncomeFig.percent }}%</p>
      </div>
      <div class="dashboard-graph-totalIncome-bottom-right">
        <p>vs. previous month</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted, inject } from "vue";
import areaChartRises from "./areaChart-rises.vue";

const isLightMood = inject("isLightMood");
const bgColor = ref();
const bdColor = ref();
const figColor = ref();

onMounted(()=>{
  if (isLightMood.value === true) {
    bgColor.value = `var(--color-set-2)`;
    bdColor.value = `var(--color-set-3)`;
    figColor.value = `var(--color-set-10)`;
  } else if (isLightMood.value === false) {
    bgColor.value = `var(--color-set-31)`;
    bdColor.value = `var(--color-set-32)`;
    figColor.value = `var(--color-set-7)`;
  }
})

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

const totalIncomeFig = {
  income: "350.000",
  percent: "23,5",
};
</script>

<style scoped>
.dashboard-graph-totalIncome {
  width: 100%;
  min-width: 240px;
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
.dashboard-graph-totalIncome-top,
.dashboard-graph-totalIncome-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.dashboard-graph-totalIncome-middle {
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
.dashboard-graph-totalIncome-bottom {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.dashboard-graph-totalIncome-bottom-left,
.dashboard-graph-totalIncome-bottom-right {
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-graph-totalIncome-bottom-left {
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 1000px;
  background: rgba(52, 202, 165, 0.12);

  p {
    color: #34caa5;

    /* Body Text/Plus Jakarta Sans/Medium/12 */
    font-family: "Plus Jakarta Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
  }
}
.dashboard-graph-totalIncome-bottom-right p {
  color: #606060;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.total-income-svg-container {
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
