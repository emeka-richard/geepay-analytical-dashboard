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
          d="M12.6801 3.96C13.1601 4.67 13.4401 5.52 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
          :stroke=stroke
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <svg
      ref="svgItem"
      class="nav-focus-svg-hidden icon3"
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
  if(currentIconName !== "icon3"){
    svgItem.value.classList.replace(
      "nav-focus-svg-show",
      "nav-focus-svg-hidden"
    );
    stroke.value = `var(--color-set-33)`
  } else if(currentIconName === "icon3" && currentAppMood === true){
    stroke.value = `var(--color-set-26)`
    svgFill.value = `var(--color-set-26)`
  } else if(currentIconName === "icon3" && currentAppMood === false){
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
    emit("emit-icon", "icon3")
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
