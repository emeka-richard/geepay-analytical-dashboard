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
          d="M14.6599 20.01L13.1399 21.53C12.5199 22.15 11.4999 22.15 10.8799 21.53L9.3599 20.01C9.0999 19.75 8.58992 19.54 8.22992 19.54H6.0799C5.1999 19.54 4.47992 18.8199 4.47992 17.9399V15.79C4.47992 15.43 4.26992 14.92 4.00992 14.66L2.4899 13.14C1.8699 12.52 1.8699 11.5 2.4899 10.88L4.00992 9.35999C4.26992 9.09999 4.47992 8.58998 4.47992 8.22998V6.07996C4.47992 5.19996 5.1999 4.47998 6.0799 4.47998"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.33984 3.99002L10.8598 2.47C11.4798 1.85 12.4998 1.85 13.1198 2.47L14.6399 3.99002C14.8999 4.25002 15.4098 4.46 15.7698 4.46H17.9199C18.7999 4.46 19.5198 5.18009 19.5198 6.06009V8.21C19.5198 8.57 19.7298 9.08 19.9898 9.34L21.5099 10.86C22.1299 11.48 22.1299 12.5 21.5099 13.12L19.9898 14.64C19.7298 14.9 19.5198 15.4101 19.5198 15.7701V17.9201C19.5198 18.8001 18.7999 19.5201 17.9199 19.5201"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9 15L15 9"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.4945 14.5H14.5035"
          :stroke=stroke
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.49451 9.5H9.50349"
          :stroke=stroke
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <svg
      ref="svgItem"
      class="nav-focus-svg-hidden icon5"
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
//   if(currentIconName !== "icon5"){
//     svgItem.value.classList.replace(
//       "nav-focus-svg-show",
//       "nav-focus-svg-hidden"
//     );
//     stroke.value = `#B2ABAB`
//     return;
//   }
// })

watch([iconName, isLightMood], ([currentIconName, currentAppMood], [prevIconName, prevAppMood])=>{
  if(currentIconName !== "icon5"){
    svgItem.value.classList.replace(
      "nav-focus-svg-show",
      "nav-focus-svg-hidden"
    );
    stroke.value = `var(--color-set-33)`
  } else if(currentIconName === "icon5" && currentAppMood === true){
    stroke.value = `var(--color-set-26)`
    svgFill.value = `var(--color-set-26)`
  } else if(currentIconName === "icon5" && currentAppMood === false){
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
    emit("emit-icon", "icon5")
  }
};

</script>

<style scoped>
.nav-focus-svg-hidden {
  display: none;
}
.nav-focus-svg-show {
  display: block;
}

.navbar-navigate-svg {
  width: 100%;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
