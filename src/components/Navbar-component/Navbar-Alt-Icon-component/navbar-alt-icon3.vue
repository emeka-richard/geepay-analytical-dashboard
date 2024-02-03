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
          d="M6.56 14.5599L4 11.9999L6.56 9.43994"
          :stroke=stroke
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.23982 12H4.06982"
          :stroke=stroke
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.2398 12H12.2798"
          :stroke=stroke
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.01 6.47998C19.25 7.83998 20 9.70998 20 12C20 17 16.42 20 12 20"
          :stroke=stroke
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 4C13.05 4 14.05 4.17 14.97 4.49"
          :stroke=stroke
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
</template>

<script setup>
import { ref, inject, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const stroke = ref(`var(--color-set-33)`);
const isLightMood = inject("isLightMood");
const iconName = inject("iconName");
const emit = inject("emitIconName");

watch([iconName, isLightMood], ([currentIconName, currentAppMood], [prevIconName, prevAppMood])=>{
  if(currentIconName !== "alt-icon3"){
    stroke.value = `var(--color-set-33)`
  } else if(currentIconName === "alt-icon3" && currentAppMood === true){
    stroke.value = `var(--color-set-26)`
  } else if(currentIconName === "alt-icon3" && currentAppMood === false){
    stroke.value = `var(--color-set-2)`
  }
  return;
})


const handleNavigate = () => {
    stroke.value = isLightMood.value === true ? `var(--color-set-26)` : `var(--color-set-2)`
    emit("emit-icon", "alt-icon3")
    router.push({name: '404-page'})
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