<template>
  <div @click="handleNavigate" class="navbar-navigate-icon-container">
    <div class="navbar-navigate-svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 8V13"
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
        <path
          d="M11.9946 16H12.0036"
          :stroke=stroke
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <svg
      ref="svgItem"
      class="nav-focus-svg-hidden icon6"
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="21"
      viewBox="0 0 3 21"
      fill="none"
    >
      <path
        d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
        :fill=svgFill
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, inject, watch } from "vue";

const svgItem = ref();
const stroke = ref(`var(--color-set-33)`);
const svgFill = ref(`var(--color-set-26)`);
const isLightMood = inject("isLightMood");
const iconName = inject("iconName");
const emit = inject("emitIconName");


// watch(iconName, (currentIconName, prevIconName)=>{
//   if(currentIconName !== "icon6"){
//     svgItem.value.classList.replace(
//       "nav-focus-svg-show",
//       "nav-focus-svg-hidden"
//     );
//     stroke.value = `#B2ABAB`
//     return;
//   }
// })

watch([iconName, isLightMood], ([currentIconName, currentAppMood], [prevIconName, prevAppMood])=>{
  if(currentIconName !== "icon6"){
    svgItem.value.classList.replace(
      "nav-focus-svg-show",
      "nav-focus-svg-hidden"
    );
    stroke.value = `var(--color-set-33)`
  } else if(currentIconName === "icon6" && currentAppMood === true){
    stroke.value = `var(--color-set-26)`
    svgFill.value = `var(--color-set-26)`
  } else if(currentIconName === "icon6" && currentAppMood === false){
    stroke.value = `var(--color-set-7)`
    svgFill.value = `var(--color-set-7)`
  }
  return;
})

const handleNavigate = () => {
  const isIcon1 = svgItem.value.classList;
  const isHidden = isIcon1.contains("nav-focus-svg-hidden");
  if (isHidden) {
    svgItem.value.classList.replace(
      "nav-focus-svg-hidden",
      "nav-focus-svg-show"
    );
    stroke.value = isLightMood.value === true ? `var(--color-set-26)` : `var(--color-set-7)`
    svgFill.value = isLightMood.value === true ? `var(--color-set-26)` : `var(--color-set-7)`
    emit("emit-icon", "icon6")
  }
};
</script>

<style scoped>

.navbar-navigate-svg {
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-focus-svg-hidden {
  display: none;
}
.nav-focus-svg-show {
  display: block;
}

</style>
