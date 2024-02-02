<template>
  <div class="appLayout-wrapper" :style="{ backgroundColor: `${bgColor}` }">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar-component/Navbar.vue";
import Dashboard from "@/components/Dashboard-component/Dashboard.vue";

import { ref, provide, watch, onBeforeMount  } from "vue";
// import { useAppModeStore } from '../pinia-store/AppModeStore'

// const appModeStore = useAppModeStore()

// console.log(appModeStore.currentMode)

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
  // appModeStore.setMode(data)
  isLightMood.value = data;
  localStorage.setItem("mode", JSON.stringify(data))
});

onBeforeMount(()=>{
  const prevAppMode = localStorage.getItem("mode")
  if(prevAppMode){
    const jsonAppModeConfig = JSON.parse(prevAppMode)
    isLightMood.value = jsonAppModeConfig
  }
})

</script>

<style scoped>
.appLayout-wrapper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
}
</style>
