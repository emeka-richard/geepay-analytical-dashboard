<template>
  <section
    class="dashboard-graph-totalOrder"
    :style="{ backgroundColor: `${bgColor}`, borderColor: `${bdColor}` }"
  >
    <div class="dashboard-graph-totalOrder-top">
      <div class="total-order-svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M19.3499 5.65995L13.0599 2.27C12.3999 1.91 11.5999 1.91 10.9299 2.27L4.63992 5.65995C4.17992 5.90995 3.8999 6.39998 3.8999 6.93998C3.8999 7.47998 4.17992 7.96995 4.63992 8.21995L10.9299 11.61C11.2599 11.79 11.6299 11.88 11.9899 11.88C12.3499 11.88 12.7199 11.79 13.0499 11.61L19.3399 8.21995C19.7999 7.96995 20.0799 7.47998 20.0799 6.93998C20.0999 6.39998 19.8099 5.90995 19.3499 5.65995Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M9.90021 12.79L4.0502 9.86001C3.6002 9.63001 3.08021 9.66001 2.65021 9.92001C2.22021 10.18 1.97021 10.64 1.97021 11.14V16.67C1.97021 17.63 2.5002 18.49 3.3602 18.92L9.21021 21.8401C9.4102 21.9401 9.63022 21.99 9.85022 21.99C10.1102 21.99 10.3702 21.92 10.6002 21.77C11.0302 21.51 11.2802 21.05 11.2802 20.55V15.02C11.2902 14.08 10.7602 13.22 9.90021 12.79Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M22.03 11.15V15.74C22.02 15.73 22.01 15.71 22 15.7C22 15.69 21.99 15.68 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.82 21.11 15.03 21.37 15.26 21.61L14.79 21.85C14.59 21.95 14.37 22 14.15 22C13.89 22 13.63 21.93 13.39 21.78C12.97 21.52 12.71 21.06 12.71 20.56V15.04C12.71 14.08 13.24 13.22 14.1 12.79L19.95 9.87C20.4 9.64 20.92 9.66 21.35 9.93C21.77 10.19 22.03 10.65 22.03 11.15Z"
            fill="#34CAA5"
          />
          <path
            d="M21.98 15.67C21.16 14.66 19.91 14.02 18.5 14.02C17.44 14.02 16.46 14.39 15.69 15.01C14.65 15.83 14 17.1 14 18.52C14 19.36 14.24 20.16 14.65 20.84C14.92 21.29 15.26 21.68 15.66 22H15.67C16.44 22.64 17.43 23.02 18.5 23.02C19.64 23.02 20.67 22.6 21.46 21.9C21.81 21.6 22.11 21.24 22.35 20.84C22.76 20.16 23 19.36 23 18.52C23 17.44 22.62 16.44 21.98 15.67ZM20.76 17.96L18.36 20.18C18.22 20.31 18.03 20.38 17.85 20.38C17.66 20.38 17.47 20.31 17.32 20.16L16.21 19.05C15.92 18.76 15.92 18.28 16.21 17.99C16.5 17.7 16.98 17.7 17.27 17.99L17.87 18.59L19.74 16.86C20.04 16.58 20.52 16.6 20.8 16.9C21.09 17.21 21.07 17.68 20.76 17.96Z"
            fill="#34CAA5"
          />
        </svg>
      </div>
      <areaChartRises />
    </div>
    <div class="dashboard-graph-totalOrder-middle">
      <p>Total Order</p>
      <h3 :style="{ color: `${figColor}` }">{{ totalOrderFig.order }}</h3>
    </div>
    <div class="dashboard-graph-totalOrder-bottom">
      <div class="dashboard-graph-totalOrder-bottom-left">
        <!-- <div class="totalOrder-bottom-left-svg-container"> -->
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
        <p>{{ totalOrderFig.percent }}%</p>
      </div>
      <div class="dashboard-graph-totalOrder-bottom-right">
        <p>vs. previous month</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect, watch, onMounted, inject } from "vue";
import areaChartRises from "./areaChart-rises.vue";

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

const totalOrderFig = {
  order: 350,
  percent: "23,5",
};
</script>

<style scoped>
.dashboard-graph-totalOrder {
  width: 100%;
  /* max-width: 239px; */
  /* height: 179px; */
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 14px;
  border: 1px solid #edf2f7;
  background: #fff;
  align-items: flex-start;
  gap: 10px;
}
.dashboard-graph-totalOrder-top,
.dashboard-graph-totalOrder-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.dashboard-graph-totalOrder-middle {
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
.dashboard-graph-totalOrder-bottom {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}
.dashboard-graph-totalOrder-bottom-left,
.dashboard-graph-totalOrder-bottom-right {
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-graph-totalOrder-bottom-left {
  border-radius: 1000px;
  background: rgba(52, 202, 165, 0.12);
  padding: 4px 8px;
  justify-content: flex-start;
  gap: 4px;

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
.dashboard-graph-totalOrder-bottom-right p {
  color: #606060;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.total-order-svg-container {
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
