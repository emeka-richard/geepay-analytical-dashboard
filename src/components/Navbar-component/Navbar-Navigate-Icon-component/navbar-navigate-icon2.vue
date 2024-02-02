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
          d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.17 12L10.7 11.3L7.5 14.5"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.5 9.5L14.99 11.01L14 12"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.5 9.5H16.5V11.5"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <svg
      ref="svgItem"
      class="nav-focus-svg-hidden icon2"
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


watch([iconName, isLightMood], ([currentIconName, currentAppMood], [prevIconName, prevAppMood])=>{
  if(currentIconName !== "icon2"){
    svgItem.value.classList.replace(
      "nav-focus-svg-show",
      "nav-focus-svg-hidden"
    );
    stroke.value = `var(--color-set-33)`
  } else if(currentIconName === "icon2" && currentAppMood === true){
    stroke.value = `var(--color-set-26)`
    svgFill.value = `var(--color-set-26)`
  } else if(currentIconName === "icon2" && currentAppMood === false){
    stroke.value = `var(--color-set-1)`
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
    emit("emit-icon", "icon2")
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
