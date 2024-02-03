<template>
  <div class="appLayout-wrapper" :style="{ backgroundColor: `${bgColor}` }">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar-component/Navbar.vue";
import Dashboard from "@/components/Dashboard-component/Dashboard.vue";

import { ref, provide, watch, onBeforeMount } from "vue";

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
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 769px) {
  .appLayout-wrapper {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
  }
}
</style>
