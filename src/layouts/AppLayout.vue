<template>
  <div class="appLayout-wrapper" :style="{ backgroundColor: `${bgColor}` }">
    <Navbar />
    <RouterView />
    <!-- <Dashboard /> -->
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar-component/Navbar.vue";
import Dashboard from "@/components/Dashboard-component/Dashboard.vue";

import { ref, provide, watch  } from "vue";

const isLightMood = ref(true);
const bgColor = ref(`var(--color-set-30)`);

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-30)`;
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
  }
});

provide("isLightMood", isLightMood);
provide("emitAppMood", (eventName, data) => {
  isLightMood.value = data;
});
</script>

<style scoped>
.appLayout-wrapper {
  width: 100%;
  max-width: inherit;
  height: 100%;
  display: flex;
}
</style>
