<template>
    <div @click="handleNavigate" class="nav-alt-svg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8.5 12H14.5"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5 15L15.5 12L12.5 9"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
</template>

<script setup>
import { ref, inject, watch } from "vue";

const stroke = ref(`var(--color-set-33)`);
const isLightMood = inject("isLightMood");
const iconName = inject("iconName");
const emit = inject("emitIconName");


// watch(iconName, (currentIconName, prevIconName)=>{
//   if(currentIconName !== "alt-icon1"){
//     stroke.value = `#B2ABAB`
//     return;
//   }
// })

watch([iconName, isLightMood], ([currentIconName, currentAppMood], [prevIconName, prevAppMood])=>{
  if(currentIconName !== "alt-icon1"){
    stroke.value = `var(--color-set-33)`
  } else if(currentIconName === "alt-icon1" && currentAppMood === true){
    stroke.value = `var(--color-set-26)`
  } else if(currentIconName === "alt-icon1" && currentAppMood === false){
    stroke.value = `var(--color-set-2)`
  }
  return;
})


const handleNavigate = () => {
    stroke.value = isLightMood.value === true ? `var(--color-set-26)` : `var(--color-set-2)`
    emit("emit-icon", "alt-icon1")
};
</script>

<style scoped>
.nav-alt-svg-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
}

</style>