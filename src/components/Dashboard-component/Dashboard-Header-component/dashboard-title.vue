<template>
  <div class="dashboard-header-title-container">
    <h2 :style="{ color: `${h1Color}` }">{{ componentName }}</h2>
  </div>
</template>

<script setup>
import { ref, inject, watch } from "vue";

const componentName = "Dashboard";

const h1Color = ref(`var(--color-set-11)`);
const isLightMood = inject("isLightMood");

watch(isLightMood, (currentAppMood, prevAppMood) => {
  if (currentAppMood === true) {
    h1Color.value = `var(--color-set-11)`;
  } else {
    h1Color.value = `var(--color-set-7)`;
  }
  return;
});
</script>

<style scoped>
.dashboard-header-title-container {
  /* width: 50%; */
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h2 {
    font-family: "Plus Jakarta Sans";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
  }
}

@media screen and (min-width: 769px) {
  .dashboard-header-title-container {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h2 {
      font-family: "Plus Jakarta Sans";
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.75rem;
    }
  }
}
</style>
