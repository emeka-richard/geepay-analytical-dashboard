<template>
  <nav class="nav-wrapper" :style="{ backgroundColor: `${navBGColor}`}">
    <div class="nav-main-container">
      <section class="nav-container-1">
        <navbarAppIcon />
        <navbarNavigateIconsVue />
      </section>
      <navbarAltIcons />
      <div class="nav-container-2">
        <navbarMobileDropDown />
        <BarFontAwesome />
      </div>
    </div>
  </nav>
  <navbarMobileFooter />
</template>

<script setup>
import navbarAppIcon from "./navbar-app-icon.vue";
import navbarNavigateIconsVue from "./Navbar-Navigate-Icon-component/navbar-navigate-icons.vue";
import navbarAltIcons from "./Navbar-Alt-Icon-component/navbar-alt-icons.vue";
import navbarMobileFooter from '@/components/Navbar-component/navbar-mobile-footer.vue';
import navbarMobileDropDown from "./navbar-mobile-dropDown.vue";

import BarFontAwesome from "./Bar-fontAwesome.vue";
import { ref, provide, inject, onMounted, watch } from "vue";

const isLightMood = inject("isLightMood")

const navBGColor = ref()
const iconName = ref("icon1");
const isNavbarWrapped = ref(false);

provide("iconName", iconName);
provide("isNavbarWrapped", isNavbarWrapped);

provide("emitIconName", (eventName, data) => {
  iconName.value = data;
});
provide("emitNavStatus", (eventName, data) => {
  isNavbarWrapped.value = data;
});

onMounted(()=>{
    if (isLightMood.value === true) {
      navBGColor.value = `var(--color-set-30)`;
  } else if (isLightMood.value === false) {
    navBGColor.value = `var(--color-set-31)`;
  }
})

watch(isLightMood, (currentIconName, prevIconName) => {
  if (currentIconName === true) {
    navBGColor.value = `var(--color-set-30)`;
  } else if (currentIconName === false) {
    navBGColor.value = `var(--color-set-31)`;
  }
})

</script>

<style scoped>
.nav-wrapper,
.nav-main-container {
  width: 100%;
  /* max-width: 5rem; */
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  /* align-self: stretch; */
}
.nav-wrapper {
  border-bottom: 1px solid var(--color-set-32);
}
.nav-main-container {
  padding: 1.5rem 1.25rem;
}
.nav-container-1 {
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* gap: 1.25rem; */
}
.nav-container-2 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

@media screen and (min-width: 769px) {
  .nav-wrapper,
  .nav-main-container {
    width: 100%;
    max-width: 5rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
  }
  .nav-wrapper {
    border-right: 1px solid var(--color-set-32);
  }
  .nav-main-container {
    padding: 1.5rem 0.125rem;
  }
  .nav-container-1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;
  }
}
</style>
