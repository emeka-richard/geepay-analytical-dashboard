<template>
  <section :style="{ backgroundColor: `${bgColor}`}" class="dashboard-showPlatform-wrapper">
    <div class="dashboard-showPlatform-header">
      <h4 :style="{ color: `${headerColor}`}" class="showPlatform-header-title">Top Platform</h4>
      <h4 class="showPlatform-header-seeAll">See All</h4>
    </div>
    <ul class="dashboard-showPlatform-list-container">
      <li
        v-for="platform in platformList"
        :key="platform.id"
        class="dashboard-showPlatform-list-item"
      >
        <h4 :style="{ color: `${platformNameColor}`}" class="platform-name">{{ platform.name }}</h4>
        <div class="showPlatform-progress-bar-container">
          <div
            class="showPlatform-progress-bar-core"
            :style="{
              width: `${platform.progress}%`,
              backgroundColor: `${platform.bgColor}`,
            }"
          ></div>
        </div>
        <div class="showPlatform-amount-percentage">
          <small :style="{ color: `${smallTagColor}`}">${{ platform.amount }}</small>
          <small :style="{ color: `${smallTagColor}`}">+{{ platform.percentage }}%</small>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref, onMounted, inject, watch } from "vue";

const isLightMood = inject('isLightMood')
const bgColor = ref();
const headerColor = ref();
const platformNameColor = ref();
const smallTagColor = ref();

onMounted(()=>{
  if (isLightMood.value === true) {
    bgColor.value = `var(--color-set-2)`;
    headerColor.value = `var(--color-set-11)`;
    platformNameColor.value = `var(--color-set-21)`;
    smallTagColor.value = `var(--color-set-20)`;
  } else if (isLightMood.value === false) {
    bgColor.value = `var(--color-set-31)`;
    headerColor.value = `var(--color-set-7)`;
    platformNameColor.value = `var(--color-set-28)`;
    smallTagColor.value = `var(--color-set-27)`;
  }
})


watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-2)`;
    headerColor.value = `var(--color-set-11)`;
    platformNameColor.value = `var(--color-set-21)`;
    smallTagColor.value = `var(--color-set-20)`;
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
    headerColor.value = `var(--color-set-7)`;
    platformNameColor.value = `var(--color-set-28)`;
    smallTagColor.value = `var(--color-set-27)`;
  }
})


const platformList = [
  {
    id: "book_bazaar",
    name: "Book Bazaar",
    amount: "2,500,000",
    progress: 70,
    percentage: "15",
    bgColor: `var(--color-set-22)`,
  },
  {
    id: "artisan_aisle",
    name: "Artisan Aisle",
    amount: "1,800,000",
    progress: 55,
    percentage: "10",
    bgColor: `var(--color-set-24)`,
  },
  {
    id: "toy_troop",
    name: "Toy Troop",
    amount: "1,200,000",
    progress: 45,
    percentage: "8",
    bgColor: `var(--color-set-25)`,
  },
  {
    id: "xstore",
    name: "Xstore",
    amount: "600,000",
    progress: 30,
    percentage: "5",
    bgColor: `var(--color-set-35)`,
  },
];
</script>

<style scoped>
li {
  list-style-type: none;
}
.dashboard-showPlatform-wrapper {
  width: 100%;
  /* max-width: 488px; */
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 8px;
  background: #fff;
}
.dashboard-showPlatform-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;

  .showPlatform-header-title {
    color: var(--color-set-11);

    /* Body Text/Plus Jakarta Sans/SemiBold/18 */
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 144.444% */
  }

  .showPlatform-header-seeAll {
    color: #34caa5;
    text-align: center;

    /* Body Text/Plus Jakarta Sans/Medium/18 */
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
  }
}
.dashboard-showPlatform-list-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.dashboard-showPlatform-list-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
  .platform-name {
    width: 124.414px;
    color: var(--color-set-21);

    /* Body Text/Plus Jakarta Sans/SemiBold/18 */
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 144.444% */
  }
}
.showPlatform-progress-bar-container {
  width: 100%;
  /* max-width: 452px; */
  height: 12px;
  flex-shrink: 0;
  border-radius: 40px;
  background: var(--Gray-2, #f5f5f5);
  cursor: pointer;

  .showPlatform-progress-bar-core {
    height: inherit;
    border-radius: inherit;
    cursor: pointer;
  }
}
.showPlatform-amount-percentage {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:first-child {
    color: var(--color-set-20);

    /* Body Text/Plus Jakarta Sans/Regular/18 */
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
  }

  &:last-child {
    color: var(--color-set-20);

    /* Body Text/Plus Jakarta Sans/Regular/18 */
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
  }
}
</style>
