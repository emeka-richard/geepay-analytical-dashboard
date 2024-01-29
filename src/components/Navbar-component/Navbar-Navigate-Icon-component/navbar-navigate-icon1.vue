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
          :opacity="opacity"
          d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z"
          :fill="svgFill"
        />
        <path
          opacity="0.4"
          d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z"
          :fill="svgFill"
        />
        <path
          :opacity="opacity"
          d="M18.6699 13.4301H16.7699C14.5899 13.4301 13.4399 14.5801 13.4399 16.7601V18.6601C13.4399 20.8401 14.5899 21.9901 16.7699 21.9901H18.6699C20.8499 21.9901 21.9999 20.8401 21.9999 18.6601V16.7601C21.9999 14.5801 20.8499 13.4301 18.6699 13.4301Z"
          :fill="svgFill"
        />
        <path
          opacity="0.4"
          d="M7.24 13.4301H5.34C3.15 13.4301 2 14.5801 2 16.7601V18.6601C2 20.8501 3.15 22.0001 5.33 22.0001H7.23C9.41 22.0001 10.56 20.8501 10.56 18.6701V16.7701C10.57 14.5801 9.42 13.4301 7.24 13.4301Z"
          :fill="svgFill"
        />
      </svg>
    </div>
    <svg
      ref="svgItem"
      class="nav-focus-svg-show"
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="21"
      viewBox="0 0 3 21"
      fill="none"
    >
      <path
        d="M6.53467e-06 3.02509C7.11773e-06 1.42129 1.40951 0.182713 3 0.388889V21C1.34315 21 4.88293e-07 19.6569 1.09063e-06 18L6.53467e-06 3.02509Z"
        :fill="svgFill"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, inject, onBeforeMount, watch } from "vue";

const iconName = inject("iconName");
const svgItem = ref("");
const opacity = ref(1);
const svgFill = ref(`var(--color-set-26)`);

const isLightMood = inject("isLightMood");
const emit = inject("emitIconName");

// watch(isLightMood, (currentAppMood, prevAppMood)=>{
//   if(currentAppMood === false){
//     svgFill.value = `var(--color-set-23)`
//   } else {
//     svgFill.value = `var(--color-set-26)`
//   }
// })

watch(
  [iconName, isLightMood],
  ([currentIconName, currentAppMood], [prevIconName, prevAppMood]) => {
    if (currentIconName !== "icon1") {
      svgItem.value.classList.replace(
        "nav-focus-svg-show",
        "nav-focus-svg-hidden"
      );
      opacity.value = 0.4;
      svgFill.value = `var(--color-set-33)`;
    } else if(currentIconName !== "icon1" && currentAppMood === false){
      svgItem.value.classList.replace(
        "nav-focus-svg-show",
        "nav-focus-svg-hidden"
      );
      opacity.value = 0.4
      svgFill.value = `var(--color-set-1)`;
    }
    if (currentIconName === "icon1" && currentAppMood === true) {
      opacity.value = 1;
      svgFill.value = `var(--color-set-26)`;
    } else if (currentIconName === "icon1" && currentAppMood === false) {
      opacity.value = 1;
      svgFill.value = `var(--color-set-1)`;
    }
    return;
  }
);

const handleNavigate = () => {
  const isIcon1 = svgItem.value.classList;
  const isHidden = isIcon1.contains("nav-focus-svg-hidden");
  if (isHidden) {
    svgItem.value.classList.replace(
      "nav-focus-svg-hidden",
      "nav-focus-svg-show"
    );
    opacity.value = 1;
    emit("emit-icon", "icon1");
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
.nav-focus-svg-show:focus {
  display: block;
  width: 10rem;
  fill: red;
}
</style>
