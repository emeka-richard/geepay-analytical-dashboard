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
          d="M3.16992 7.44006L11.9999 12.55L20.7699 7.47003"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 21.61V12.54"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.39014 9.17007C2.39014 7.79007 3.38012 6.11009 4.59012 5.44009L9.93011 2.47006C11.0701 1.84006 12.9401 1.84006 14.0801 2.47006L19.4201 5.44009C20.6301 6.11009 21.6201 7.79007 21.6201 9.17007V14.8201C21.6201 16.2001 20.6301 17.8801 19.4201 18.5501L14.0801 21.5201C12.9401 22.1501 11.0701 22.1501 9.93011 21.5201L4.59012 18.5501C3.38012 17.8801 2.39014 16.2001 2.39014 14.8201V14.0001"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.9998 13.24V9.58002L10.9297 6.07001L9.87976 5.46997L7.50977 4.09998"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <svg
      ref="svgItem"
      class="nav-focus-svg-hidden icon4"
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
import { useRouter } from "vue-router";

const router = useRouter()

const svgItem = ref();
const stroke = ref(`var(--color-set-33)`);
const svgFill = ref(`var(--color-set-26)`);
const isLightMood = inject("isLightMood");
const iconName = inject("iconName");
const emit = inject("emitIconName");


watch([iconName, isLightMood], ([currentIconName, currentAppMood], [prevIconName, prevAppMood])=>{
  if(currentIconName !== "icon4"){
    svgItem.value.classList.replace(
      "nav-focus-svg-show",
      "nav-focus-svg-hidden"
    );
    stroke.value = `var(--color-set-33)`
  } else if(currentIconName === "icon4" && currentAppMood === true){
    stroke.value = `var(--color-set-26)`
    svgFill.value = `var(--color-set-26)`
  } else if(currentIconName === "icon4" && currentAppMood === false){
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
    emit("emit-icon", "icon4")
  }
  router.push({ name: "404-page"})
};
</script>

<style scoped>
.navbar-navigate-icon-container {
  width: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

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
  display: none;
}

@media screen and (min-width: 769px) {
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
}

</style>
