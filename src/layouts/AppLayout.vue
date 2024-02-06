<template>
  <div class="appLayout-wrapper" :style="{ backgroundColor: `${bgColor}` }">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar-component/Navbar.vue";
import { ref, provide, watch, onBeforeMount, onMounted } from 'vue';
import {useAppMode} from "../pinia-store/AppModeStore"
const store = useAppMode();
const appMode = store.getAppMode

const isLightMood = ref();

const bgColor = ref();

onBeforeMount(()=>{
  const initialAppMode = localStorage.getItem("appMode")
  if(initialAppMode){
    const jsonAppMode = JSON.parse(initialAppMode)
    store.setAppMode(jsonAppMode)
    isLightMood.value = jsonAppMode
    return;
  }
  isLightMood.value = appMode

})


onMounted(()=>{
  if (isLightMood.value === true) {
    bgColor.value = `var(--color-set-30)`;
  } else if (isLightMood.value === false) {
    bgColor.value = `var(--color-set-31)`;
  }
})

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    bgColor.value = `var(--color-set-30)`;
  } else if (currentIconName === false) {
    bgColor.value = `var(--color-set-31)`;
  }
});

provide("isLightMood", isLightMood);
provide("emitAppMood", (eventName, data) => {
  store.setAppMode(data)
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
