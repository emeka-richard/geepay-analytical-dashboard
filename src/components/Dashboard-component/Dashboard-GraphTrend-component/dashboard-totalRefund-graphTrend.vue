<template>
  <section
    class="dashboard-graph-totalRefund"
    :style="{ backgroundColor: `${bgColor}`, borderColor: `${bdColor}` }"
  >
    <div class="dashboard-graph-totalRefund-top">
      <div class="total-refund-svg-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.57821 2.91194C4.8091 3.55436 2.75 6.03342 2.75 9C2.75 9.41421 2.41421 9.75 2 9.75C1.58579 9.75 1.25 9.41421 1.25 9C1.25 4.71579 4.71579 1.25 9 1.25C9.2702 1.25 9.51952 1.39534 9.65265 1.63047C9.78578 1.8656 9.78214 2.15417 9.64312 2.38587L8.59313 4.13587C8.38002 4.49105 7.91933 4.60623 7.56414 4.39312C7.20896 4.18001 7.09378 3.71932 7.30689 3.36413L7.57821 2.91194ZM22 14.25C22.4142 14.25 22.75 14.5858 22.75 15C22.75 19.2842 19.2842 22.75 15 22.75C14.7298 22.75 14.4805 22.6047 14.3474 22.3695C14.2142 22.1344 14.2179 21.8458 14.3569 21.6141L15.4069 19.8641C15.62 19.5089 16.0807 19.3938 16.4359 19.6069C16.791 19.82 16.9062 20.2807 16.6931 20.6359L16.4218 21.0881C19.1909 20.4456 21.25 17.9666 21.25 15C21.25 14.5858 21.5858 14.25 22 14.25Z"
            fill="#34CAA5"
          />
          <path
            d="M16.4004 8.20996L12.6404 6.17996C12.2404 5.96996 11.7704 5.96996 11.3704 6.17996L7.61038 8.20996C7.34038 8.35996 7.17041 8.64996 7.17041 8.97996C7.17041 9.30996 7.34038 9.59996 7.61038 9.74996L11.3704 11.78C11.5704 11.89 11.7904 11.94 12.0104 11.94C12.2304 11.94 12.4504 11.89 12.6504 11.78L16.4104 9.74996C16.6804 9.59996 16.8504 9.30996 16.8504 8.97996C16.8404 8.64996 16.6704 8.35996 16.4004 8.20996Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M10.7402 12.4699L7.24023 10.7199C6.97023 10.5899 6.66024 10.5999 6.40024 10.7599C6.14024 10.9199 5.99023 11.1899 5.99023 11.4899V14.7999C5.99023 15.3699 6.31025 15.8899 6.82025 16.1399L10.3203 17.8899C10.4403 17.9499 10.5702 17.9799 10.7102 17.9799C10.8702 17.9799 11.0202 17.9399 11.1602 17.8499C11.4202 17.6899 11.5703 17.4199 11.5703 17.1199V13.8099C11.5703 13.2399 11.2602 12.7299 10.7402 12.4699Z"
            fill="#34CAA5"
          />
          <path
            opacity="0.4"
            d="M17.5904 10.7599C17.3304 10.5999 17.0204 10.5899 16.7504 10.7199L13.2504 12.4699C12.7404 12.7299 12.4204 13.2399 12.4204 13.8099V17.1199C12.4204 17.4199 12.5704 17.6899 12.8304 17.8499C12.9704 17.9399 13.1204 17.9799 13.2804 17.9799C13.4104 17.9799 13.5404 17.9499 13.6704 17.8899L17.1704 16.1399C17.6804 15.8799 18.0004 15.3699 18.0004 14.7999V11.4899C18.0004 11.1899 17.8504 10.9199 17.5904 10.7599Z"
            fill="#34CAA5"
          />
        </svg>
      </div>
      <areaChartFalls />
    </div>
    <div class="dashboard-graph-totalRefund-middle">
      <p>Total Refund</p>
      <h3 :style="{ color: `${figColor}` }">{{ totalRefundFig.refund }}</h3>
    </div>
    <div class="dashboard-graph-totalRefund-bottom">
      <div class="dashboard-graph-totalRefund-bottom-left">
        <!-- <div class="totalRefund-bottom-left-svg-container"> -->
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
        <!-- </div> -->
        <p>{{ totalRefundFig.percent }}%</p>
      </div>
      <div class="dashboard-graph-totalRefund-bottom-right">
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

const totalRefundFig = {
  refund: 270,
  percent: "23,5",
};
</script>

<style scoped>
.dashboard-graph-totalRefund {
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
.dashboard-graph-totalRefund-top,
.dashboard-graph-totalRefund-bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.dashboard-graph-totalRefund-middle {
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
.dashboard-graph-totalRefund-bottom {
  width: 100%;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  gap: 10px;
}
.dashboard-graph-totalRefund-bottom-left,
.dashboard-graph-totalRefund-bottom-right {
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dashboard-graph-totalRefund-bottom-left {
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
.dashboard-graph-totalRefund-bottom-right p {
  color: #606060;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.total-refund-svg-container {
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
